import{_ as e,o,c as t,e as n}from"./app.aa1f03fb.js";const a={},c={start:"2"},r=n(`<li><p>Reload the configuration of collection tasks to reflect the updated <code>KAYOPEN</code> member.</p><p>For each job that runs an OMEGAMON monitoring agent (including the monitoring server job), enter the following MVS <code>MODIFY</code> system command:</p><div class="language-plain ext-plain"><pre class="language-plain"><code>F &lt;job_name&gt;,KPQ RELOAD_CONFIG,KAY
</code></pre></div><p>Replace <code>&lt;job_name&gt;</code> with the corresponding job name for each agent: for example, <code>OMEGDS</code>.</p></li>`,1),l=[r];function s(d,i){return o(),t("ol",c,l)}var _=e(a,[["render",s]]);export{_ as default};
