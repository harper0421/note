import fs from 'fs';
import { defineConfig } from 'vitepress';
// https://vitepress.dev/reference/site-config
export default defineConfig(({ mode }) => {
  if (mode === 'production') {
    fs.writeFile(``, JSON.stringify({ v: Date.now() }), () => {
      console.log('✌ ✌ 生成版本文件成功 ~', process.cwd());
    });
  }

  return {
    title: 'note',
    description: 'description',
    themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      nav: [
        { text: 'Home', link: '/note/' },
        { text: 'Examples', link: '/markdown-examples' },
        { text: 'Test', link: '/test' },
      ],

      sidebar: [
        {
          text: 'Examples',
          items: [
            { text: 'Markdown Examples', link: '/markdown-examples' },
            { text: 'Runtime API Examples', link: '/api-examples' },
          ],
        },
        {
          text: 'Test',
          items: [
            { text: 'Test Markdown Examples', link: '#markdown-examples' },
            { text: 'Test Runtime API Examples', link: '#api-examples' },
          ],
        },
      ],

      socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
    },
    outDir: './dist',
    base: '/note/',
    vite: {
      server: {
        port: 8080,
      },
    },
  };
});
