module.exports = {
  base: "/",
  title: "Learning",
  description: " Just Do It!",
  head: [
    [
      'link',
      {
        rel: 'icon',
        // just support ico format
        href: 'favicon.ico'
      }
    ],
    [
      "link",
      { rel: "stylesheet",
        type: "text/css",
        href: "/static/css/font.css"
      },
    ],
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
        text: '📇 Home ',
        link: '/'
      },
      {
        text: '📓 Guide',
        //link: '/guide/'
        children: [
          //'/test/README.md',
          '/guide/',
        ]
      },
      {
        text: ' 🎄Reference',
        link: '/reference/'
      },
      {
        text: '🇹 Test',
        link: '/test/'
      },
      {
        text: '🇱 Links',
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
            text: 'TiddlyWiki(github-h5)',
            link: 'https://oeyoews.top/tiddlywiki'
          },
          {
            text: 'TiddlyWiki(gitlab-js)',
            link: 'https://oeyoew.fun/'
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
          text: '📇 Guide',
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
          isGroup: true,
          text: 'Reference',
          children: [
            'README.md',
            'r.md',
          ],
        },
      ],
      // must have readme in it's directory
      // not show h1 title
      // must have second h2 title for one file to build normal sidebar
      '/test/': [
        {
          isGroup: true,
          text: 'Test',
          children: [
            "README.MD",
            't1.md',
            't2.md',
          ],
        },
      ],
    },
  },
}
