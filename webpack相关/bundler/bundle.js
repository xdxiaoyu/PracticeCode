// 实现简单的打包功能

const fs = require('fs')
const path = require('path')
const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const babel = require('@babel/core')
const { group } = require('console')

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
      // console.log(newFile);
      dependencies[node.source.value] = newFile
    }
  })
  // console.log(dependencies);
  // console.log(ast.program.body);
  const { code } = babel.transformFromAst(ast, null , {
    presets: ["@babel/preset-env"] // 插件的集合
  })
  // console.log(code);
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
// const moduleInfo =  moduleAnalyser('./src/index.js')
// console.log(moduleInfo);

const makeDependenciesGraph = (entry) => {
  const entryModule = moduleAnalyser(entry)
  const graphArry = [ entryModule ] // 依赖图谱
  for (let i = 0; i < graphArry.length; i++) {
    const item = graphArry[i];
    const { dependencies } = item
    if(dependencies) {
      for (let j in dependencies) {
        graphArry.push(
          moduleAnalyser(dependencies[j])
        )
      }
    }
  }
  // console.log(graphArry);
  const graph = {};
  graphArry.forEach(item => {
    graph[item.filename] = {
      dependencies: item.dependencies,
      code: item.code
    }
  })

  return graph
}

const generateCOde = (entry) => {
  // console.log(makeDependenciesGraph(entry));  缺少一个require方法和export对象
  const graph = JSON.stringify(makeDependenciesGraph(entry))
  return `
    (function(graph){
      function require(module){
        function localRequire(relativePath) {
          return require(graph[module].dependencies[relativePath])
        }
        var exports = {};
        (function(require, exports, code){
          eval(code)
        })(localRequire, exports, graph[module].code);
        return exports
      };
      require('${entry}')
    })(${graph});
  `
}


const code = generateCOde('./src/index.js')
console.log(code); 
// 我们做一个项目做打包
// 首先对项目中的模块进行分析