import { defineConfig } from 'vitepress'
import { baseUrl } from "./BaseUrl.js";
import { set_sidebar } from "./utils/auto_sidebar.js";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 设置github部署的路径，解决css样式失效问题
  base: baseUrl,
  title: "My Coding Learning",
  description: "学习笔记",
  // outDir: '../dist',
  // 获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
  // lastUpdated: true, // string | boolean 开始更新时间

  head: [
    // 添加图标
    ['link', { rel: 'icon', href: `${baseUrl}vite.svg` }],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: 'API 示例', link: '/api-examples' },
      {
        text: 'Python',
        items: [
          { text: 'python基础', link: '/notes/Python/python基础/' }
        ]
      },
      {
        text: 'Web',
        items: [
          { text: 'HTML', link: '/notes/Web/HTML/' },
          { text: 'CSS', link: '/notes/Web/CSS/' }
        ]
      },
    ],
    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' },
    //     ]
    //   }
    // ],
    sidebar: {
      '/api-examples': [
        {
          text: 'Examples',
          items: [
            { text: 'Markdown Examples', link: '/api-examples/暂无内容1' },
            { text: 'Runtime API Examples', link: '/api-examples/暂无内容2' },
          ]
        }
      ],
      // set_sidebar 已经设置到docs目录下，只需要填入其下的目录即可扫描
      '/notes/Python/python基础': set_sidebar('/notes/Python/python基础'),
      '/notes/Web/HTML': set_sidebar('/notes/Web/HTML'),
      '/notes/Web/CSS': set_sidebar('/notes/Web/CSS'),
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/marioliu2001/my-coding-learning' }
    ],

    /**
     * 自定义内容
     */
    // 导航上的logo
    logo: "/橘子.svg",
    siteTitle: '橙子笔记', // false(隐藏logo右边的标题)
    //手机端深浅模式文字修改
    darkModeSwitchLabel: '主题模式',
    //本地搜索
    search: {
      provider: 'local'
    },
    //页脚
    footer: {
      message: 'Released under the MIT License',
      copyright: 'Copyright © 1999-present',
    },
    //侧边栏文字更改(移动端)
    sidebarMenuLabel:'目录',
    //返回顶部文字修改
    returnToTopLabel:'返回顶部',
    outline: {
      level: [1,4], // 显示2-4级标题
      // level: 'deep', // 显示2-6级标题
      label: '当前页大纲' // 文字显示
    },
    //编辑本页
    editLink: {
      pattern: 'https://github.com/marioliu2001/my-coding-learning/blob/main/docs/:path', // 改成自己的仓库
      text: '在GitHub编辑本页'
    },
    //上次更新时间
    // lastUpdated: {
    //   text: 'Updated at',
    //   formatOptions: {
    //     dateStyle: 'full',
    //     timeStyle: 'medium'
    //   },
    // },
    //自定义上下页名
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
  }
})
