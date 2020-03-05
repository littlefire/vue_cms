module.exports = {
  // 配置基础路径 开发环境和生产环境
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  devServer: {
    host: 'localhost',
    port: 8080
  }
}
