module.exports = {
  title: "WAIT",
  description: " Just Do It!",
  head: [['link', { rel: 'icon', href: '/images/logo.svg' }]],
  lastUpdated: 'Last Updated',
  smoothcroll: true,
  themeConfig: {
    logo: 'logo.svg',
    //navbar: [
      //{ text: "Reference", link: '/reference/' }
      //]
    navbar: [
      { text: 'Home ', link: '/' },
      { text: 'Guide', link: '/guide/'},
      { text: 'Reference', link: '/reference/'},
    ],
    sidebar: {
      "/guide/": [
        { isGroup: true, text: 'Guide', children: ['/guide/', '/guide/theme.md', '/guide/config.md'], },
      ],
      '/reference/': [
        { text: 'Reference', children: ['/reference/README.md', '/reference/r.md'], },
      ],
    },
  },

  displayAllHeaders: true,
  plugins: [
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: 'Search',
          },
        },
      },
    ],
  ],
}
