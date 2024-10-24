import{_ as n,o as a,e as p,G as l}from"./chunks/framework.CXoXy2UI.js";const u=JSON.parse('{"title":"优化hook-按需（依赖字段）render","description":"","frontmatter":{"title":"优化hook-按需（依赖字段）render","class":"react","date":"2023-06-01"},"headers":[],"relativePath":"posts/2023-react-优化hook按需render.md","filePath":"posts/2023-react-优化hook按需render.md"}'),e={name:"posts/2023-react-优化hook按需render.md"};function t(o,s,r,c,i,y){return a(),p("div",null,s[0]||(s[0]=[l(`<blockquote><p>收集使用的字段，当依赖的字段更新时，才通过forceUpdate强制render <br><br> Object.defineProperties代理字段，用于收集依赖 <br><br> 两个ref，一个维护依赖，一个维护最新数据</p></blockquote><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#D73A49;"> const</span><span style="color:#005CC5;"> useOnDemandDataHook</span><span style="color:#D73A49;"> =</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=</span><span style="color:#D73A49;"> &gt;</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">	const setter </span><span style="color:#D73A49;">=</span><span style="color:#6F42C1;"> useState</span><span style="color:#24292E;">({})[</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">	const forceUpdate </span><span style="color:#D73A49;">=</span><span style="color:#6F42C1;"> useCallback</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=</span><span style="color:#D73A49;"> &gt;</span><span style="color:#6F42C1;">setter</span><span style="color:#24292E;">({}), [setter]);</span></span>
<span class="line"><span style="color:#24292E;">	const dependenciesRef </span><span style="color:#D73A49;">=</span><span style="color:#6F42C1;"> useRef</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">		info: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		count: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">	});</span></span>
<span class="line"><span style="color:#24292E;">	const dataRef </span><span style="color:#D73A49;">=</span><span style="color:#6F42C1;"> useRef</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">		info: </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		count: </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#24292E;">	});</span></span>
<span class="line"><span style="color:#24292E;">	const dispatch </span><span style="color:#D73A49;">=</span><span style="color:#6F42C1;"> useCallback</span><span style="color:#24292E;">((payload) </span><span style="color:#D73A49;">=</span><span style="color:#D73A49;"> &gt;</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">		dataRef.current </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span><span style="color:#D73A49;">...</span><span style="color:#24292E;">dataRef.current,</span></span>
<span class="line"><span style="color:#D73A49;">			...</span><span style="color:#24292E;">payload</span></span>
<span class="line"><span style="color:#24292E;">		};</span></span>
<span class="line"><span style="color:#24292E;">		const needUpdate </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Object.</span><span style="color:#6F42C1;">keys</span><span style="color:#24292E;">(payload).</span><span style="color:#6F42C1;">some</span><span style="color:#24292E;">((key) </span><span style="color:#D73A49;">=</span><span style="color:#D73A49;"> &gt;</span><span style="color:#24292E;">dependenciesRef.current[key]);</span></span>
<span class="line"><span style="color:#6F42C1;">		if</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">needUpdate</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6F42C1;">			forceUpdate</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">		}</span></span>
<span class="line"><span style="color:#24292E;">	},</span></span>
<span class="line"><span style="color:#24292E;">	[forceUpdate]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">	useEffect</span><span style="color:#24292E;">(() = &gt;{</span></span>
<span class="line"><span style="color:#D73A49;">		const</span><span style="color:#005CC5;"> timer</span><span style="color:#D73A49;"> =</span><span style="color:#6F42C1;"> setInterval</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=</span><span style="color:#D73A49;"> &gt;</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#6F42C1;">			dispatch</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#E36209;">				count</span><span style="color:#24292E;">: </span><span style="color:#E36209;">dataRef</span><span style="color:#24292E;">.</span><span style="color:#E36209;">current</span><span style="color:#24292E;">.</span><span style="color:#E36209;">count</span><span style="color:#24292E;"> + </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">			});</span></span>
<span class="line"><span style="color:#24292E;">		},</span></span>
<span class="line"><span style="color:#005CC5;">		1000</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">		return</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=</span><span style="color:#D73A49;"> &gt;</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#6F42C1;">			clearInterval</span><span style="color:#24292E;">(</span><span style="color:#E36209;">timer</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">		};</span></span>
<span class="line"><span style="color:#24292E;">	},</span></span>
<span class="line"><span style="color:#24292E;">	[dispatch]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	return useMemo(() = &gt;{</span></span>
<span class="line"><span style="color:#24292E;">		return Object.defineProperties({},</span></span>
<span class="line"><span style="color:#24292E;">		{</span></span>
<span class="line"><span style="color:#24292E;">			info: {</span></span>
<span class="line"><span style="color:#6F42C1;">				get</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">					dependenciesRef.current.info </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">					return</span><span style="color:#24292E;"> dataRef.current.info;</span></span>
<span class="line"><span style="color:#24292E;">				},</span></span>
<span class="line"><span style="color:#24292E;">				enumerable: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">			},</span></span>
<span class="line"><span style="color:#24292E;">			count: {</span></span>
<span class="line"><span style="color:#6F42C1;">				get</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">					dependenciesRef.current.count </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">					return</span><span style="color:#24292E;"> dataRef.current.count;</span></span>
<span class="line"><span style="color:#24292E;">				},</span></span>
<span class="line"><span style="color:#24292E;">				enumerable: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">			}</span></span>
<span class="line"><span style="color:#24292E;">		});</span></span>
<span class="line"><span style="color:#24292E;">	},</span></span>
<span class="line"><span style="color:#24292E;">	[]);</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br></div></div>`,2)]))}const E=n(e,[["render",t]]);export{u as __pageData,E as default};
