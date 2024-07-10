import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/spos-docs/',
  title: 'SimplePOS User Guide',
  description: 'SimplePOS User guide',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: 'Home', link: '/' },
      // { text: 'Installation', link: '/installation' },
      // { text: 'User Guide', link: '/guide' },
      // { text: 'Developer Guide', link: '/dev-guide' },
      { text: 'Support Portal', link: 'https://tecdiary.net/support' },
      { text: 'Buy Now', link: 'https://codecanyon.net/checkout/from_item/3947976?license=regular&ref=tecdiary' },
    ],

    sidebar: [
      {
        text: '',
        items: [
          { text: 'Home', link: '/' },
          { text: 'Installation', link: '/installation' },
          { text: 'Features', link: '/features' },
          { text: 'User Guide', link: '/guide' },
          { text: 'Developer Guide', link: '/dev-guide' },
        ],
      },
    ],

    // socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
    footer: {
      message: 'SimplePOS - Point of Sale Made Easy',
      copyright: 'Copyright © 2013-present Tecdiary IT Solutions',
    },
  },
  markdown: {
    image: {
      // image lazy loading is disabled by default
      lazyLoading: true,
    },
  },
  vite: {
    publicDir: 'public',
  },
});
