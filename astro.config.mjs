import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://thepetko.github.io',
  base: '/apesa-web',
  trailingSlash: 'always',
  output: 'static',
  compressHTML: false,
  devToolbar: { enabled: false },
});
