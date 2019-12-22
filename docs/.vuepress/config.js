module.exports = {
    base: '/blog/',
    title: '一兵的博客',
    description: '不畏浮云遮望眼，直挂云帆济沧海！',
    head: [
        ['link', { rel: 'icon', href: 'favicon.ico' }]
    ],
    // host: '172.28.184.16',
    // port: '9300',
    themeConfig: {
        lastUpdated: true,
        displayAllHeaders: false,
        nav: [
            { text: 'Github', link: 'https://github.com/debingfeng' },
            { text: '掘金', link: 'https://juejin.im/user/5cdcc7b1f265da036902bcc7' },
            { text: '关于我', link: '/about-me.md' }
        ],
        sidebarDepth: 1,
        sidebar: [{
                title: 'Arch-ui框架',
                collapsable: false,
                children: [
                    '/archui/01-archui框架的目的与定位.md',
                    '/archui/02-框架功能需求.md',
                    '/archui/03-架构设计.md',
                    '/archui/04-交互设计参考.md',
                    '/archui/05-组件库开发周期.md',
                    '/archui/06-场景化模板.md',
                    '/archui/07-参考文章.md'
                ]
            },
            {
                title: '2019年度',
                collapsable: false,
                children: [
                    '/2019/05/',
                    '/2019/06/',
                    '/2019/11/',
                    '/2019/12/'
                ]
            },
            {
                title: '2018年度',
                collapsable: false,
                children: [
                    '/2018/'
                ]
            },
            {
                title: '2017年度',
                collapsable: false,
                children: [
                    '/2017/'
                ]
            }
        ]
    }

};