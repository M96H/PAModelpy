import matplotlib.pyplot as plt
import pandas as pd
import os

from Scripts.tam_generation import set_up_toy_tam, set_up_ecolicore_tam
from Scripts.pam_generation import set_up_ecolicore_pam

sinha_ref_conditions = {
    'Holm et al': ['REF', 'NOX', 'ATP'], #WT and NADH  overexpression conditions, mu 0.72, 0.65,0.58 h-1 respectively
    'Ishii et al': ['WT_0.7h-1'],
    'Gerosa et al.': ['Glycerol','Glucose','Acetate', 'Pyruvate','Gluconate','Succinate','Galactose','Fructose'],
}
TRANSCRIPT_FILE_PATH = os.path.join('Data', 'TAModel', 'Sinha-etal_2021_transcript-data.xlsx')
FLUX_FILE_PATH = os.path.join('Data', 'TAModel', 'Sinha-etal_2021_flux-data.xlsx')


mrna_vs_mu_slope = 2.64E-10
mrna_vs_mu_intercept = 3.59E-11


def get_transcript_data(transcript_file_path:str = TRANSCRIPT_FILE_PATH, mmol = True,
                        reference: str = 'Holm et al', growth_rates = [0.72, 0.65,0.58]):
    expression_data = pd.read_excel(transcript_file_path, sheet_name=reference, index_col=0)
    # Normalize columns by dividing by the sum of each column
    expression_data_normalized = expression_data.div(expression_data.sum(axis=0), axis=1)
    if mmol:
        mrna_conc = [mrna_vs_mu_intercept + mrna_vs_mu_slope*mu for mu in growth_rates]
        expression_data_mmol = expression_data_normalized.apply(lambda row: row * mrna_conc, axis=1)
        return expression_data_mmol
    else:
        return expression_data_normalized

def get_flux_data(flux_file_path:str = FLUX_FILE_PATH,
                        reference: str = 'Holm et al'):
    expression_data = pd.read_excel(flux_file_path, sheet_name=reference, index_col=0)
    if reference == 'Holm et al':
        #remove R suffix
        expression_data.index = expression_data.index.str.replace('R_', '')
    return expression_data

def get_pam_fluxes(substrate_uptake_rate):
    pam = set_up_ecolicore_pam()
    pam.change_reaction_bounds('EX_glc__D_e', lower_bound=-substrate_uptake_rate, upper_bound=0)
    sol = pam.optimize()
    pam_fluxes = sol.fluxes
    return pam_fluxes

def set_up_tamodel(strain ='REF'):
    tam = set_up_ecolicore_tam()
    tam.change_reaction_bounds('EX_glc__D_e', lower_bound=-1e6, upper_bound=0)
    transcript_data_mmol = get_transcript_data()

    for gene, expression_data in transcript_data_mmol.iterrows():
        transcript_id = 'mRNA_' + gene
        if not transcript_id in tam.transcripts: continue
        transcript = tam.transcripts.get_by_id('mRNA_' + gene)
        # testing wildtype condition
        transcript.change_concentration(concentration=expression_data[strain],
                                        error=expression_data[strain] * 0.01)
    return tam

def get_tam_fluxes(tam,substrate_uptake_rate):
    tam.change_reaction_bounds('EX_glc__D_e', lower_bound=-substrate_uptake_rate, upper_bound=0)
    sol = tam.optimize()
    tam_fluxes = sol.fluxes
    return tam_fluxes

def compare_flux_data(flux_data, pam_fluxes, tam_fluxes, strain ='REF', abs=True):
    if abs:
        glc_upt_ref = 1
        glc_upt_pam = 1
        glc_upt_tam = 1
    else:
        glc_upt_ref = flux_data[strain]['GLCptspp']
        glc_upt_pam = pam_fluxes['GLCpts']
        glc_upt_tam = tam_fluxes['GLCpts']

    flux_results = flux_data[[strain]]
    flux_results_percentage = flux_results.assign(
        strain=lambda val: val[strain] / glc_upt_ref)
    flux_results_percentage['PAM'] = 0
    flux_results_percentage['TAM'] = 0
    for rxn in flux_data.index:
        ori_rxn = rxn
        if 'pp' in rxn: rxn = rxn.replace('pp', '')
        if 'biomass' in rxn: rxn = 'BIOMASS_Ecoli_core_w_GAM'
        if 'EX_glc' in rxn: rxn = 'EX_glc__D_e'
        if 'EX_ac' in rxn: rxn = 'EX_ac_e'
        flux_results_percentage['PAM'][ori_rxn] = pam_fluxes[rxn] / glc_upt_pam
        flux_results_percentage['TAM'][ori_rxn] = tam_fluxes[rxn] / glc_upt_tam

    print(flux_results_percentage.to_markdown())
    return flux_results_percentage

def compare_fluxes_holm_reference(strain = 'REF'):
    flux_data =get_flux_data()
    substrate_uptake_rate = flux_data[strain]['GLCptspp']

    pam_fluxes = get_pam_fluxes(substrate_uptake_rate=substrate_uptake_rate)

    tam = set_up_tamodel(strain)
    tam_fluxes = get_tam_fluxes(tam, substrate_uptake_rate=substrate_uptake_rate)
    for i,row in tam.capacity_sensitivity_coefficients.iterrows():
        if row.coefficient > 0: print(row)

    flux_relative = compare_flux_data(flux_data, pam_fluxes, tam_fluxes,  strain,abs = False)
    flux_absolute = compare_flux_data(flux_data, pam_fluxes, tam_fluxes,  strain)

    plot_flux_comparison(flux_absolute, flux_relative, strain)

def plot_flux_comparison(flux_df_abs, flux_df_rel, strain):
    fig, ax = plt.subplots(1,2)

    ax[0].scatter(flux_df_abs['TAM'], flux_df_abs['strain'], color = 'black')
    ax[0].scatter(flux_df_abs['PAM'], flux_df_abs['strain'], color ='red')
    #reference line
    ax[0].plot(flux_df_abs['strain'], flux_df_abs['strain'], linestyle ='dashed')

    ax[0].set_title(strain + ' absolute fluxes')
    ax[0].set_xlabel('simulated flux [$mmol/g_{CDW}/h$]')
    ax[0].set_ylabel('measured flux [$mmol/g_{CDW}/h$]')

    ax[1].scatter(flux_df_rel['TAM'], flux_df_rel['strain'], color='black', label = 'TAM')
    ax[1].scatter(flux_df_rel['PAM'], flux_df_rel['strain'], color='red', label = 'PAM')
    # reference line
    ax[1].plot(flux_df_rel['strain'], flux_df_rel['strain'], linestyle='dashed')

    ax[1].set_title(strain + ' relative fluxes')
    ax[1].set_xlabel('simulated flux [$mmol/g_{CDW}/h$]')
    ax[1].set_ylabel('measured flux [$mmol/g_{CDW}/h$]')

    fig.set_figwidth(20)
    fig.set_figheight(10)
    plt.legend()
    plt.show()


if __name__ == '__main__':
    print('Reference condition')
    compare_fluxes_holm_reference()
    print('\n-------------------------------------------------------------------------------------------------')
    print('mutation 1: NOX strain (overexpression of NADH oxidase)\n')
    compare_fluxes_holm_reference('NOX')
    # TODO print mRNA and protein concentrations to compare with lb
    # TODO print shadowprices of mRNA (are lbs hit? how far can I constrain?)






