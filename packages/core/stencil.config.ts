import { type Config } from '@stencil/core';
import tailwind, { tailwindHMR } from 'stencil-tailwind-plugin';
import { reactOutputTarget } from '@stencil/react-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';


export const config: Config = {
  namespace: 'core',
  plugins: [
    tailwind(),
    tailwindHMR(),
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'single-export-module',
      externalRuntime: false,
      dir: 'components',
    },
    reactOutputTarget({
      outDir: '../react/src',
      hydrateModule: '@placid/core/hydrate',
    }),
    vueOutputTarget({
      includeImportCustomElements: true,
      componentCorePackage: '@placid/core',
      hydrateModule: '@placid/core/hydrate',
      proxiesFile: '../vue/src/components.ts',
    }),
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [
        { src: './public' },
      ],
    },
    {
      type: 'dist-hydrate-script',
      dir: './hydrate',
    },
  ],
  testing: {
    browserHeadless: "new",
  },
};
