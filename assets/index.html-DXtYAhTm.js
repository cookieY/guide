import{_ as s,c as e,a,o as t}from"./app-B_p-YCDi.js";const n={};function h(l,i){return t(),e("div",null,i[0]||(i[0]=[a(`<h3 id="注意" tabindex="-1"><a class="header-anchor" href="#注意"><span>注意</span></a></h3><p>Yearning安装包内已含有Dockerfile文件,可直接进行build打包成镜像</p><p>容器启动时可通过环境变量的方式传入数据库地址以及秘钥。</p><p>单独使用docker时请先创建数据库并设置字符集为<strong>utf8mb4</strong></p><p>如下所示</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">## 初始化数据库</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> run</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --rm</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -it</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -p8000:8000</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -e</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> SECRET_KEY=</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$SECRET_KEY</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -e</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> MYSQL_USER=</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$MYSQL_USER</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -e</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> MYSQL_ADDR=</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$MYSQL_ADDR</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -e</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> MYSQL_PASSWORD=</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$MYSQL_PASSWORD</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -e</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> MYSQL_DB=</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$Yearning_DB</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -e</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Y_LANG=zh_CN</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> yeelabs/yearning</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/opt/Yearning install</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">## 启动 Yearning</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> run</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -d</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -it</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -p8000:8000</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -e</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> SECRET_KEY=</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$SECRET_KEY</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -e</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> MYSQL_USER=</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$MYSQL_USER</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -e</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> MYSQL_ADDR=</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$MYSQL_ADDR</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -e</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> MYSQL_PASSWORD=</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$MYSQL_PASSWORD</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -e</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> MYSQL_DB=</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$Yearning_DB</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -e</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Y_LANG=zh_CN</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> yeelabs/yearning</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docker-compose-推荐安装" tabindex="-1"><a class="header-anchor" href="#docker-compose-推荐安装"><span>Docker-compose(推荐安装)</span></a></h2><p>安装包/源码仓库内docker目录下执行 <code>docker-compose up -d</code> 即可</p>`,8)]))}const k=s(n,[["render",h],["__file","index.html.vue"]]),r=JSON.parse('{"path":"/zh/usage/lphvwwj3/","title":"Docker","lang":"zh-CN","frontmatter":{"title":"Docker","createTime":"2024/11/04 15:34:40","permalink":"/zh/usage/lphvwwj3/","description":"注意 Yearning安装包内已含有Dockerfile文件,可直接进行build打包成镜像 容器启动时可通过环境变量的方式传入数据库地址以及秘钥。 单独使用docker时请先创建数据库并设置字符集为utf8mb4 如下所示 Docker-compose(推荐安装) 安装包/源码仓库内docker目录下执行 docker-compose up -d 即可","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://next.yearning.io/usage/lphvwwj3/"}],["meta",{"property":"og:url","content":"https://next.yearning.io/zh/usage/lphvwwj3/"}],["meta",{"property":"og:site_name","content":"Yearning Guide"}],["meta",{"property":"og:title","content":"Docker"}],["meta",{"property":"og:description","content":"注意 Yearning安装包内已含有Dockerfile文件,可直接进行build打包成镜像 容器启动时可通过环境变量的方式传入数据库地址以及秘钥。 单独使用docker时请先创建数据库并设置字符集为utf8mb4 如下所示 Docker-compose(推荐安装) 安装包/源码仓库内docker目录下执行 docker-compose up -d 即可"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-04T10:27:47.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-04T10:27:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Docker\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-04T10:27:47.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":3,"title":"注意","slug":"注意","link":"#注意","children":[]},{"level":2,"title":"Docker-compose(推荐安装)","slug":"docker-compose-推荐安装","link":"#docker-compose-推荐安装","children":[]}],"readingTime":{"minutes":0.58,"words":173},"git":{"createdTime":1730716067000,"updatedTime":1730716067000,"contributors":[{"name":"Henry","email":"henry@yearning.io","commits":1}]},"autoDesc":true,"filePathRelative":"zh/notes/usage/docker.md","bulletin":false}');export{k as comp,r as data};