import{_ as n,c as t,a,o as r}from"./app-B_p-YCDi.js";const i={};function l(o,e){return r(),t("div",null,e[0]||(e[0]=[a('<h3 id="理念" tabindex="-1"><a class="header-anchor" href="#理念"><span>理念</span></a></h3><p><strong>Yearning自2.1.7版本之后采用权限组的方式进行权限授权,权限最低下放至数据源。</strong></p><p><strong>Yearning中用户先以角色的形式分为两大类,分别为 普通用户/超级管理员。其中超级管理员角色为可见管理页面角色,普通用户为非可见管理页面角色。通过角色Yearning在细粒度权限划分之前先将用户分类。使管理类权限不会出现在使用者细粒度权限划分中</strong></p><p><strong>可根据每个用户的实际需求配置相应ddl/dml/查询数据源。每一类权限相互独立互不干扰。</strong></p><h3 id="权限种类" tabindex="-1"><a class="header-anchor" href="#权限种类"><span>权限种类</span></a></h3><p>在Yearning中权限共分为2大类</p><ol><li><p>角色权限</p></li><li><p>细粒度权限</p></li></ol><p>角色权限: 普通用户/超级管理员 该权限主要用来划定各用户权限边界并规定功能入口</p><p>细粒度权限: DML/DDL/查询的数据源访问权限,查询上级审核人</p><h3 id="如何分配权限" tabindex="-1"><a class="header-anchor" href="#如何分配权限"><span>如何分配权限</span></a></h3><p>角色权限:超级管理员在新建用户时可自行设置对应角色。LDAP用户登录默认第一次登录均为提交人角色。可在登录后由超级管理员修改角色(必须在赋权之前确定好用户的角色)</p><p>细粒度权限: 超级管理员建立权限组并将单个或多个权限组赋予用户，使用户继承权限组的细粒度权限。</p><h3 id="yearning没有初始超级管理员权限" tabindex="-1"><a class="header-anchor" href="#yearning没有初始超级管理员权限"><span>Yearning没有初始超级管理员权限</span></a></h3><p>首次使用Yearning时超级管理员本身也不具备对应的细粒度权限,需自行配置。 新建用户同样不具备任何权限。任何操作都必须在赋予对应的权限之后才能执行。所以请在使用之前赋予用户权限！</p><h3 id="设置用户权限" tabindex="-1"><a class="header-anchor" href="#设置用户权限"><span>设置用户权限</span></a></h3><p>1.超级管理员可在权限组页面创建相应权限组,并赋予权限组相关权限。</p><p>2.超级管理员在用户权限页面中选择用户并赋予权限(单个用户可授予多个权限组且当权限组权限重复时自动去重)</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p><strong>Yearning采用基于用户的细粒度权限/角色权限,权限最低下放至数据源。</strong></p></div>',18)]))}const s=n(i,[["render",l],["__file","index.html.vue"]]),c=JSON.parse('{"path":"/zh/usage/ms7zdn29/","title":"权限设置","lang":"zh-CN","frontmatter":{"title":"权限设置","createTime":"2024/11/04 16:44:57","permalink":"/zh/usage/ms7zdn29/","description":"理念 Yearning自2.1.7版本之后采用权限组的方式进行权限授权,权限最低下放至数据源。 Yearning中用户先以角色的形式分为两大类,分别为 普通用户/超级管理员。其中超级管理员角色为可见管理页面角色,普通用户为非可见管理页面角色。通过角色Yearning在细粒度权限划分之前先将用户分类。使管理类权限不会出现在使用者细粒度权限划分中 可根据每...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://next.yearning.io/usage/ms7zdn29/"}],["meta",{"property":"og:url","content":"https://next.yearning.io/zh/usage/ms7zdn29/"}],["meta",{"property":"og:site_name","content":"Yearning Guide"}],["meta",{"property":"og:title","content":"权限设置"}],["meta",{"property":"og:description","content":"理念 Yearning自2.1.7版本之后采用权限组的方式进行权限授权,权限最低下放至数据源。 Yearning中用户先以角色的形式分为两大类,分别为 普通用户/超级管理员。其中超级管理员角色为可见管理页面角色,普通用户为非可见管理页面角色。通过角色Yearning在细粒度权限划分之前先将用户分类。使管理类权限不会出现在使用者细粒度权限划分中 可根据每..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-04T10:27:47.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-04T10:27:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"权限设置\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-04T10:27:47.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":3,"title":"理念","slug":"理念","link":"#理念","children":[]},{"level":3,"title":"权限种类","slug":"权限种类","link":"#权限种类","children":[]},{"level":3,"title":"如何分配权限","slug":"如何分配权限","link":"#如何分配权限","children":[]},{"level":3,"title":"Yearning没有初始超级管理员权限","slug":"yearning没有初始超级管理员权限","link":"#yearning没有初始超级管理员权限","children":[]},{"level":3,"title":"设置用户权限","slug":"设置用户权限","link":"#设置用户权限","children":[]}],"readingTime":{"minutes":1.99,"words":596},"git":{"createdTime":1730716067000,"updatedTime":1730716067000,"contributors":[{"name":"Henry","email":"henry@yearning.io","commits":1}]},"autoDesc":true,"filePathRelative":"zh/notes/usage/configure/rbac.md","bulletin":false}');export{s as comp,c as data};