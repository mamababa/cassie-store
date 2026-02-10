import { defineConfig } from 'father';

export default defineConfig({
  // more father config: https://github.com/umijs/father/blob/master/docs/config.md
  // ESM 构建
  esm: {
    output: 'dist/esm',
    platform: 'browser',
  },
  // CommonJS 构建
  cjs: {
    output: 'dist/cjs',
    platform: 'node',
  },
  // 预打包优化
  prebundle: {
    deps: {
      'use-sync-external-store': {
        minify: true,
      },
    },
  },
});
