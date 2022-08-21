const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  // 2022.08.05[프뚜]: ESLint false -> 단일 단어 컴포넌트 사용 가능
  lintOnSave: false
});