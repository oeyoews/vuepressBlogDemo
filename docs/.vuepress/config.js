module.exports = {
  title: "Vue Test",
  description: " VuePress",
  base: '/v1/',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },                      // 根路径
      { text: 'Test', link: '/test/'},
    ],
    //sidebar: [
      //'/test',
      //[ '/third', 'one' ],
      ////[ '/second', 'second' ]
    //],

    lastUpdated: 'Last Updated',
    displayAllHeaders: true,
    smoothcroll: true,
  }
}
