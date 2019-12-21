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
        displayAllHeaders: true,
        nav: [
            { text: 'Github', link: 'https://github.com/debingfeng' },
            { text: '掘金', link: 'https://juejin.im/user/5cdcc7b1f265da036902bcc7' },
            { text: '关于我', link: 'https://debingfeng.github.io/about' }
        ],
        sidebarDepth: 1,
        sidebar: [
            {
                title: 'Arch ui框架',
                collapsable: false,
                children: [
                    '/archui/00-组件库设计开发的目标与定位.md',
                    '/archui/01-arch-ui框架的目的与定位.md',
                    '/archui/02-框架设计大纲.md',
                    '/archui/03-架构设计.md',
                    '/archui/04-交互设计参考.md',
                    '/archui/05-场景化模板.md',
                    '/archui/06-参考文章.md',
                    '/archui/07-组件库开发时间评估.md'
                ]
            },
            {
                title: '2019年度',
                collapsable: false,
                children: [
                    '/2019/',
                    '/2019/05/',
                    '/2019/11/'
                ]
            },
            {
                title: '2018年度',
                collapsable: false,
                children: [
                    '/2018/',
                    '/2018/08/'
                ]
            }
        ]
    }

};
