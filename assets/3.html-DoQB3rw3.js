import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as n,f as e}from"./app-BcxhooZu.js";const p={},t=e(`<h2 id="包-package" tabindex="-1"><a class="header-anchor" href="#包-package"><span><strong>包(package)</strong></span></a></h2><p><strong>包</strong>：主要为了解决命名冲突的问题，包是一种<strong>名字空间</strong></p><p>当有以下文件结构：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>clock----------project根目录   
|___src--------资源目录
    |___clock
        |___Clock.java
    |___display
        |___Display.java
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时，<code>clock</code>和 <code>display</code>是两个不同的包，而对应的 <code>.java</code>文件处于不同的包中。</p><h3 id="包的引入" tabindex="-1"><a class="header-anchor" href="#包的引入"><span><strong>包的引入</strong></span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">clock</span><span class="token punctuation">;</span>   <span class="token comment">//打包</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">display<span class="token punctuation">.</span></span><span class="token class-name">Display</span></span><span class="token punctuation">;</span>   <span class="token comment">//引入完整类名</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Clock</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Display</span> hour <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Display</span><span class="token punctuation">(</span><span class="token number">24</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Display</span> minute <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Display</span><span class="token punctuation">(</span><span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>以上代码在 <code>Clock.java</code>中</p></div><p>同时也可这么引入：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">clock</span><span class="token punctuation">;</span>   

<span class="token comment">//import display.Display;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Clock</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name"><span class="token namespace">display<span class="token punctuation">.</span></span>Display</span> hour <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token namespace">display<span class="token punctuation">.</span></span>Display</span><span class="token punctuation">(</span><span class="token number">24</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//在新建对象时给出全名</span>
    <span class="token keyword">private</span> <span class="token class-name"><span class="token namespace">display<span class="token punctuation">.</span></span>Display</span> minute <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token namespace">display<span class="token punctuation">.</span></span>Display</span><span class="token punctuation">(</span><span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以使用 <code>*</code>（通配符），表示把这个包下面的所有 <code>class</code>都导入进来（但不包括子包的 <code>class</code>）</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">clock</span><span class="token punctuation">;</span>   

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">display<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Clock</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Display</span> hour <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Display</span><span class="token punctuation">(</span><span class="token number">24</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Display</span> minute <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Display</span><span class="token punctuation">(</span><span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>但一般不建议这么做，因为在导入多个包后，很难看出该类来自哪个包，也容易导致重名冲突问题。</strong></p>`,13),c=[t];function l(o,i){return s(),n("div",null,c)}const u=a(p,[["render",l],["__file","3.html.vue"]]),k=JSON.parse('{"path":"/zh/posts/Java%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/3.html","title":"包","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","title":"包","date":"2024-03-22T00:00:00.000Z","category":["面向对象"],"tag":["学习笔记"],"description":"包(package) 包：主要为了解决命名冲突的问题，包是一种名字空间 当有以下文件结构： 此时，clock和 display是两个不同的包，而对应的 .java文件处于不同的包中。 包的引入 相关信息 以上代码在 Clock.java中 同时也可这么引入： 可以使用 *（通配符），表示把这个包下面的所有 class都导入进来（但不包括子包的 clas...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/zh/posts/Java%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/3.html"}],["meta",{"property":"og:site_name","content":"岁杪二四"}],["meta",{"property":"og:title","content":"包"}],["meta",{"property":"og:description","content":"包(package) 包：主要为了解决命名冲突的问题，包是一种名字空间 当有以下文件结构： 此时，clock和 display是两个不同的包，而对应的 .java文件处于不同的包中。 包的引入 相关信息 以上代码在 Clock.java中 同时也可这么引入： 可以使用 *（通配符），表示把这个包下面的所有 class都导入进来（但不包括子包的 clas..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"岁杪二四"}],["meta",{"property":"article:tag","content":"学习笔记"}],["meta",{"property":"article:published_time","content":"2024-03-22T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"包\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-22T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"岁杪二四\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"包(package)","slug":"包-package","link":"#包-package","children":[{"level":3,"title":"包的引入","slug":"包的引入","link":"#包的引入","children":[]}]}],"git":{},"readingTime":{"minutes":0.89,"words":268},"filePathRelative":"zh/posts/Java面向对象/3.md","localizedDate":"2024年3月22日","excerpt":"<h2><strong>包(package)</strong></h2>\\n<p><strong>包</strong>：主要为了解决命名冲突的问题，包是一种<strong>名字空间</strong></p>\\n<p>当有以下文件结构：</p>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>clock----------project根目录   \\n|___src--------资源目录\\n    |___clock\\n        |___Clock.java\\n    |___display\\n        |___Display.java\\n</code></pre></div>","autoDesc":true}');export{u as comp,k as data};
