"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4685],{9723:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var t=i(5893),s=i(1151);const r={sidebar_label:"Enzyme",title:"Enzyme"},a=void 0,l={id:"api_reference/Enzyme",title:"Enzyme",description:"Classes related to enzymes:",source:"@site/docs/api_reference/Enzyme.md",sourceDirName:"api_reference",slug:"/api_reference/Enzyme",permalink:"/PAModelpy/api_reference/Enzyme",draft:!1,unlisted:!1,editUrl:"https://github.com/SamiralVdB/PAModelpy/tree/main/docs/docs/api_reference/Enzyme.md",tags:[],version:"current",frontMatter:{sidebar_label:"Enzyme",title:"Enzyme"},sidebar:"tutorialSidebar",previous:{title:"Constraints",permalink:"/PAModelpy/api_reference/Constraints"},next:{title:"EnzymeSectors",permalink:"/PAModelpy/api_reference/EnzymeSectors"}},c={},o=[{value:"Enzyme Objects",id:"enzyme-objects",level:2},{value:"DEFAULT_ENZYME_MOL_MASS",id:"default_enzyme_mol_mass",level:4},{value:"kcat_values",id:"kcat_values",level:4},{value:"concentration",id:"concentration",level:4},{value:"add_catalytic_event",id:"add_catalytic_event",level:4},{value:"add_genes",id:"add_genes",level:4},{value:"create_catalytic_event",id:"create_catalytic_event",level:4},{value:"create_enzyme_variable",id:"create_enzyme_variable",level:4},{value:"change_kcat_values",id:"change_kcat_values",level:4},{value:"get_kcat_values",id:"get_kcat_values",level:4},{value:"remove_catalytic_event",id:"remove_catalytic_event",level:4},{value:"__copy__",id:"__copy__",level:4},{value:"__deepcopy__",id:"__deepcopy__",level:4},{value:"EnzymeComplex Objects",id:"enzymecomplex-objects",level:2},{value:"DEFAULT_ENZYME_MOL_MASS",id:"default_enzyme_mol_mass-1",level:4},{value:"EnzymeVariable Objects",id:"enzymevariable-objects",level:2},{value:"DEFAULT_ENZYME_MOL_MASS",id:"default_enzyme_mol_mass-2",level:4},{value:"kcat_values",id:"kcat_values-1",level:4},{value:"flux",id:"flux",level:4},{value:"concentration",id:"concentration-1",level:4},{value:"concentration",id:"concentration-2",level:4},{value:"Notes",id:"notes",level:2},{value:"Raises",id:"raises",level:2},{value:"set_forward_concentration",id:"set_forward_concentration",level:4},{value:"Notes",id:"notes-1",level:2},{value:"Raises",id:"raises-1",level:2},{value:"set_reverse_concentration",id:"set_reverse_concentration",level:4},{value:"Notes",id:"notes-2",level:2},{value:"Raises",id:"raises-2",level:2},{value:"add_catalytic_events",id:"add_catalytic_events",level:4},{value:"add_reactions",id:"add_reactions",level:4},{value:"remove_catalytic_event",id:"remove_catalytic_event-1",level:4},{value:"remove_reactions",id:"remove_reactions",level:4},{value:"change_kcat_values",id:"change_kcat_values-1",level:4},{value:"__copy__",id:"__copy__-1",level:4},{value:"__deepcopy__",id:"__deepcopy__-1",level:4}];function d(e){const n={code:"code",em:"em",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Classes related to enzymes:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Enzyme: Constraints relating enzymes to reactions. Including upper and lower bound enzyme constraints"}),"\n",(0,t.jsx)(n.li,{children:"EnzymeVariable: Variable related to an enzyme. The value of this variable represent the concentration."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"enzyme-objects",children:"Enzyme Objects"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"class Enzyme(Object)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Upper level Enzyme object containing information about the enzyme and links to the EnzymeVariables for each reaction the enzyme catalyzes."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"id (str): Identifier for the enzyme (e.g., Uniprot ID)."}),"\n",(0,t.jsxs)(n.li,{children:["rxn2kcat (Dict): Dictionary with reaction ID, kcat value pairs for the forward (f) and backward (b) reaction,\ne.g. ",(0,t.jsx)(n.code,{children:"{'PGI': {'f': 30, 'b': 0.1}}"})]}),"\n",(0,t.jsx)(n.li,{children:"upper_bound (float): Upper bound for the enzyme variable (default 1000.0)."}),"\n",(0,t.jsx)(n.li,{children:"lower_bound (float): Lower bound for the enzyme variable (default 0)."}),"\n",(0,t.jsx)(n.li,{children:"name (str): Name of the enzyme (default None)."}),"\n",(0,t.jsx)(n.li,{children:"molmass (float): Molar mass of the enzyme (default 3.947778784340140e04)."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Notes"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"This class is used to generate enzyme instances from kcat values and contains information about the forward as well as the backward catalysis."}),"\n",(0,t.jsx)(n.li,{children:"The enzyme is linked to individual cobra.Reaction variables with CatalyticEvent objects."}),"\n",(0,t.jsx)(n.li,{children:"There are two scenarios:"}),"\n",(0,t.jsx)(n.li,{children:"Promiscuous enzymes: a single enzyme can catalyze multiple reactions."}),"\n",(0,t.jsx)(n.li,{children:"Other: a single enzyme catalyzes a single reaction."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"default_enzyme_mol_mass",children:"DEFAULT_ENZYME_MOL_MASS"}),"\n",(0,t.jsx)(n.p,{children:"mean enzymes mass E.coli [g/mol]"}),"\n",(0,t.jsx)(n.h4,{id:"kcat_values",children:"kcat_values"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"@property\ndef kcat_values()\n"})}),"\n",(0,t.jsx)(n.p,{children:"Returns a dictionary with kcat values for each associated reaction."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"dict"})," - A dictionary containing kcat values for associated reactions."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"concentration",children:"concentration"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'@property\ndef concentration(units: str = "mmol/gDW",\n                  return_units: bool = False) -> float\n'})}),"\n",(0,t.jsx)(n.p,{children:"Returns the enzyme's total concentration considering any associated reactions."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"units"})," ",(0,t.jsx)(n.em,{children:"str, optional"})," - Units in which the concentration is calculated (default is 'mmol/gDW'), other option is 'g/gDW'."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"return_units"})," ",(0,t.jsx)(n.em,{children:"bool, optional"})," - Determines whether the units should be returned as well."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"float"})," - Enzyme concentration as a float."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"add_catalytic_event",children:"add_catalytic_event"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def add_catalytic_event(ce: CatalyticEvent, kcats: Dict)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Adds a catalytic event associated with a reaction to an enzyme."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ce"})," ",(0,t.jsx)(n.em,{children:"PAModelpy.Variables.CatalyticEvent"})," - A CatalyticEvent object to which the enzyme should be added."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"kcats"})," ",(0,t.jsx)(n.em,{children:"dict"})," - A dictionary containing direction and kcat key-value pairs."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"NoneType"})," - None"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"add_genes",children:"add_genes"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def add_genes(gene_list: list,\n              gene_length: list,\n              relation: str = 'OR') -> None\n"})}),"\n",(0,t.jsx)(n.p,{children:"Add genes to the enzyme and the model related to the enzyme if applicable"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"gene_list"})," ",(0,t.jsx)(n.em,{children:"list"})," - A list of gene identifiers to be added."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"gene_length"})," ",(0,t.jsx)(n.em,{children:"list"})," - A list of lengths corresponding to each gene."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"relation"})," ",(0,t.jsx)(n.em,{children:"str, optional"})," - The relationship between genes in gene_list.\nDefaults to 'OR'. Possible values: 'OR' or 'AND'."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Raises"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ValueError"})," - If an invalid relation is provided."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Notes"}),":"]}),"\n",(0,t.jsx)(n.p,{children:"If relation is 'OR', each gene in gene_list will be treated as coding for an individual isozyme\nIf relation is 'AND', all genes in gene_list will be treated as coding for peptides in an enzyme complex"}),"\n",(0,t.jsx)(n.h4,{id:"create_catalytic_event",children:"create_catalytic_event"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def create_catalytic_event(rxn_id: str, kcats: Dict)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Creates enzyme variables that link to reactions."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"rxn_id"})," ",(0,t.jsx)(n.em,{children:"str"})," - ID of the associated reaction in the model."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"kcats"})," ",(0,t.jsx)(n.em,{children:"Dict"})," - A dictionary containing kcat values for the forward and backward reaction."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Variables.CatalyticEvent"})," - Enzyme variable object of type Variables.CatalyticEvent."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"create_enzyme_variable",children:"create_enzyme_variable"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def create_enzyme_variable()\n"})}),"\n",(0,t.jsx)(n.p,{children:"Creates enzyme variables that link  enzyme to reactions."}),"\n",(0,t.jsx)(n.h4,{id:"change_kcat_values",children:"change_kcat_values"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def change_kcat_values(rxn2kcat: Dict)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Changes the kcat values for the enzyme and updates the enzyme variable (enzymatic reaction) accordingly."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"rxn2kcat"})," ",(0,t.jsx)(n.em,{children:"Dict"})," - A dictionary with reaction ID, kcat value pairs for the forward (f) and backward (b) reaction,\ne.g. ",(0,t.jsx)(n.code,{children:"{'PGI': {'f': 30, 'b': 0.1}}"})]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"get_kcat_values",children:"get_kcat_values"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def get_kcat_values(rxn_ids: Union[str, list] = None) -> Dict\n"})}),"\n",(0,t.jsx)(n.p,{children:"Returns the kcat values for a specific enzyme and all enzyme-associated reactions."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"rxn_ids"})," ",(0,t.jsx)(n.em,{children:"Union[str, list], optional"})," - ID of the reactions for which the kcat values should be returned. It can be a single reaction ID (str) or a list of reaction IDs."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Dict"})," - A dictionary containing kcat values for the forward (f) and backward (b) reactions."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"remove_catalytic_event",children:"remove_catalytic_event"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def remove_catalytic_event(catalytic_event: Union[CatalyticEvent, str])\n"})}),"\n",(0,t.jsx)(n.p,{children:"Function to remove a catalytic event from an enzyme."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"catalytic_event"})," ",(0,t.jsx)(n.em,{children:"Union[CatalyticEvent, str]"})," - CatalyticEvent or str, catalytic event or identifier to remove."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"__copy__",children:"__copy__"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'def __copy__() -> "Enzyme"\n'})}),"\n",(0,t.jsx)(n.p,{children:"Copy the enzyme variable."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"PAModelpy.Enzyme.Enzyme"})," - A new enzyme that is a copy of the original enzyme."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"__deepcopy__",children:"__deepcopy__"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'def __deepcopy__(memo: dict) -> "Enzyme"\n'})}),"\n",(0,t.jsx)(n.p,{children:"Copy the enzyme variable with memo."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"memo"})," ",(0,t.jsx)(n.em,{children:"dict"})," - Automatically passed parameter."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"PAModelpy.Enzyme.Enzyme"})," - A new enzyme that is a copy of the original enzyme with memo."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"enzymecomplex-objects",children:"EnzymeComplex Objects"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"class EnzymeComplex(Enzyme)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Upper-level EnzymeComplex object containing information about the enzymes in a complex\nand a link to the enzyme variables (CatalyticEvents) for each reaction the enzyme complex catalyzes."}),"\n",(0,t.jsx)(n.p,{children:"This class is used to generate enzyme instances from kcat values and contains\ninformation about the forward as well as the backward catalysis."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"id"})," ",(0,t.jsx)(n.em,{children:"str"})," - Identifier for the enzyme complex (e.g., Uniprot ID)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"enzymes"})," ",(0,t.jsx)(n.em,{children:"DictList of cobra.core.Enzyme"})," - Enzyme objects associated with the enzyme complex."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"rxn2kcat"})," ",(0,t.jsx)(n.em,{children:"Dict"})," - Dictionary with reaction ID, kcat value pairs for the forward (f) and backward (b) reaction,\ne.g. ",(0,t.jsx)(n.code,{children:"{'PGI': {'f': 30, 'b': 0.1}}"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"upper_bound"})," ",(0,t.jsx)(n.em,{children:"float, optional"})," - Upper bound for the enzyme variable (default 1000.0)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"name"})," ",(0,t.jsx)(n.em,{children:"str, optional"})," - Name of the enzyme (default None)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"molmass"})," ",(0,t.jsx)(n.em,{children:"float, optional"})," - Molar mass of the enzyme (default 3.947778784340140e04)."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"default_enzyme_mol_mass-1",children:"DEFAULT_ENZYME_MOL_MASS"}),"\n",(0,t.jsx)(n.p,{children:"mean enzymes mass E.coli [g/mol]"}),"\n",(0,t.jsx)(n.h2,{id:"enzymevariable-objects",children:"EnzymeVariable Objects"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"class EnzymeVariable(Reaction)\n"})}),"\n",(0,t.jsx)(n.p,{children:"EnzymeVariable is a class for holding information regarding the variable representing an enzyme in the model.\nFor each reaction, the enzyme variables are summarized in a CatalyticEvent."}),"\n",(0,t.jsx)(n.p,{children:"There are three different scenarios:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Enzyme complex: multiple enzymes together are associated with an EnzymeComplex object."}),"\n",(0,t.jsx)(n.li,{children:"Isozymes: multiple enzymes independently associated with a single catalytic event."}),"\n",(0,t.jsx)(n.li,{children:"Other: a single enzyme is associated with a single catalytic event."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"kcats2rxns"})," ",(0,t.jsx)(n.em,{children:"Dict"})," - A dictionary with reaction_id, kcat key, value pairs to connect the enzyme with the associated reaction.\nThe kcat is another dictionary with ",(0,t.jsx)(n.code,{children:"f"})," and ",(0,t.jsx)(n.code,{children:"b"})," for the forward and backward reactions, respectively."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"id"})," ",(0,t.jsx)(n.em,{children:"str, optional"})," - The identifier to associate with this enzyme (default None)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"name"})," ",(0,t.jsx)(n.em,{children:"str, optional"}),' - A human-readable name for the enzyme (default "").']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"subsystem"})," ",(0,t.jsx)(n.em,{children:"str, optional"}),' - Subsystem where the enzyme is meant to function (default "").']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"lower_bound"})," ",(0,t.jsx)(n.em,{children:"float"})," - The lower flux bound (default 0.0)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"upper_bound"})," ",(0,t.jsx)(n.em,{children:"float, optional"})," - The upper flux bound (default None)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"**kwargs"})," - Additional keyword arguments are passed on to the parent class."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"default_enzyme_mol_mass-2",children:"DEFAULT_ENZYME_MOL_MASS"}),"\n",(0,t.jsx)(n.p,{children:"mean enzymes mass E.coli [g/mol]"}),"\n",(0,t.jsx)(n.h4,{id:"kcat_values-1",children:"kcat_values"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"@property\ndef kcat_values()\n"})}),"\n",(0,t.jsx)(n.p,{children:"Returns a dictionary with kcat values and reactions."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"dict"})," - A dictionary containing kcat values and their associated reactions."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"flux",children:"flux"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"@property\ndef flux() -> float\n"})}),"\n",(0,t.jsx)(n.p,{children:"Get the flux value in the most recent solution."}),"\n",(0,t.jsx)(n.p,{children:"Flux is the primal value of the corresponding variable in the model."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"float"})," - Flux, which is the primal value of the corresponding variable in the model."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Raises"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"RuntimeError"})," - If the underlying model was never optimized beforehand or the reaction is not part of a model."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"OptimizationError"})," - If the solver status is anything other than 'optimal'."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"AssertionError"})," - If the flux value is not within the bounds."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Warnings"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Accessing reaction fluxes through a ",(0,t.jsx)(n.code,{children:"Solution"})," object is the safer, preferred, and only guaranteed to be correct way."]}),"\n",(0,t.jsxs)(n.li,{children:["Reaction flux is retrieved from the currently defined ",(0,t.jsx)(n.code,{children:"self._model.solver"}),". The solver status is checked but there are no guarantees that the current solver state is the one you are looking for."]}),"\n",(0,t.jsx)(n.li,{children:"If you modify the underlying model after an optimization, you will retrieve the old optimization values."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Examples"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'>>> from cobra.io import load_model\n>>> model = load_model("textbook")\n>>> solution = model.optimize()\n>>> model.variables.PFK.flux\n7.477381962160283\n>>> solution.fluxes.PFK\n7.4773819621602833\n'})}),"\n",(0,t.jsx)(n.h4,{id:"concentration-1",children:"concentration"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"@property\ndef concentration() -> float\n"})}),"\n",(0,t.jsx)(n.p,{children:"Get the enzyme concentration value of the most recent solution."}),"\n",(0,t.jsx)(n.p,{children:"The enzyme concentration equals the flux value."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"float"})," - Enzyme concentration in mmol/gDW."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"concentration-2",children:"concentration"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"@concentration.setter\ndef concentration(conc: Union[float, int]) -> None\n"})}),"\n",(0,t.jsx)(n.p,{children:"Sets the concentration of the enzyme by creating or updating a constraint\nthat enforces the concentration to be equal to the sum of the forward and reverse\nvariable primals."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsx)(n.p,{children:"conc : float, int\nThe concentration value to be set for the enzyme. This value will be used\nas both the lower and upper bound for the constraint, effectively fixing the\nconcentration to this value."}),"\n",(0,t.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"If a concentration constraint for the enzyme does not already exist in the model,\nthis function creates a new constraint named '<enzyme_id>_conc'."}),"\n",(0,t.jsx)(n.li,{children:"The concentration constraint is defined as:\nconcentration = forward_variable.primal + reverse_variable.primal"}),"\n",(0,t.jsx)(n.li,{children:"If the constraint already exists, the linear coefficients for the forward and reverse\nvariables are updated to ensure the constraint remains valid."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"raises",children:"Raises"}),"\n",(0,t.jsxs)(n.p,{children:["ValueError\nIf ",(0,t.jsx)(n.code,{children:"conc"})," is not a valid numerical value."]}),"\n",(0,t.jsx)(n.h4,{id:"set_forward_concentration",children:"set_forward_concentration"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def set_forward_concentration(conc: Union[float, int]) -> None\n"})}),"\n",(0,t.jsx)(n.p,{children:"Sets the concentration of the enzyme by creating or updating a constraint\nthat enforces the concentration to be equal to the sum of only the forward\nvariable primals. This forces a reaction to be active in the forward direction.\nIt used the concentration setter functionality and subsequently sets the\ncoefficient for the reverse variable in the constraint to 0."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsx)(n.p,{children:"conc : float, int\nThe concentration value to be set for the enzyme. This value will be used\nas both the lower and upper bound for the constraint, effectively fixing the\nconcentration to this value."}),"\n",(0,t.jsx)(n.h2,{id:"notes-1",children:"Notes"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"If a concentration constraint for the enzyme does not already exist in the model,\nthis function creates a new constraint named '<enzyme_id>_conc'."}),"\n",(0,t.jsx)(n.li,{children:"The concentration constraint is defined as:\nconcentration = forward_variable.primal"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"raises-1",children:"Raises"}),"\n",(0,t.jsxs)(n.p,{children:["ValueError\nIf ",(0,t.jsx)(n.code,{children:"conc"})," is not a valid numerical value."]}),"\n",(0,t.jsx)(n.h4,{id:"set_reverse_concentration",children:"set_reverse_concentration"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def set_reverse_concentration(conc: Union[float, int]) -> None\n"})}),"\n",(0,t.jsx)(n.p,{children:"Sets the concentration of the enzyme by creating or updating a constraint\nthat enforces the concentration to be equal to the sum of only the reverse\nvariable primals. This forces a reaction to be active in the reverse direction.\nIt used the concentration setter functionality and subsequently sets the\ncoefficient for the forward variable in the constraint to 0."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsx)(n.p,{children:"conc : float, int\nThe concentration value to be set for the enzyme. This value will be used\nas both the lower and upper bound for the constraint, effectively fixing the\nconcentration to this value."}),"\n",(0,t.jsx)(n.h2,{id:"notes-2",children:"Notes"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"If a concentration constraint for the enzyme does not already exist in the model,\nthis function creates a new constraint named '<enzyme_id>_conc'."}),"\n",(0,t.jsx)(n.li,{children:"The concentration constraint is defined as:\nconcentration = reverse_variable.primal"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"raises-2",children:"Raises"}),"\n",(0,t.jsxs)(n.p,{children:["ValueError\nIf ",(0,t.jsx)(n.code,{children:"conc"})," is not a valid numerical value."]}),"\n",(0,t.jsx)(n.h4,{id:"add_catalytic_events",children:"add_catalytic_events"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def add_catalytic_events(catalytic_events: list, kcats: list)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Adding a catalytic event to an enzyme variable"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"catalytic_events"})," ",(0,t.jsx)(n.em,{children:"list"})," - A list of catalytic events to add."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"kcats"})," ",(0,t.jsx)(n.em,{children:"list"})," - A list with dictionaries containing direction and kcat key-value pairs."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"add_reactions",children:"add_reactions"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def add_reactions(reaction_kcat_dict: dict)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Add reactions to the enzyme variable and create bindings to the related model.\nIf there are multiple reactions related to a single enzyme, this is an isozyme."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"reaction_kcat_dict"})," ",(0,t.jsx)(n.em,{children:"dict"})," - A nested dictionary with the reaction_id, kcat key, value pairs to connect the\nenzyme with the associated reaction. The kcat is another dictionary with ",(0,t.jsx)(n.code,{children:"f"})," and ",(0,t.jsx)(n.code,{children:"b"})," for the forward and\nbackward reactions, respectively."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"remove_catalytic_event-1",children:"remove_catalytic_event"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def remove_catalytic_event(catalytic_event: Union[CatalyticEvent, str])\n"})}),"\n",(0,t.jsx)(n.p,{children:"Remove a catalytic event from an enzyme."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"catalytic_event"})," ",(0,t.jsx)(n.em,{children:"Union[CatalyticEvent, str]"})," - CatalyticEvent or str, catalytic event or identifier to remove."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"remove_reactions",children:"remove_reactions"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def remove_reactions(reaction_list: list)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Remove reactions from the enzyme variable and remove the reactions from the\nconstraint expressions related to the enzyme."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"reaction_list"})," ",(0,t.jsx)(n.em,{children:"list"})," - A list with Cobra.Reaction objects which should be removed. If a list of identifiers (str)\nis provided, the corresponding enzyme will be obtained from the EnzymeVariables.reaction attribute."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"change_kcat_values-1",children:"change_kcat_values"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def change_kcat_values(reaction_kcat_dict: dict)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Changes kcat values for the enzyme variable."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"reaction_kcat_dict"})," ",(0,t.jsx)(n.em,{children:"dict"})," - A nested dictionary with Cobra.Reaction, kcat key, value pairs to connect the\nenzyme with the associated reaction. The kcat is another dictionary with ",(0,t.jsx)(n.code,{children:"f"})," and ",(0,t.jsx)(n.code,{children:"b"})," for the forward and\nbackward reactions, respectively."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"__copy__-1",children:"__copy__"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'def __copy__() -> "PAModelpy.Enzyme.EnzymeVariable"\n'})}),"\n",(0,t.jsx)(n.p,{children:"Copy the enzyme variable."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"PAModelpy.Enzyme.EnzymeVariable"})," - A new enzyme variable that is a copy of the original enzyme variable."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"__deepcopy__-1",children:"__deepcopy__"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'def __deepcopy__(memo: dict) -> "PAModelpy.Enzyme.EnzymeVariable"\n'})}),"\n",(0,t.jsx)(n.p,{children:"Copy the enzyme variable with memo."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"memo"})," ",(0,t.jsx)(n.em,{children:"dict"})," - Automatically passed parameter."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"PAModelpy.Enzyme.EnzymeVariable"})," - A new enzyme variable that is a copy of the original enzyme variable with memo."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}}}]);