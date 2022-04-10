const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: "warning",
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    }
  }
})
