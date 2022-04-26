import{_ as t,r as s,o as n,c as r,a as i,b as d,w as h,F as l,e as o,d as e}from"./app.58f22ce0.js";const c={},u=o('<h1 id="requirements" tabindex="-1"><a class="header-anchor" href="#requirements" aria-hidden="true">#</a> Requirements</h1><p>To use these sample dashboards, you need:</p><ul><li><p><strong>IBM Z OMEGAMON Data Provider</strong> (ODP)</p><p>If you want to use the sample dashboards for CICS and Db2, you must have the PTF for APAR OA62420, which introduces support for the CICS and Db2 monitoring agents.</p><p>You must have configured ODP to forward data to Logstash.</p></li><li><p><strong>Elastic Stack</strong></p><p>The sample dashboards and related Elastic Stack artifacts were developed and tested in Elastic Stack <strong>7.14.0</strong>. For compatibility with other versions of Elastic Stack, see the Elastic Stack documentation.</p></li></ul><h2 id="omegamon-monitoring-agents" tabindex="-1"><a class="header-anchor" href="#omegamon-monitoring-agents" aria-hidden="true">#</a> OMEGAMON monitoring agents</h2><p>The sample dashboards are divided into bundles of related dashboards.</p><p>Each bundle has its own requirements for OMEGAMON monitoring agents and corresponding historical data collections. You can choose which bundles to install based on which OMEGAMON monitoring agents you have.</p>',6),p=e("For details, see the "),m=e("dashboard bundles"),b=e("."),g=o('<h2 id="screen-resolution" tabindex="-1"><a class="header-anchor" href="#screen-resolution" aria-hidden="true">#</a> Screen resolution</h2><p>The dashboards were developed on a screen with a resolution of 1920 \u2715 1080 pixels.</p><p>At lower resolutions, some dashboards might exhibit rendering issues.</p><h2 id="what-you-need-to-know" tabindex="-1"><a class="header-anchor" href="#what-you-need-to-know" aria-hidden="true">#</a> What you need to know</h2><p>To install the sample dashboards, you need to know how to configure the Elastic Stack.</p><p>To forward data to the sample dashboards, you need to know how to configure the following OMEGAMON software on z/OS:</p><ul><li>Runtime environments (RTEs)</li><li>Historical data collection</li><li>OMEGAMON Data Provider (ODP)</li></ul><p>To use the sample dashboards, you need to know how to use Kibana, and you need to understand the OMEGAMON attributes shown in the dashboards.</p>',8);function w(f,_){const a=s("RouterLink");return n(),r(l,null,[u,i("p",null,[p,d(a,{to:"/odp-elastic-samples/dashboard-bundles.html"},{default:h(()=>[m]),_:1}),b]),g],64)}var k=t(c,[["render",w]]);export{k as default};
