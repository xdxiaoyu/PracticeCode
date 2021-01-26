// 实现简单的打包功能

const fs = require('fs')
const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default

const moduleAnalyser = (filename) => {
  const content = fs.readFileSync(filename, 'utf-8')
  /* 
  console.log(parser.parse(content, {
    sourceType: 'module'
  })); // 打印出来的是抽象语法树（AST）
  */
  const ast = parser.parse(content, {
    sourceType: 'module'
  })
  const dependencies = [];
  traverse(ast, {
    ImportDeclaration({ node }) {
      console.log(node);
    }
  })
  // console.log(ast.program.body);
  
}

moduleAnalyser('./src/index.js')

