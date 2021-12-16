module.exports = {
  base: "/",
  title: "VM",
  description: " Just Do It!",
  head: [
    [
      'link',
      {
        rel: 'icon',
        // just support ico format
        href: 'favicon.ico'
      }
    ]
  ],
  lastUpdated: 'Last Updated',
  smoothcroll: true,
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
  themeConfig: {
    logo: 'oeyoew.png',
    navbar: [
      {
        text: 'Home ',
        link: '/'
      },
      {
        text: 'Guide',
        //link: '/guide/'
        children: [
          //'/test/README.md',
          '/guide/',
        ]
      },
      {
        text: 'Reference',
        link: '/reference/'
      },
      {
        text: 'Test',
        link: '/test/'
      },
      {
        text: 'Links',
        children: [
          {
            text: 'Google',
            link: 'https://google.com'
          },
          {
            text: 'Bing',
            link: 'https://bing.com'
          },
          {
            text: 'Github',
            link: 'https://github.com/oeyoews/oeyoews.github.io'
          },
          {
            text: 'Wiki',
            link: 'https://wikipedia.org'
          },
        ],
      },
    ] ,
    // 不同的子路径使用不同的侧边栏
    sidebar: {
      "/guide/": [
        {
          isGroup: true,
          text: 'Guide',
          children: [
            'README.md',
            'theme.md',
            'g1.md',
            'config.md',
          ],
        },
      ],
      '/reference/': [
        {
          text: 'Reference',
          children: [
            'README.md',
            'r.md',
          ],
        },
      ],
      // must have readme in it's directory
      '/test/': [
        {
          text: 'Test',
          children: [
            't1.md',
            't2.md',
          ],
        },
      ],
    },
  },
}
