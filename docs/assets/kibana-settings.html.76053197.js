import{_ as i,r as t,o as c,c as r,a as e,b as s,w as l,F as d,d as a,e as p}from"./app.aa1f03fb.js";const h={},m=e("h1",{id:"customizing-global-kibana-settings",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#customizing-global-kibana-settings","aria-hidden":"true"},"#"),a(" Customizing global Kibana settings")],-1),u=e("p",null,"The following customization is a recommendation only, to improve your user experience of the sample dashboards.",-1),b=a("For Kibana settings that are specific to each Kibana space, see the documentation for "),_=a("each bundle of sample dashboards"),f=a("."),g=e("h2",{id:"avoid-incomplete-lists-of-terms-in-controls-dropdowns",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#avoid-incomplete-lists-of-terms-in-controls-dropdowns","aria-hidden":"true"},"#"),a(" Avoid incomplete lists of terms in Controls dropdowns")],-1),k=e("p",null,[a("With default Kibana settings, depending on the number of documents you have indexed, the list of terms available in a Kibana Controls dropdown might be incomplete. A dashboard might have charts containing term values "),e("em",null,"that are not available in a Controls dropdown for that field!")],-1),v=a("There are "),x={href:"https://discuss.elastic.co/search?q=terms%20list%20incomplete%20%23elastic-stack%3Akibana",target:"_blank",rel:"noopener noreferrer"},y=a("many topics in the Elastic Kibana discussion forum"),w=a(" about this issue."),A=p(`<p>The recommended &quot;fix&quot; (sic, deliberately in quotes): in <code>$KIBANA_HOME/config/kibana.yml</code>, set high values for <code>autocompleteTimeout</code> and <code>autocompleteTerminateAfter</code>. For example:</p><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token key atrule">kibana.autocompleteTimeout</span><span class="token punctuation">:</span> <span class="token number">5000</span>
<span class="token key atrule">kibana.autocompleteTerminateAfter</span><span class="token punctuation">:</span> <span class="token number">10000000</span>
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Before editing <code>kibana.yml</code>, stop Kibana. After editing, restart Kibana.</p><p>For example, in the command shell of a Linux distribution that supports the <code>service</code> init system command wrapper, enter:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">service</span> kibana stop
</code></pre></div><p>After editing, enter:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">service</span> kibana start
</code></pre></div></div>`,3);function K(T,C){const n=t("RouterLink"),o=t("ExternalLinkIcon");return c(),r(d,null,[m,u,e("p",null,[b,s(n,{to:"/odp-elastic-samples/dashboard-bundles.html"},{default:l(()=>[_]),_:1}),f]),g,k,e("p",null,[v,e("a",x,[y,s(o)]),w]),A],64)}var E=i(h,[["render",K]]);export{E as default};
