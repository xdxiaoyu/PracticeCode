// 实现简单的打包功能

const fs = require('fs')
const path = require('path')
const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const babel = require('@babel/core')

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
  const dependencies = {};
  traverse(ast, {
    ImportDeclaration({ node }) {
      const dirname = path.dirname(filename)
      const newFile =  path.join(dirname, node.source.value)
      console.log(newFile);
      dependencies[node.source.value] = newFile
    }
  })
  // console.log(dependencies);
  // console.log(ast.program.body);
  const { code } = babel.transformFromAst(ast, null , {
    presets: ["@babel/preset-env"] // 插件的集合
  })
  console.log(code);
  return {
    filename,
    dependencies,
    code
  }

}

// 写一个函数分析模块
// 读取文件内容，把文件内容转换成js对象
// 采用babel的parser把字符串转换成抽象语法树
// 分析语法树的引用声明和依赖内容
// 用键值对存储依赖关系的路径
// 对模块的源代码进行了一次编译(从esmodule即es6的语法编译成浏览器能识别的语法)
const moduleInfo =  moduleAnalyser('./src/index.js')
console.log(moduleInfo);



// 我们做一个项目做打包
// 首先对项目中的模块进行分析