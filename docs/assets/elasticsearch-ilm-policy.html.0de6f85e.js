import{_ as c,r as a,o as l,c as r,a as n,b as e,w as i,F as u,d as s,e as t}from"./app.aa1f03fb.js";const m={},d=n("h1",{id:"create-an-elasticsearch-index-lifecycle-management-ilm-policy",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#create-an-elasticsearch-index-lifecycle-management-ilm-policy","aria-hidden":"true"},"#"),s(" Create an Elasticsearch index lifecycle management (ILM) policy")],-1),k={class:"custom-container tip"},b=n("p",{class:"custom-container-title"},"Already configured Elastic for ODP?",-1),h=s("If you have already configured Elastic for earlier ODP Elastic samples that use an "),y=s("old index naming pattern"),_=s(":"),q=t("<ul><li><p>Keep the ILM policy for those old indices, to continue managing them while they still exist. Delete that policy only after all of the indices that refer to it have been deleted.</p></li><li><p>For new indices for the current sample dashboards, use a policy with a different name, as shown in the following sample.</p><p>The following sample policy is named <code>omegamon-ds-ilm-policy</code> (note the <code>ds-</code>), which is deliberately different from the <code>omegamon-ilm-policy</code> name used in earlier samples.</p><p>The different policy name reflects the fact that the current sample Elastic configuration uses data streams, and also enables old and new indices to be managed separately.</p></li></ul>",1),f=t(`<div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>If you <em>don&#39;t</em> use an ILM policy, and you keep forwarding data to Elastic, then you will eventually run out of disk space.</p></div><p>Here is a sample policy:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>PUT _ilm/policy/omegamon-ds-ilm-policy
<span class="token punctuation">{</span>
  <span class="token property">&quot;policy&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;phases&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;hot&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;min_age&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0ms&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;actions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;rollover&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;max_primary_shard_size&quot;</span><span class="token operator">:</span> <span class="token string">&quot;10gb&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;max_age&quot;</span><span class="token operator">:</span> <span class="token string">&quot;10d&quot;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;set_priority&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;priority&quot;</span><span class="token operator">:</span> <span class="token number">100</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;warm&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;min_age&quot;</span><span class="token operator">:</span> <span class="token string">&quot;10d&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;actions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;set_priority&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;priority&quot;</span><span class="token operator">:</span> <span class="token number">50</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;delete&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;min_age&quot;</span><span class="token operator">:</span> <span class="token string">&quot;20d&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;actions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;delete&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;delete_searchable_snapshot&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>You can paste this definition into the Kibana console. In Kibana, select Management \u25B6 Dev Tools \u25B6 Console.</p></div><p>This sample policy is designed for use with data streams. The policy contains a rollover action that triggers the creation of a new backing index for the data stream either when the primary shard size reaches 10 GB, or 10 days after the current backing index was created, whichever occurs first.</p><p>This sample policy deletes indices 20 days after rollover.</p><p>This policy is a sample only. Create a policy that matches <em>your</em> organization&#39;s requirements and available disk space.</p>`,7),g=s("For details on creating index lifecycle policies and associating them with indices, see the "),w={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/index-lifecycle-management.html",target:"_blank",rel:"noopener noreferrer"},v=s("Elastic Stack ILM documentation"),x=s(".");function I(E,T){const o=a("RouterLink"),p=a("ExternalLinkIcon");return l(),r(u,null,[d,n("div",k,[b,n("p",null,[h,e(o,{to:"/odp-elastic-samples/elasticsearch-indices-old.html"},{default:i(()=>[y]),_:1}),_]),q]),f,n("p",null,[g,n("a",w,[v,e(p)]),x])],64)}var N=c(m,[["render",I]]);export{N as default};
