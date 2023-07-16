import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },

  fastRefresh: {},
  devServer: {
    port: 233
  }
});
