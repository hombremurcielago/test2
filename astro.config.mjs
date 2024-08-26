import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://github.com/hombremurcielago/test1.github.io.git',
  base: 'my-repo',
})