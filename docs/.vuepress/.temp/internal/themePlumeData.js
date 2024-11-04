export const themeData = {"locales":{"/zh/":{"selectLanguageName":"简体中文","selectLanguageText":"选择语言","appearanceText":"外观","lightModeSwitchTitle":"切换为浅色主题","darkModeSwitchTitle":"切换为深色主题","outlineLabel":"此页内容","returnToTopLabel":"返回顶部","editLinkText":"编辑此页","contributorsText":"贡献者","prevPageLabel":"上一页","nextPageLabel":"下一页","lastUpdated":{"text":"最后更新于"},"notFound":{"code":"404","title":"页面未找到","quote":"但是，如果你不改变方向，并且一直寻找，最终可能会到达你要去的地方。","linkText":"返回首页"},"encryptButtonText":"确认","encryptPlaceholder":"请输入密码","encryptGlobalText":"本站只允许密码访问","encryptPageText":"本页面只允许密码访问","footer":{"message":"","copyright":"AGPL-3.0 Licensed | Copyright © 2017-present Henry Yee"},"logo":"/images/icon.png","docsRepo":"","docsDir":"docs","social":[{"icon":"github","link":"https://github.com/cookieY/Yearning"}],"profile":{"avatar":"https://theme-plume.vuejs.press/plume.png","name":"Yearning Guide","description":"Get started with Yearning"},"navbar":[{"text":"开始上手","icon":"mdi:routes","link":"/zh/notes/usage/yearning.md"},{"text":"常见问题","icon":"wpf:ask-question","link":"/zh/notes/faq/faq.md"},{"text":"开发","icon":"icon-park-outline:code","link":"/zh/notes/development/declare.md"},{"text":"更新","icon":"grommet-icons:update","link":"/zh/notes/update/update.md"},{"text":"关于","icon":"mdi:about-circle-outline","link":"/zh/notes/about/about.md"}]},"/":{"selectLanguageName":"English","selectLanguageText":"Languages","appearanceText":"Appearance","lightModeSwitchTitle":"Switch to light theme","darkModeSwitchTitle":"Switch to dark theme","editLinkText":"Edit this page","contributorsText":"Contributors","lastUpdated":{"text":"Last Updated"},"encryptButtonText":"Confirm","encryptPlaceholder":"Enter password","encryptGlobalText":"Only password can access this site","encryptPageText":"Only password can access this page","footer":{"message":"","copyright":"AGPL-3.0 Licensed | Copyright © 2017-present Henry Yee"},"logo":"/images/icon.png","docsRepo":"","docsDir":"docs","social":[{"icon":"github","link":"https://github.com/cookieY/Yearning"}],"profile":{"avatar":"https://theme-plume.vuejs.press/plume.png","name":"Yearning Guide","description":"Get started with Yearning"},"navbar":[{"text":"Guide","icon":"mdi:routes","link":"/notes/usage/yearning.md"},{"text":"FAQ","icon":"wpf:ask-question","link":"/notes/faq/faq.md"},{"text":"Development","icon":"icon-park-outline:code","link":"/notes/development/declare.md"},{"text":"Change Logs","icon":"grommet-icons:update","link":"/notes/update/update.md"},{"text":"About","icon":"mdi:about-circle-outline","link":"/notes/about/about.md"}]}},"appearance":true,"blog":{"pagination":15,"postList":true,"tags":true,"archives":true,"categories":true,"link":"/blog/","tagsLink":"/blog/tags/","archivesLink":"/blog/archives/","categoriesLink":"/blog/categories/"},"navbarSocialInclude":["github","twitter","discord","facebook"],"aside":true,"outline":[2,3],"externalLinkIcon":true,"editLink":true,"contributors":true,"prevPage":true,"nextPage":true,"footer":{"message":"","copyright":"AGPL-3.0 Licensed | Copyright © 2017-present Henry Yee"},"logo":"https://theme-plume.vuejs.press/plume.png","docsRepo":"","docsDir":"docs","social":[{"icon":"github","link":"https://github.com/cookieY/Yearning"}]}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}