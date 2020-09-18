module.exports = {
  title: 'Pifrok - 岩木邦™',
  description: 'Pifrok',
  base: '/pifrok/', 
  themeConfig: {
    dateFormat: 'YYYY-MM-DD',
    nav: [
       {
         text: 'Home',
         link: '/',
       },
       {
         text: 'Blog',
         link: '/blog/',
       },
       {
         text: 'Tags',
         link: '/tag/',
       },
       {
         text: 'About',
         link: '/about/',
       },
       {
         text: 'Github',
         link: 'https://github.com/htlaoyang'
       },
    ],

    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/htlaoyang',
        },
        {
          type: 'mail',
          link: '/',
        },
      ],
      copyright: [
        {
          text: 'Privacy Policy',
          link: 'https://policies.google.com/privacy?hl=en-US',
        },
        {
          text: 'Copyright © 2018-present Vue.js',
          link: '',
        },
      ],
    },
    directories:[
      {
        id: 'home',
        dirname: '_posts',
        path: '/',
        layout: 'Home'
      },
       {
         id: 'blog',
         dirname: 'blog/_posts',
         path: '/blog/',
         itemPermalink: '/:year/:month/:day/:slug',
       },
    ],

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#frontmatters
     */

    // frontmatters: [
    //   {
    //     id: "tag",
    //     keys: ['tag', 'tags'],
    //     path: '/tag/',
    //   },
    //   {
    //     id: "location",
    //     keys: ['location'],
    //     path: '/location/',
    //   },
    // ],

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#globalpagination
     */

    globalPagination: {
       lengthPerPage: 3,
    },
    comment: {
      service: 'pifrok',
      owner: 'htlaoyang',
      repo: 'pifrok', 
      clientId: '6a0f09e343a9f15cb7e9',
      clientSecret: '6515b5f09b373fbe1f21c8f40ad42ee44b16be22',
    },

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#summary
     */

    // summary:false,

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#summarylength
     */

    // summaryLength:100,

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#pwa
     */

    // pwa:true,

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#paginationcomponent
     */

    // paginationComponent: 'SimplePagination'

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#smoothscroll
     */
    smoothScroll: true
  },
}
