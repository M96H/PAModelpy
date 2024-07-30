"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7402],{6444:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var i=t(5893),o=t(1151);const s={title:"Examples",sidebar_position:2,sidebar_title:"Examples"},a="Example usage of PAModelpy",r={id:"example",title:"Examples",description:"*",source:"@site/docs/example.md",sourceDirName:".",slug:"/example",permalink:"/PAModelpy/example",draft:!1,unlisted:!1,editUrl:"https://github.com/SamiralVdB/PAModelpy/tree/main/docs/docs/example.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Examples",sidebar_position:2,sidebar_title:"Examples"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/PAModelpy/"},next:{title:"API Reference",permalink:"/PAModelpy/category/api-reference"}},l={},c=[{value:"Example 1: setting up an <em>Escherichia coli</em> Protein Allocation model (PAM)",id:"example-1-setting-up-an-escherichia-coli-protein-allocation-model-pam",level:2},{value:"Step 1: Initiate the protein sectors",id:"step-1-initiate-the-protein-sectors",level:3},{value:"1.1: Active enzyme sector",id:"11-active-enzyme-sector",level:4},{value:"1.2: Translational protein sector",id:"12-translational-protein-sector",level:4},{value:"1.3 Unused enzyme sector",id:"13-unused-enzyme-sector",level:4},{value:"Step 2: Building the model",id:"step-2-building-the-model",level:3},{value:"Step 3: run and validate the model results",id:"step-3-run-and-validate-the-model-results",level:3},{value:"Step 4: interpreting the results",id:"step-4-interpreting-the-results",level:3},{value:"Outlook",id:"outlook",level:3},{value:"Example 2: Determining the most sensitive enzymes in a toy model",id:"example-2-determining-the-most-sensitive-enzymes-in-a-toy-model",level:2},{value:"Step 1: Build the toy model",id:"step-1-build-the-toy-model",level:3},{value:"Step 2: Perform the model simulations",id:"step-2-perform-the-model-simulations",level:3},{value:"Step 3: Plot the enzyme and capacity sensitivty coefficients heatmaps",id:"step-3-plot-the-enzyme-and-capacity-sensitivty-coefficients-heatmaps",level:3},{value:"Step 4: Interpret the results",id:"step-4-interpret-the-results",level:3},{value:"Outlook",id:"outlook-1",level:3}];function d(e){const n={a:"a",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"example-usage-of-pamodelpy",children:"Example usage of PAModelpy"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.h2,{id:"example-1-setting-up-an-escherichia-coli-protein-allocation-model-pam",children:["Example 1: setting up an ",(0,i.jsx)(n.em,{children:"Escherichia coli"})," Protein Allocation model (PAM)"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Escherichia coli"})," (",(0,i.jsx)(n.em,{children:"E.coli"}),") is a commonly used model organism in Microbiology. When this microorganism is grown\non increasing glucose concentration, it shifts from a purely respiratory metabolism to a respiro-fermentative metabolic\nphenotype. This phenomenon is called 'overflow metabolism'. Interestingly, overflow metabolism cannot be simulated using\nnormal genome-scale models without additional constraints. With properly parametrized protein-constrained models however,\nwe are able to simulate this metabolic phenotype. In this example, we'll set-up the ",(0,i.jsx)(n.em,{children:"E.coli"})," PAM, and we'll study the\npredicted metabolic phenotypes for a range of glucose uptake rates."]}),"\n",(0,i.jsx)(n.p,{children:"For this entire tutorial, you'll need to load the following packages:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"#importing the packages\nimport os\nfrom cobra.io import read_sbml_model\nimport pandas as pd\n\n#load PAMpy modules\nfrom PAModelpy.EnzymeSectors import ActiveEnzymeSector, TransEnzymeSector, UnusedEnzymeSector\nfrom PAModelpy.PAModel import PAModel\nfrom PAModelpy.PAMValidator import PAMValidator\nfrom PAModelpy.configuration import Config\n"})}),"\n",(0,i.jsx)(n.h3,{id:"step-1-initiate-the-protein-sectors",children:"Step 1: Initiate the protein sectors"}),"\n",(0,i.jsxs)(n.p,{children:["Each protein-allocation model has three sectors: active enzyme sector (enzymes catalyzing the metabolic reactions),\ntranslational protein sectors (i.e. ribosomal proteins required for translation) and unused proteins (idle proteins\nwhich help the cell adapt to new conditions). The total of these three sectors is limited by an upperbound. This\nupperbound is determined by the sum of all non-maintenance enzymes, which is assumed to be constant for prokaryotes.\nFor examples on how to parametrize these sectors, refer to ",(0,i.jsx)(n.code,{children:"Scripts/create_ecolicore_pam_inclUE.ipynb"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"11-active-enzyme-sector",children:"1.1: Active enzyme sector"}),"\n",(0,i.jsxs)(n.p,{children:["The active enzyme sector will be build using information about which enzymes catalyzes a specific reaction,\nthe turnover rate of the catalysis and the molar mass of the enzyme. In this example we'll use the parameters as\npublished by ",(0,i.jsx)(n.a,{href:"https://journals.asm.org/doi/10.1128/mSystems.00625-20",children:"Alter et al. (2021)"}),", which can be found in the ",(0,i.jsx)(n.code,{children:"Data"})," folder of the PAModelpy repository"]}),"\n",(0,i.jsx)(n.p,{children:"First, we'll define the paths we'll download the data"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"protein_sector_info_path = 'Data/proteinAllocationModel_iML1515_EnzymaticData_py.xls'\nactive_enzyme_data = pd.read_excel(protein_sector_info_path, sheet_name='ActiveEnzymes'))\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The data is now in a dataframe with the following columns:\n",(0,i.jsx)(n.code,{children:"rxn_id - rxnName - rxnEquat - EC_nmbr - molMass"}),"\nFirst, let's add an identifier to the reactions for which the enzyme is unknown, in order to distinguish between the\nenzymes"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"#load active enzyme sector information\nactive_enzyme_info = pd.read_excel(pam_info_file, sheet_name='ActiveEnzymes')\n\n# replace NaN values with unique identifiers\n#select the NaN values \nnan_values = active_enzyme_info['EC_nmbr'].isnull()\n#make a list with unique ids\nnan_ids = [f'E{i}' for i in range(nan_values.sum())]\n#replace nan values by unique id\nactive_enzyme_info.loc[nan_values, 'EC_nmbr'] = nan_ids\n\n#check if it worked:\nactive_enzyme_info[nan_values]\n"})}),"\n",(0,i.jsx)(n.p,{children:"We need to collect the data from this table and put it in the correct structure to be parsed into the ActiveEnzymeSector\nobject. The main input in this object is the rxn2protein dictionary, where all the information about protein-reaction\nassociations required to build the protein-reaction relations in the model. It has the following format:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:"{'R1':\n    {'E1':\n        {'f': forward kcat, 'b': backward kcat, \n          'molmass': molar mass, \n          'protein_reaction_relation': [['E1']]},\n     'E2':\n        {'f': forward kcat, 'b': backward kcat, \n          'molmass': molar mass, \n          'protein_reaction_relation': [['E1']]}\n    }\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If you have a information about the gene-protein-reaction associations (e.g. 'AND'/'OR' relations between different\npeptides/proteins for one or more reactions), this information can be added in the ",(0,i.jsx)(n.code,{children:"protein_reaction_relation"})," entry\nof the reaction2protein dictionary. This entry is a list of lists, in which each sublist represent one functional\nenzyme (complex). This means if E1 and E2 catalyze the same reaction, the ",(0,i.jsx)(n.code,{children:"protein_reaction_relation"})," becomes ",(0,i.jsx)(n.code,{children:"[['E1','E2']]"}),"\nfor an enzyme complex ('AND' relation), and ",(0,i.jsx)(n.code,{children:"[['E1']['E2']]"})," for isozymes ('OR' relation). In this example, we will use\none enzyme per reaction for simplicity. In the ",(0,i.jsx)(n.code,{children:"Script/pam_generation_uniprot_ids.py"})," file you can find how you can parse\ngene-protein-reaction relations obtained from a genome-scale model and uniprot to include different enzyme relations."]}),"\n",(0,i.jsx)(n.p,{children:"We need to take the following steps to get the right format:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"# parse the enzyme information (kcat values, identifiers and molmasses)\nkcats_dict = active_enzyme_info.set_index(keys='rxnID').loc[:, 'kcat'].to_dict()\nec_dict = active_enzyme_info.set_index(keys='rxnID').loc[:, 'EC_nmbr'].to_dict()\nmolmass_dict = mol_mass=active_enzyme_info.set_index(keys='rxnID').loc[:,'molMass'].to_dict()\n\n\nkcats = {}\n# save fwd and bckw kcats separately in the form of: {rxn_id: {'f': kcat_f, 'b': kcat_b}}\nfor rxn, kcat in kcats_dict.items():\n    #reversible reaction\n    if rxn[-2:] == '_f' or rxn[-2:] == '_b':\n        direction = rxn[-1]\n        #check if the reaction already exists in the kcat dictionary\n        try: \n            kcats[rxn[:-2]][direction] = kcat\n        except:\n            kcats[rxn[:-2]] = {direction: kcat}\n    #irreversible reaction\n    else:\n        kcats[rxn] = {'f': kcat}\n\nrxn2ec = {}\n#parse the enzyme identifiers for the reactions\nfor rxn, ec in ec_dict.items():\n    if rxn[-2:] == '_f' or rxn[-2:] == '_b':\n        rxn = rxn[:-2]\n    for enz in str(ec).split(','):\n        rxn2ec[rxn] = enz.strip()\n        \nmolmass = {}\n#parse the enzyme molmasses for the reactions\nfor rxn, mw in molmass_dict.items():\n    if rxn[-2:] == '_f' or rxn[-2:] == '_b':\n        rxn = rxn[:-2]\n    molmass[rxn] = mw\n    \nrxn2protein = {}\nfor rxn, ec in rxn2ec.items():\n    ec_dict = {**kcats[rxn], **{'molmass': molmass[rxn], 'protein_reaction_relation': [[ec]]}}\n    #add enzyme to enzymes related to reaction if these are already stored\n    if rxn in rxn2protein.keys():\n        rxn2protein[rxn] = {**rxn2protein[rxn], **{ec:ec_dict}}\n    #if not create new reaction entry\n    else:\n        rxn2protein[rxn] = {ec:ec_dict}\n\nactive_enzyme_sector = ActiveEnzymeSector(rxn2protein=rxn2protein)\n"})}),"\n",(0,i.jsx)(n.h4,{id:"12-translational-protein-sector",children:"1.2: Translational protein sector"}),"\n",(0,i.jsxs)(n.p,{children:["The translational sector requires less parameters. We only need to define the reaction to which this section is proportional,\n(for example the biomass pseudoreaction or substrate uptake rate), defined by ",(0,i.jsx)(n.code,{children:"id_list"}),", and the slope (",(0,i.jsx)(n.code,{children:"tps_mu"}),") and\nintercept (",(0,i.jsx)(n.code,{children:"tps_0"}),") of this relation."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"translational_info = pd.read_excel(protein_sector_info_path, sheet_name='Translational')\nid_list = [translational_info[translational_info.Parameter == 'id_list'].loc[0,'Value']]\ntranslation_enzyme_sector = TransEnzymeSector(id_list=id_list,\n                                                tps_0=[translational_info[translational_info.Parameter == 'tps_0'].loc[1,'Value']],\n                                                tps_mu=[translational_info[translational_info.Parameter == 'tps_mu'].loc[2,'Value']],\n                                                mol_mass=[translational_info[translational_info.Parameter == 'mol_mass'].loc[3,'Value']])\n"})}),"\n",(0,i.jsx)(n.h4,{id:"13-unused-enzyme-sector",children:"1.3 Unused enzyme sector"}),"\n",(0,i.jsx)(n.p,{children:"The unused enzyme sector is defined in a very similar way as the translational protein sector. We assume that this\nsection is absent when the microbe is growing at it's highest growth rate. We'll use this assumption to define the slope:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"unused_protein_info = pd.read_excel(pam_info_file, sheet_name='ExcessEnzymes')\n\nups_0 = unused_protein_info[unused_protein_info.Parameter == 'ups_0'].loc[2,'Value']\nsmax = unused_protein_info[unused_protein_info.Parameter == 's_max_uptake'].loc[1,'Value']\nid_list =[unused_protein_info[translational_info.Parameter == 'id_list'].loc[0,'Value']]\n\n\nunused_protein_sector = UnusedEnzymeSector(id_list=id_list,\n                                            ups_mu=[ups_0/smax],\n                                            ups_0=[ups_0],\n                                            mol_mass=[unused_protein_info[unused_protein_info.Parameter == 'mol_mass'].loc[3,'Value']])\n"})}),"\n",(0,i.jsx)(n.h3,{id:"step-2-building-the-model",children:"Step 2: Building the model"}),"\n",(0,i.jsxs)(n.p,{children:["Now we are ready to build the model! We'll need to determine a maximal protein concentration. Following ",(0,i.jsx)(n.a,{href:"https://journals.asm.org/doi/10.1128/mSystems.00625-20",children:"Alter et al. (2021)"}),",\nlet's take 0.258 mmol/gcdw/h.\nAs a basis, we'll use the iML1515 model, created by ",(0,i.jsx)(n.a,{href:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6521705/",children:"Monk et al. (2017)"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["NB: for the more advanced users who want to run the sensitivity analysis, please ensure that the ",(0,i.jsx)(n.code,{children:"sensitivity"})," argument\nis set to ",(0,i.jsx)(n.code,{children:"True"}),". If you are not interested in the sensitivity analysis, you can set ",(0,i.jsx)(n.code,{children:"sensitivity"})," to ",(0,i.jsx)(n.code,{children:"False"}),", which\nwill speed up the computation time."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"#load the genome-scale information\nmodel = read_sbml_model(os.path.join('Models', 'iML1515.xml'))\n\n#load the PAM with the genome-scale information and the information about the enzyme sectors\npamodel = PAModel(id_or_model=model, \n                  p_tot=0.258,\n                   active_sector=active_enzyme_sector, \n                  translational_sector=translation_enzyme_sector,\n                  unused_sector=unused_protein_sector,\n                        sensitivity =True\n                 ) \n"})}),"\n",(0,i.jsx)(n.h3,{id:"step-3-run-and-validate-the-model-results",children:"Step 3: run and validate the model results"}),"\n",(0,i.jsx)(n.p,{children:"To see if the PAM is working we can run some dummy simulations. Also, the PAMValidator module has functions which\nallow for easy visualization of the model predictions vs measured experimental data."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"pamodel.test()\n"})}),"\n",(0,i.jsx)(n.p,{children:"This is a simulation with a glucose uptake rate set to 10 mmol/gcdw/h.\nWe can easily change to a different substrate uptake rate, e.g. 5 mmol/gcdw/h by putting that in as an function argument"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"pamodel.test(5)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In the PAMValidator object, you can find functions to run simulations over a range of substrate uptake rates.\nTo initiate the PAMValidator, you need to provide the model and a path to an excel file with experimental data.\nIn this example,we'll use the experimental data which can be found in\n",(0,i.jsx)(n.code,{children:"Data/Ecoli_phenotypes/Ecoli_phenotypes_py_rev.xls"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"from PAModelpy.PAMValidator import PAMValidator\n\nvalidator = PAMValidator(pamodel,'Data/Ecoli_phenotypes/Ecoli_phenotypes_py_rev.xls')\n#model flux rates of biomass formation, acetate, CO2 and O2 vs glucose uptake rate for a range of growth rates\nvalidator.validate_range()\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Alternatively, you can run simulations in a good old-fashioned for-loop. For examples on how to do that look at the\njupyter notebooks in the ",(0,i.jsx)(n.code,{children:"Figures"})," directory."]}),"\n",(0,i.jsx)(n.h3,{id:"step-4-interpreting-the-results",children:"Step 4: interpreting the results"}),"\n",(0,i.jsx)(n.p,{children:"What does the result tell you? What is the predicted metabolic phenotype and how does this relate to the experimental\nresults. Did the model capture overflow metabolism?"}),"\n",(0,i.jsx)(n.h3,{id:"outlook",children:"Outlook"}),"\n",(0,i.jsxs)(n.p,{children:["After this tutorial, you know how to apply PAModelpy to this very well-studied ",(0,i.jsx)(n.em,{children:"E.coli"})," example. But how to address you're\nspecific issue with your specific microbe? In the next example we'll show you how to use the Config() object to give the\nPAModel the right naming conventions for your specific microbe. Are you more interested in performing modifications to\nthe model, such as deleting or adding enzymes, changing kcats, changing enzymes upper- and lowerbounds? Then have a look\nat the following jupyter notebook: ",(0,i.jsx)(n.code,{children:"Examples/PAModel_example_script.ipynb"}),". Have fun!"]}),"\n",(0,i.jsx)(n.h2,{id:"example-2-determining-the-most-sensitive-enzymes-in-a-toy-model",children:"Example 2: Determining the most sensitive enzymes in a toy model"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.p,{children:"When looking at the flux distribution resulting from our simulations, we do not get any information about which enzymes\nplayed an important role in prediciting the specific metabolic phenotype. However, with the right model configurations,\nwe get the sensitivity of the objective function to slight changes in the enzyme availability (enzyme sensitivity\ncoefficients, ESC) as a result from the model simulations. In this example we'll use a toy model to illustrate how these\nsensitivities can help us explain concepts of protein allocation."}),"\n",(0,i.jsxs)("figure",{id:"toy_model_image",children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"toy_model_image",src:t(7623).Z+"",width:"13629",height:"7278"})}),(0,i.jsxs)("figcaption",{children:[(0,i.jsx)(n.strong,{children:"Figure 1. Toy model network and parameters"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsxs)(n.em,{children:["This toy model represents a schematic overview of a microbial metabolism,\nwith an energy efficient (R1-R2-R4+R5-R6-R7) and an enzyme efficient (R1-R2-R3+R5-R6-R7) pathway. Besides the enzymes\ncatalyzing the reactions (denoted with an 'E') and corresponding catalytic efficiency (k",(0,i.jsx)("sub",{children:"cat"}),"), also the relation\nwith the reactions and the enzyme sectors are given. UES: Unused Enzyme Sector, TES: Translational Enzyme Sector, AES:\nActive Enzyme Sector."]})]})]}),"\n",(0,i.jsx)(n.p,{children:"First, all import statements you'll need in this example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import numpy as np\nfrom cobra.io import load_json_model\nimport plotly.express\n\nfrom PAModelpy.EnzymeSectors import ActiveEnzymeSector, TransEnzymeSector, UnusedEnzymeSector\nfrom PAModelpy.PAModel import PAModel\nfrom PAModelpy.PAMValidator import PAMValidator\nfrom PAModelpy.configuration import Config\n"})}),"\n",(0,i.jsx)(n.h3,{id:"step-1-build-the-toy-model",children:"Step 1: Build the toy model"}),"\n",(0,i.jsxs)(n.p,{children:["Obviously, we first have to build the toy model. To make it easy, we have provided the toy model structure\nin a .json file in the ",(0,i.jsx)(n.code,{children:"Models"})," directory. As the PAModelpy package makes working with real-life data easy,\nit performs units conversions to some inputs. For example, the kcat value is normally published in per sec, while we need\nper hour in our calculations. Furthermore, some inputs are scaled in order to decrease the order of magnitude difference\nbetween the variables. When we want to use 'dummy' data in a toy model, we need to take this into account."]}),"\n",(0,i.jsxs)(n.p,{children:["But before we start building the model, we need to be aware of one thing: the PAModel object assumes you want to\nanalyse the ",(0,i.jsx)(n.em,{children:"E.coli"})," iML1515 model by default. How can we make the model aware that we are using another model, and that\nwe thus need other identifiers for substrate uptake rate, growth rate, etc? The Config object helps you with just that!\nYou can use this object to configure all the identifiers you need. Don't forget to pass this object to all the PAModel\nobjects you'll initialize, so all the information is passed on!"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"config = Config()\nconfig.BIOMASS_REACTION = 'R7'\nconfig.GLUCOSE_EXCHANGE_RXNID = 'R1'\nconfig.CO2_EXHANGE_RXNID = 'R8'\nconfig.ACETATE_EXCRETION_RXNID = 'R9'\n"})}),"\n",(0,i.jsx)(n.p,{children:"With these defaults defined, we can start building our model."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"nmbr_reactions = 9\n\n# Building Active Enzyme Sector\nkcat_fwd = [1, 0.5, 1, 1, 0.5 ,0.45, 1.5] \nkcat_rev = [kcat for kcat in kcat_fwd]\nrxn2kcat = {}\nfor i in range(nmbr_reactions-3): # all reactions have an enzyme, except excretion reactions\n    rxn_id = f'R{i+1}'\n    # 1e-6 to correct for the unit transformation in the model (meant to make the calculations preciser for different unit dimensions)\n    #dummy molmass\n    rxn2kcat = {**rxn2kcat, **{rxn_id: {f'E{i+1}':{'f': kcat_fwd[i]/(3600*1e-6), 'b': kcat_rev[i]/(3600*1e-6), \n                                                   'molmass': 1e6,\n                                                   'protein_reaction_relation': [[f'E{i+1}']]}\n                                        }}}\nactive_enzyme = ActiveEnzymeSector(rxn2protein = rxn2kcat, configuration=config)\n\n# Building Tranlational Protein Sector\ntranslation_enzyme = TransEnzymeSector(id_list = ['R7'], tps_mu=[0.01*1e-3], tps_0=[0.01*1e-3], mol_mass= [1], configuration=config)\n\n# Building Unused Enzyme Sector\nunused_enzyme = UnusedEnzymeSector(id_list = ['R1'], ups_mu=[-0.01*1e-3], ups_0=[0.1*1e-3], mol_mass= [1], configuration=config)\n\n# Building the toy_pam\nmodel = load_json_model('Models/toy_model.json')\ntoy_pam = PAModel(model, name='toy model MCA with enzyme constraints', \n                  active_sector=active_enzyme,\n                  translational_sector = translation_enzyme,\n                  unused_sector = unused_enzyme, \n                  p_tot=0.6*1e-3, configuration=config)\n"})}),"\n",(0,i.jsx)(n.h3,{id:"step-2-perform-the-model-simulations",children:"Step 2: Perform the model simulations"}),"\n",(0,i.jsx)(n.p,{children:"With the model in place, we can start our analysis. Since we are interested in which enzymes are important in different\nmetabolic phenotypes, we want to run simulations over a range of growth rates. After each simulation we need to retrieve\nand store the enzyme sensitivity coefficients, so we can study them. We also will save the capacity sensitivity coefficients,\nwhich will give us information about which factor is limiting metabolism (substrate or enzyme availability). We directly\nsave all the information we need later for plotting."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"substrate_axis = list()\nCcsc = list()\nCesc = list()\nx_axis_csc = list()\nmu_list = list()\n\nfor substrate in list(np.arange(1e-3, 1e-1, 1e-2)):\n    toy_pam.change_reaction_bounds(rxn_id='R1',\n                                   lower_bound=0, upper_bound=substrate)\n    toy_pam.optimize()\n    if toy_pam.solver.status == 'optimal' and toy_pam.objective.value>0:\n        print('Running simulations with ', substrate, 'mmol/g_cdw/h of substrate going into the system')\n        substrate_axis += [substrate]\n        mu_list += [toy_pam.objective.value]\n\n        Ccsc_new = list()\n        for csc in ['flux_ub', 'flux_lb', 'enzyme_max', 'enzyme_min', 'proteome', 'sector']:\n            Ccsc_new += toy_pam.capacity_sensitivity_coefficients[toy_pam.capacity_sensitivity_coefficients['constraint'] == csc].coefficient.to_list()\n        Ccsc += [Ccsc_new]\n\n        Cesc += [toy_pam.enzyme_sensitivity_coefficients.coefficient.to_list()]\n\n        print('Sum of capacity sensitivity coefficients: \\t \\t \\t \\t \\t \\t \\t ', round(sum(Ccsc_new),6))\n        print('Sum of variable sensitivity coefficients: \\t \\t \\t \\t \\t \\t \\t ', round(sum(Cesc[-1]), 6), '\\n')\n\nfor csc in ['flux_ub', 'flux_lb', 'enzyme_max', 'enzyme_min', 'proteome', 'sector']:\n    if csc == 'flux_ub' or csc == 'flux_lb':\n        x_axis_csc += [rid +'_' + csc for rid in toy_pam.capacity_sensitivity_coefficients[toy_pam.capacity_sensitivity_coefficients['constraint'] == csc].rxn_id.to_list()]\n    else:\n        x_axis_csc += [rid +'_' + csc for rid in toy_pam.capacity_sensitivity_coefficients[toy_pam.capacity_sensitivity_coefficients['constraint'] == csc].enzyme_id.to_list()]\n\nx_axis_esc = toy_pam.enzyme_sensitivity_coefficients.enzyme_id.to_list()\n"})}),"\n",(0,i.jsx)(n.h3,{id:"step-3-plot-the-enzyme-and-capacity-sensitivty-coefficients-heatmaps",children:"Step 3: Plot the enzyme and capacity sensitivty coefficients heatmaps"}),"\n",(0,i.jsx)(n.p,{children:"By plotting our results, we learn which individual reactions and enzymes contribute the most to which\nmetabolic phenotype."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"def print_heatmap(xaxis, matrix, yaxis = None):\n\n    if yaxis is None:\n        yaxis = list()\n        for i in range(1, n + 1):\n            yaxis += [f'R{i}']\n    fig = plotly.express.imshow(matrix, aspect=\"auto\",\n                                x = xaxis, y = yaxis,\n                                labels = dict(x = 'sensitivity coefficients', y='substrate uptake'))\n    fig.show()\n\nprint_heatmap(x_axis_csc, Ccsc, yaxis=substrate_axis)\nprint_heatmap(x_axis_esc, Cesc, yaxis=substrate_axis)\n"})}),"\n",(0,i.jsx)(n.h3,{id:"step-4-interpret-the-results",children:"Step 4: Interpret the results"}),"\n",(0,i.jsxs)(n.p,{children:["Compare the ",(0,i.jsx)(n.a,{href:"#toy_model_image",children:"toy model network structure"})," with the results from the heatmap. Did you expect these results? Do they make\nsense? Which mechanisms to explain these observations. If the observations are not inline with you're expectations,\nyou can use the enzyme sensitivities to point to the enzymatic parameters which might need to be adjusted (in this dummy\nexample this makes no sense off course, but in reality this is a very plausible outcome)."]}),"\n",(0,i.jsx)(n.h3,{id:"outlook-1",children:"Outlook"}),"\n",(0,i.jsxs)(n.p,{children:["This tastes like more? In our publication we use the sensitivity analysis to explain metabolic phenotypes and to pinpoint\ngenetic engineering examples. In the ",(0,i.jsx)(n.code,{children:"Figures"})," folder you can find the code we used to generate these results."]})]})}function m(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},7623:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/toy-model-6394c4c210750c2461c87176c82ac5a9.png"}}]);