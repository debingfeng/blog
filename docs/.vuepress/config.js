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
                title: '2020年度',
                collapsable: false,
                children: [
                    '/2020/03/',
                    '/2020/02/',
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
            },
            {
                title: 'Node.js相关',
                collapsable: false,
                children: [
                    '/Node/base/',
                    '/Node/practice/',
                    '/Node/advanced/'
                ]
            }

        ]
    }

};
