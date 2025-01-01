// @ts-check
import { join } from 'path';
import { renameSync } from 'fs';

/** @param {import('typedoc').Application} app */
export function load(app) {
  app.renderer.on('endRender', () => {
    const outputDir = app.options.getValue('out');
    const functionsDir = join(outputDir, 'functions');
    const componentsDir = join(outputDir, 'Components');

    try {
      renameSync(functionsDir, componentsDir);
      console.log(`Renamed directory: ${functionsDir} -> ${componentsDir}`);
    } catch (error) {
      console.error(`Error renaming directory: ${error.message}`);
    }
  });
}
