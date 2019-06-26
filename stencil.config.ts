import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import autoprefixer from 'autoprefixer';

// https://stenciljs.com/docs/config

export const config: Config = {
  plugins: [
    postcss({
      plugins: [
        autoprefixer({
          cascade: false,
        }),
      ],
    }),
  ],
  copy: [{ src: '_redirects' }],
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  outputTargets: [
    {
      type: 'www',
      // comment the following line to disable service workers in production
      serviceWorker: null,
      prerenderConfig: './prerender.config.js',
      baseUrl: 'https://elastic-hodgkin-a279cc.netlify.com/',
    },
  ],
};
