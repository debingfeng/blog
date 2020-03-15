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
            { text: '语雀', link: 'https://www.yuque.com/debingfeng' },
            { text: '关于我', link: '/about-me.md' }
        ],
        sidebarDepth: 1,
        sidebar: [
            {
                title: 'H5与Hybrid',
                collapsable: false,
                children: [
                    '/hybrid/h5/',
                    '/hybrid/native/',
                ]
            },
            {
                title: 'CSS',
                collapsable: false,
                children: [
                    '/css/',
                ]
            },
            {
                title: 'Javascript',
                collapsable: false,
                children: [
                    '/javascript/',
                ]
            },
            {
                title: '前端框架',
                collapsable: false,
                children: [
                    '/vue/',
                    '/react/',
                    '/angular/',
                    '/node/',
                ]
            },
            {
                title: '基础架构与工程化',
                collapsable: false,
                children: [
                    '/structure/',
                ]
            },
            {
                title: '服务器开发',
                collapsable: false,
                children: [
                    '/server/',
                ]
            },
            {
                title: '计算机基础',
                collapsable: false,
                children: [
                    '/computer/',
                ]
            },
        ]
    }

};
