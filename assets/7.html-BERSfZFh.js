import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as n,o as s,c as t,d as o,a as c,f as p}from"./app-CfHiactp.js";const r={},i=c("p",null,"首先看一个案例，当需要做一个绘制图形的类，存在以下继承结构：",-1),l=p(`<p><strong><code>Shape</code>是什么形状？</strong> 其中，<code>Rectangle</code>、<code>Square</code>……这几个子类是描述的某一具体的形状，但 <code>Shape</code>类不是具体的，而是抽象的。</p><h2 id="抽象类" tabindex="-1"><a class="header-anchor" href="#抽象类"><span><strong>抽象类</strong></span></a></h2><p>我们称像 <code>Shape</code>这样表达某一种概念的类叫做<strong>抽象类</strong></p><hr><h3 id="抽象方法" tabindex="-1"><a class="header-anchor" href="#抽象方法"><span><strong>抽象方法</strong></span></a></h3><p>抽象方法是表达概念而无法实现具体代码的函数</p><p>抽象方法是使用 <code>abstract</code>关键字修饰的成员方法，抽象方法在定义时不需要实现方法体，抽象方法的定义格式如下：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">abstract</span> 返回值类型 方法名称（参数）；
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>使用 <code>abstract</code>关键字修饰的抽象方法不能使用 <code>private</code>修饰，因为抽象方法必须被子类实现，如果使用 <code>private</code>声明，则子类无法实现该方法</p></div><hr><p>当一个类包含了抽象方法，则该类必须是抽象类，抽象类与抽象函数一样必须使用 <code>abstract</code>关键字进行修饰。抽象类的定义格式如下：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> 抽象类名称<span class="token punctuation">{</span>
      <span class="token keyword">public</span> <span class="token keyword">abstract</span> 返回值类型 方法名称（参数）；
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>若一个类没有声明为抽象类但包含抽象方法会无法编译</p></div><p>抽象类的定义规则如下：</p><ul><li>包含抽象方法的类必须是抽象类</li><li>抽象类和抽象方法都要使用 <code>abstract</code>关键字进行声明</li><li>抽象方法只需要声明而不需要实现</li><li><strong>如果一个抽象类继承了抽象类，那么该子类必须实现抽象类中的全部抽象方法</strong></li></ul><p><strong>抽象类无法实例化对象</strong>，但是可以定义变量，<strong>任意继承了抽象类的非抽象类的对象可以付给这个变量</strong></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span> args<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
     <span class="token class-name">Square</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Square</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token class-name">Shape</span> c <span class="token operator">=</span> s<span class="token punctuation">;</span>   <span class="token comment">//这是可行的</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container important"><p class="hint-container-title">重要</p><p>无法实例化的抽象类有什么用？ 因为抽象类本身被设计成只能用于被继承，因此，抽象类可以强迫子类实现其定义的抽象方法，否则编译会报错。因此，抽象方法实际上相当于定义了“规范”</p></div><h2 id="接口" tabindex="-1"><a class="header-anchor" href="#接口"><span><strong>接口</strong></span></a></h2><p>如果一个抽象类中所有的方法都是抽象类，则该类可定义为<strong>接口</strong>。接口是Java中最重要的概念之一</p><p><strong>类与类是单继承关系</strong>，即一个子类只能有一个直接父类；但<strong>类与接口是多实现关系</strong>，即一个类可以实现多个接口；而<strong>接口与接口是多继承关系</strong>，即一个接口可以同时继承多个接口</p>`,21);function d(u,h){const a=n("Mermaid");return s(),t("div",null,[i,o(a,{id:"mermaid-3",code:"eJxLzkksLnbJTEwvSszlUgCClMyi1OSSzPw8hRAnsABYhUJwRmJBqkI1WAQEtFOKEss1NMH8Wi4wBVFiU6OrqxAENCIxLz0nFV3CNScns6A4FaIBrgoiF1xYmlgE0QFVBhF3zixKBpqE5BiERrwOgiiGmUWEUogLiFEJcRNOlQAEuVnz"}),l])}const v=e(r,[["render",d],["__file","7.html.vue"]]),k=JSON.parse('{"path":"/zh/posts/Java%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/7.html","title":"抽象类和接口","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","title":"抽象类和接口","date":"2024-06-04T00:00:00.000Z","category":["面向对象"],"tag":["学习笔记"],"description":"首先看一个案例，当需要做一个绘制图形的类，存在以下继承结构： Shape是什么形状？ 其中，Rectangle、Square……这几个子类是描述的某一具体的形状，但 Shape类不是具体的，而是抽象的。 抽象类 我们称像 Shape这样表达某一种概念的类叫做抽象类 抽象方法 抽象方法是表达概念而无法实现具体代码的函数 抽象方法是使用 abstract关...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/zh/posts/Java%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/7.html"}],["meta",{"property":"og:site_name","content":"岁杪二四"}],["meta",{"property":"og:title","content":"抽象类和接口"}],["meta",{"property":"og:description","content":"首先看一个案例，当需要做一个绘制图形的类，存在以下继承结构： Shape是什么形状？ 其中，Rectangle、Square……这几个子类是描述的某一具体的形状，但 Shape类不是具体的，而是抽象的。 抽象类 我们称像 Shape这样表达某一种概念的类叫做抽象类 抽象方法 抽象方法是表达概念而无法实现具体代码的函数 抽象方法是使用 abstract关..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"岁杪二四"}],["meta",{"property":"article:tag","content":"学习笔记"}],["meta",{"property":"article:published_time","content":"2024-06-04T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"抽象类和接口\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-06-04T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"岁杪二四\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"抽象类","slug":"抽象类","link":"#抽象类","children":[{"level":3,"title":"抽象方法","slug":"抽象方法","link":"#抽象方法","children":[]}]},{"level":2,"title":"接口","slug":"接口","link":"#接口","children":[]}],"git":{},"readingTime":{"minutes":2.4,"words":721},"filePathRelative":"zh/posts/Java面向对象/7.md","localizedDate":"2024年6月4日","excerpt":"<p>首先看一个案例，当需要做一个绘制图形的类，存在以下继承结构：</p>\\n<p><strong><code>Shape</code>是什么形状？</strong>\\n其中，<code>Rectangle</code>、<code>Square</code>……这几个子类是描述的某一具体的形状，但 <code>Shape</code>类不是具体的，而是抽象的。</p>\\n<h2><strong>抽象类</strong></h2>\\n<p>我们称像 <code>Shape</code>这样表达某一种概念的类叫做<strong>抽象类</strong></p>\\n<hr>\\n<h3><strong>抽象方法</strong></h3>","autoDesc":true}');export{v as comp,k as data};
