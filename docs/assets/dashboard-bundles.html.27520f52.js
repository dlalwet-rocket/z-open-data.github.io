import{_ as a,r as i,o as r,c as d,a as e,b as n,F as l,e as s,d as t}from"./app.e2ee3b15.js";const h={},c=s('<h1 id="installing-the-sample-dashboard-bundles" tabindex="-1"><a class="header-anchor" href="#installing-the-sample-dashboard-bundles" aria-hidden="true">#</a> Installing the sample dashboard bundles</h1><p>The sample dashboards are divided into bundles of related dashboards.</p><p>Different bundles use attributes from different OMEGAMON monitoring agents.</p><p>Choose which bundles to install according to which OMEGAMON monitoring agents you have.</p><table><thead><tr><th>Sample dashboards bundle</th><th>Uses attributes from these monitoring agents</th></tr></thead><tbody><tr><td>CICS</td><td>IBM Z OMEGAMON for CICS on z/OS</td></tr><tr><td>Db2</td><td>IBM Tivoli OMEGAMON XE for Db2 Performance Expert on z/OS</td></tr><tr><td>z/OS</td><td>IBM Z OMEGAMON Monitor for z/OS</td></tr></tbody></table><p>For a complete list of monitoring agents supported by ODP, including their minimum required versions, see the ODP documentation.</p><h2 id="getting-the-bundles" tabindex="-1"><a class="header-anchor" href="#getting-the-bundles" aria-hidden="true">#</a> Getting the bundles</h2>',7),u=t("Whichever bundles you choose to install, you need to get the GitHub repository "),p={href:"https://github.com/z-open-data/odp-elastic-samples",target:"_blank",rel:"noopener noreferrer"},b=e("code",null,"z-open-data/odp-elastic-samples",-1),_=t(" that contains the bundles."),f=e("p",null,"Either:",-1),m=e("li",null,"Clone the GitHub repository",-1),g=t("If you don't want to use Git, "),O={href:"https://github.com/z-open-data/odp-elastic-samples/archive/refs/heads/main.zip",target:"_blank",rel:"noopener noreferrer"},M=t("download a "),y=e("code",null,".zip",-1),I=t(" file"),z=t(" of the repository"),E=s('<h2 id="installing-each-bundle" tabindex="-1"><a class="header-anchor" href="#installing-each-bundle" aria-hidden="true">#</a> Installing each bundle</h2><p>Here is a summary of the steps for installing each bundle. For detailed step-by-step instructions, see the documentation for each bundle.</p><p>Prerequisite steps on z/OS:</p><ol><li>Update the ODP collection configuration to forward the attribute tables (groups) used by the bundle</li><li>Create historical data collections for those attribute groups</li></ol><p>In Kibana:</p><ol><li>Create a space for the bundle</li><li>Import saved objects for the bundle into the space</li><li>Customize the space settings</li><li>View the dashboards in the space</li></ol>',6);function x(C,v){const o=i("ExternalLinkIcon");return r(),d(l,null,[c,e("p",null,[u,e("a",p,[b,n(o)]),_]),f,e("ul",null,[m,e("li",null,[g,e("a",O,[M,y,I,n(o)]),z])]),E],64)}var N=a(h,[["render",x]]);export{N as default};
