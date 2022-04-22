import{_ as r,o as s,c as a,a as t,t as o,F as i,d,e as l}from"./app.aa1f03fb.js";const c={},n=t("h1",{id:"create-historical-data-collections",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#create-historical-data-collections","aria-hidden":"true"},"#"),d(" Create historical data collections")],-1),u=t("div",{class:"custom-container tip"},[t("p",{class:"custom-container-title"},"TIP"),t("p",null,[d("To ensure that ODP forwards attributes to Elastic as soon as you start collecting them, update the ODP collection configuration member "),t("code",null,"KAYOPEN"),d(),t("em",null,"before"),d(" creating the corresponding historical data collections.")])],-1),b=l("<table><thead><tr><th><code>table_name</code> field value</th><th>Attribute group</th><th>Collection interval (minutes)</th></tr></thead><tbody><tr><td>dp_srm_sub</td><td>Db2 SRM Subsystem Attributes</td><td>1</td></tr><tr><td>db2msg</td><td>Db2 Message Attributes</td><td>1</td></tr><tr><td>dp_srm_log</td><td>Db2 SRM Log Manager Attributes</td><td>1</td></tr><tr><td>dp_sy_exc</td><td>Db2 System States Attributes</td><td>1</td></tr><tr><td>edmpool</td><td>EDM Pool Attributes</td><td>1</td></tr><tr><td>gstqxst</td><td>DSG SQL Count Attributes</td><td>1</td></tr><tr><td>opersys</td><td>z/OS CPU Utilization Attributes</td><td>1</td></tr><tr><td>real225</td><td>Db2 Memory Attributes</td><td>1</td></tr><tr><td>real2252</td><td>Db2 Memory Attributes</td><td>1</td></tr><tr><td>real230</td><td>Db2 Group Buffer Pool (GBP) Attributes</td><td>1</td></tr><tr><td>real254</td><td>Db2 GBP CF Statistics Attributes</td><td>1</td></tr><tr><td>realqbst</td><td>Db2 Buffer Pool Statistics Attributes</td><td>1</td></tr><tr><td>realsqlc</td><td>SQL Counts Attributes</td><td>1</td></tr><tr><td>statedmp</td><td>EDM Statistics Attributes</td><td>1</td></tr><tr><td>statlogs</td><td>Log Statistics Attributes</td><td>1</td></tr><tr><td>statlokc</td><td>Lock Statistics</td><td>1</td></tr><tr><td>statqxst</td><td>Statistics SQL Count Attributes</td><td>1</td></tr></tbody></table>",1);function h(e,m){return s(),a(i,null,[n,u,t("p",null,"Create the following historical data collections for the "+o(e.$frontmatter.bundle)+" bundle:",1),b],64)}var p=r(c,[["render",h]]);export{p as default};
