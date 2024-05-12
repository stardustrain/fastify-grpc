import * as esbuild from 'esbuild';

await esbuild.build({
  entryPoints: ['app/src/index.ts'],
  bundle: true,
  outfile: 'dist/out.js',
  platform: 'node',
  sourcemap: true,
})
