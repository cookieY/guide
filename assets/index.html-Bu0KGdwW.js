import{_ as s,c as a,a as i,o as e}from"./app-B_p-YCDi.js";const l={};function p(d,n){return e(),a("div",null,n[0]||(n[0]=[i(`<div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>|-- Yearning</span></span>
<span class="line"><span>    |-- .gitignore</span></span>
<span class="line"><span>    |-- Juno</span></span>
<span class="line"><span>    |-- LICENSE</span></span>
<span class="line"><span>    |-- README.md</span></span>
<span class="line"><span>    |-- README_EN.md</span></span>
<span class="line"><span>    |-- conf.toml.template</span></span>
<span class="line"><span>    |-- go.mod</span></span>
<span class="line"><span>    |-- go.sum</span></span>
<span class="line"><span>    |-- logo_s.png</span></span>
<span class="line"><span>    |-- main.go</span></span>
<span class="line"><span>    |-- cmd  # cli指令</span></span>
<span class="line"><span>    |   |-- cli.go</span></span>
<span class="line"><span>    |   |-- cmd.go</span></span>
<span class="line"><span>    |   |-- migrate.go</span></span>
<span class="line"><span>    |-- docker</span></span>
<span class="line"><span>    |   |-- Dockerfile</span></span>
<span class="line"><span>    |   |-- README.md</span></span>
<span class="line"><span>    |   |-- docker-compose.yml</span></span>
<span class="line"><span>    |-- img</span></span>
<span class="line"><span>    |   |-- audit.png</span></span>
<span class="line"><span>    |   |-- dash.png</span></span>
<span class="line"><span>    |   |-- login.png</span></span>
<span class="line"><span>    |   |-- logo.jpeg</span></span>
<span class="line"><span>    |   |-- query.png</span></span>
<span class="line"><span>    |   |-- record.png</span></span>
<span class="line"><span>    |-- migrate</span></span>
<span class="line"><span>    |   |-- main.go</span></span>
<span class="line"><span>    |-- src</span></span>
<span class="line"><span>        |-- apis</span></span>
<span class="line"><span>        |   |-- dash.go</span></span>
<span class="line"><span>        |   |-- fetch.go</span></span>
<span class="line"><span>        |   |-- query.go</span></span>
<span class="line"><span>        |-- engine</span></span>
<span class="line"><span>        |   |-- engine.go</span></span>
<span class="line"><span>        |-- handler # 接口核心逻辑</span></span>
<span class="line"><span>        |   |-- dashboard.go</span></span>
<span class="line"><span>        |   |-- commom # 公共方法</span></span>
<span class="line"><span>        |   |   |-- error.go</span></span>
<span class="line"><span>        |   |   |-- expr.go</span></span>
<span class="line"><span>        |   |   |-- types.go</span></span>
<span class="line"><span>        |   |   |-- util.go</span></span>
<span class="line"><span>        |   |-- fetch # 通用获取接口</span></span>
<span class="line"><span>        |   |   |-- fetch.go</span></span>
<span class="line"><span>        |   |   |-- fetch_test.go</span></span>
<span class="line"><span>        |   |   |-- impl.go</span></span>
<span class="line"><span>        |   |-- login # 登录及个人信息接口</span></span>
<span class="line"><span>        |   |   |-- login.go</span></span>
<span class="line"><span>        |   |   |-- profile.go</span></span>
<span class="line"><span>        |   |-- manage # 管理接口</span></span>
<span class="line"><span>        |   |   |-- board.go</span></span>
<span class="line"><span>        |   |   |-- autoTask</span></span>
<span class="line"><span>        |   |   |   |-- autoTask.go</span></span>
<span class="line"><span>        |   |   |   |-- impl.go</span></span>
<span class="line"><span>        |   |   |   |-- route.go</span></span>
<span class="line"><span>        |   |   |-- db</span></span>
<span class="line"><span>        |   |   |   |-- dbmanage.go</span></span>
<span class="line"><span>        |   |   |   |-- impl.go</span></span>
<span class="line"><span>        |   |   |   |-- route.go</span></span>
<span class="line"><span>        |   |   |-- group</span></span>
<span class="line"><span>        |   |   |   |-- group.go</span></span>
<span class="line"><span>        |   |   |   |-- impl.go</span></span>
<span class="line"><span>        |   |   |   |-- route.go</span></span>
<span class="line"><span>        |   |   |-- roles</span></span>
<span class="line"><span>        |   |   |   |-- roles.go</span></span>
<span class="line"><span>        |   |   |   |-- route.go</span></span>
<span class="line"><span>        |   |   |-- settings</span></span>
<span class="line"><span>        |   |   |   |-- route.go</span></span>
<span class="line"><span>        |   |   |   |-- setting.go</span></span>
<span class="line"><span>        |   |   |   |-- setting_test.go</span></span>
<span class="line"><span>        |   |   |-- tpl</span></span>
<span class="line"><span>        |   |   |   |-- impl.go</span></span>
<span class="line"><span>        |   |   |   |-- route.go</span></span>
<span class="line"><span>        |   |   |   |-- tpl.go</span></span>
<span class="line"><span>        |   |   |   |-- tpl_test.go</span></span>
<span class="line"><span>        |   |   |-- user</span></span>
<span class="line"><span>        |   |       |-- impl.go</span></span>
<span class="line"><span>        |   |       |-- route.go</span></span>
<span class="line"><span>        |   |       |-- user.go</span></span>
<span class="line"><span>        |   |       |-- user_test.go</span></span>
<span class="line"><span>        |   |-- order # 工单接口</span></span>
<span class="line"><span>        |   |   |-- audit</span></span>
<span class="line"><span>        |   |   |   |-- audit.go</span></span>
<span class="line"><span>        |   |   |   |-- impl.go</span></span>
<span class="line"><span>        |   |   |   |-- route.go</span></span>
<span class="line"><span>        |   |   |-- osc</span></span>
<span class="line"><span>        |   |   |   |-- impl.go</span></span>
<span class="line"><span>        |   |   |   |-- osc.go</span></span>
<span class="line"><span>        |   |   |   |-- route.go</span></span>
<span class="line"><span>        |   |   |-- query</span></span>
<span class="line"><span>        |   |   |   |-- query.go</span></span>
<span class="line"><span>        |   |   |   |-- route.go</span></span>
<span class="line"><span>        |   |   |-- record</span></span>
<span class="line"><span>        |   |       |-- record.go</span></span>
<span class="line"><span>        |   |-- personal # 用户工单提交/查询 接口</span></span>
<span class="line"><span>        |       |-- impl.go</span></span>
<span class="line"><span>        |       |-- order.go</span></span>
<span class="line"><span>        |       |-- post.go</span></span>
<span class="line"><span>        |       |-- query.go</span></span>
<span class="line"><span>        |       |-- query_test.go</span></span>
<span class="line"><span>        |       |-- route.go</span></span>
<span class="line"><span>        |       |-- util.go</span></span>
<span class="line"><span>        |-- lib #公共库</span></span>
<span class="line"><span>        |   |-- ding.go</span></span>
<span class="line"><span>        |   |-- encrypt.go</span></span>
<span class="line"><span>        |   |-- encrypt_test.go</span></span>
<span class="line"><span>        |   |-- jwtAuth.go</span></span>
<span class="line"><span>        |   |-- rpc.go</span></span>
<span class="line"><span>        |   |-- sendMail.go</span></span>
<span class="line"><span>        |   |-- sendMail_test.go</span></span>
<span class="line"><span>        |   |-- toolbox.go</span></span>
<span class="line"><span>        |   |-- toolbox_test.go</span></span>
<span class="line"><span>        |   |-- wrapper.go</span></span>
<span class="line"><span>        |-- model # 数据模型</span></span>
<span class="line"><span>        |   |-- db.go</span></span>
<span class="line"><span>        |   |-- db_test.go</span></span>
<span class="line"><span>        |   |-- global.go</span></span>
<span class="line"><span>        |   |-- impl.go</span></span>
<span class="line"><span>        |   |-- modal.go</span></span>
<span class="line"><span>        |-- router # 后端路由表</span></span>
<span class="line"><span>        |   |-- router.go</span></span>
<span class="line"><span>        |-- service # Yearning启动函数</span></span>
<span class="line"><span>        |   |-- migrate.go</span></span>
<span class="line"><span>        |   |-- migrate_test.go</span></span>
<span class="line"><span>        |   |-- yearning.go</span></span>
<span class="line"><span>        |-- test</span></span>
<span class="line"><span>            |-- testCore.go</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1)]))}const v=s(l,[["render",p],["__file","index.html.vue"]]),r=JSON.parse('{"path":"/development/4mvjiei9/","title":"directory","lang":"en-US","frontmatter":{"title":"directory","createTime":"2024/11/04 17:00:29","permalink":"/development/4mvjiei9/","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://next.yearning.io/zh/development/4mvjiei9/"}],["meta",{"property":"og:url","content":"https://next.yearning.io/development/4mvjiei9/"}],["meta",{"property":"og:site_name","content":"Yearning Guide"}],["meta",{"property":"og:title","content":"directory"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-04T10:27:47.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-04T10:27:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"directory\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-04T10:27:47.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":0.67,"words":201},"git":{"createdTime":1730716067000,"updatedTime":1730716067000,"contributors":[{"name":"Henry","email":"henry@yearning.io","commits":1}]},"filePathRelative":"notes/development/server.md","bulletin":false}');export{v as comp,r as data};
