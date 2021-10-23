module.exports = {
  base: "/",
  title: "VM",
  description: " Just Do It!",
  head: [['link', { rel: 'icon', href: '/images/logo.svg' }]],
  lastUpdated: 'Last Updated',
  smoothcroll: true,
  plugins: [
    [ '@vuepress/plugin-search', { locales: { '/': { placeholder: 'Search', }, }, }, ],
  ],
  themeConfig: {
    logo: 'logo.svg',
    navbar: [
      { text: 'Home ', link: '/' },
      { text: 'Guide', link: '/guide/'},
      { text: 'Reference', link: '/reference/'},
      { text: 'Links',
        children: [
          { text: 'Github', link: 'https://github.com/oeyoews' },
          { text: 'Google', link: 'https://google.com' },
          { text: 'Wiki', link: 'https://wikipedia.org' },
      ],
      },
      ] ,
    sidebar: {
      "/guide/": [
        { isGroup: true, text: 'Guide', children: ['/guide/', '/guide/theme.md', '/guide/config.md'], },
      ],
      '/reference/': [
        { text: 'Reference', children: ['/reference/README.md', '/reference/r.md'], },
      ],
    },
  },
}
