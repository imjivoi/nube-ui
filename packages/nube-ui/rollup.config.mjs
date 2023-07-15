import { vanillaExtractPlugin } from '@vanilla-extract/rollup-plugin'
import path from 'path'
import vuePlugin from 'rollup-plugin-vue'
import alias from '@rollup/plugin-alias'
import esbuild from 'rollup-plugin-esbuild'
import depsExternal from 'rollup-plugin-node-externals'
import autoprefixer from 'autoprefixer'
import postcss from 'postcss'
import css from 'rollup-plugin-import-css'
import { emptyDir as fsExtraEmptyDir } from 'fs-extra'

const excludedFiles = ['css/theme/default.css', 'css/theme/example.css']

/** @type {Set<string>} */
const emittedCSSFiles = new Set()

/**
 * @return {() => import('rollup').Plugin}
 */
const bundleCssEmits = () => ({
  name: 'bundle-css-emits',
  buildStart() {
    emittedCSSFiles.clear()
  },
  /**
   * @param {string} code
   * @param {import('rollup').RenderedChunk} chunkInfo
   */
  renderChunk(code, chunkInfo) {
    /** @type Array<[string, string]> */
    const allImports = [...code.matchAll(/import (?:.* from )?['"]([^;'"]*)['"];?/g)]
    const dirname = path.dirname(chunkInfo.fileName)
    const output = allImports.reduce((resultingCode, [importLine, moduleId]) => {
      if (emittedCSSFiles.has(path.posix.join(dirname, moduleId))) {
        return resultingCode.replace(importLine, '')
      }
      return resultingCode
    }, code)
    return {
      code: output,
      map: chunkInfo.map ?? null,
    }
  },
  /**
   * @param {import('rollup').RollupOptions} options
   * @param {{ [fileName: string]: import('rollup').EmittedAsset | import('rollup').EmittedChunk }} bundle
   */
  generateBundle(options, bundle) {
    const bundleCode = Array.from(emittedCSSFiles.values())
      .filter((file) => !excludedFiles.includes(file))
      .map((file) => bundle[file])
      .map(({ name, fileName, source }) => `/* ${name} -> ${fileName} */\n` + source)
      .join('')

    this.emitFile({
      type: 'asset',
      name: 'src/index.css',
      source: bundleCode,
    })
  },
})

const emptyDir = () => ({
  name: 'empty-dir',
  async generateBundle({ dir }) {
    if (dir) {
      await fsExtraEmptyDir(dir)
    }
  },
})

const plugins = [
  vanillaExtractPlugin({
    identifiers: 'debug',
  }),
  vuePlugin(),
  alias({
    entries: [{ find: '@', replacement: path.resolve('./src') }],
  }),
  esbuild(),
  depsExternal(),

  bundleCssEmits(),
  // css(),
  emptyDir(),
]

// https://vitejs.dev/config/
export default {
  input: 'src/index.ts',
  plugins,
  external: ['vue'],
  output: [
    {
      dir: 'dist',
      format: 'esm',
      preserveModules: true,
      preserveModulesRoot: 'src',
      sourcemap: true,
      entryFileNames({ name }) {
        return `${name.replace(/\.css$/, '.css.vanilla')}.js`
      },
      assetFileNames(assetInfo) {
        const assetPath = assetInfo.name.replace(/^src\//, 'css/').replace('.css.ts.vanilla', '')
        if (assetPath.match(/\.css$/)) {
          emittedCSSFiles.add(assetPath)
        }
        return assetPath
      },

      exports: 'named',
    },
  ],
  preserveEntrySignatures: 'strict',
}
