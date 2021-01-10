module.exports = {
  title: 'Java Notes',
  description: 'Anotações sobre desenvolvimento de aplicação usando a tecnologias baseada na JVM',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Guide', link: '/guide/'
      },
      { text: 'External', link: 'https://google.com' }
    ],
    sidebar: [
      {
        title: 'Guide',
        collapsable: true,
        children: [
          ['/guide/', "Introdução"],
          ['/guide/page1', 'Page 1'],
          ['/guide/page2', 'Page 2']
        ]
      }
    ]
  }
}