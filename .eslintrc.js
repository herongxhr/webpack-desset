module.exports = {
  // 配置文件是可有继承关系
  root: true,
  // 不再是root，而是extends即继承airbnb
  // extends: "airbnb",
  // 把源代码转化AST语法树的工具
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2015
  },
  //指定脚本的运行环境
  env: {
    browser: true,
    // 加上对node的支持
    node: true
  },
  // 启用的规则及其各自的错误级别
  // 在这里可以重写airbnb的规则 
  rules: {
    // 'linebreak-style': 'off',
    "indent": "off",//缩进风格
    // "indent": [''],
    "quotes": "off",//引号类型 
    "no-console": "error",//禁止使用console
  }
}