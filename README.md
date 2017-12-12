# 前端脚手架V1
>作者：Abbott.liu

前端小组成员

* harry.lang：负责解决代码疑难问题
* star.chen：大屏展示页面
* abbott.liu：负责写相关文档，不会写代码

# 前端后端知识资料汇总

### [各种知识点击这里进行学习](http://40.125.200.98:10080/hunter.xue/docs/tree/dev)

**新人请看链接里的入职指南**

```
npm config set registry https://registry.npm.taobao.org
registry=http://registry.npmjs.org
npm config get registry
npm config list //查看基本配置
npm config list -l //查看所有配置
```

# 单页面Web应用
> 简称SPA

## 注意
本项目master分支已升级到`webpack3`版本。

## 项目介绍
本项目是一个基于webpack架构的**web application**脚手架，其特点如下：

- 前端SPA项目。
- 既可实现全后端分离，也可以生成后端渲染所需要的模板。
- 引入layout和component的概念，方便多页面间对布局、组件的重用。
- 含Js框架
- 本项目基于 ***webpack v2*** 和 ***webpack-dev-server v2***，全局和项目局部依赖都一样。

## 使用说明
- 本项目使用包管理工具NPM，因此需要先把本项目所依赖的包下载下来：
```
$ npm install
```

- 启动服务器，推荐直接使用webpack-dev-server
```
$ npm run start
```

- 理论上来说，webpack-dev-server会自动帮你打开浏览器并展示示例页面；如果没有的话，请手动打开浏览器，在地址栏里输入`http://127.0.0.1:6600`，Duang！页面就出来了！

## CLI命令(npm scripts)
| 命令            | 作用&效果          |
| --------------- | ------------- |
| npm run build   | 根据`webpack.config.js`，build出一份生产环境的代码 |
| npm run dev     | 根据`webpack.dev.config.js`，build出一份开发环境的代码 |
| npm run start   | 开启webpack-dev-server并自动打开浏览器，自动监测源码变动并实现LiveReload，**推荐实际开发时使用此项** |
| npm run dll     | 生成Dll文件，每次升级第三方库时都需要重新执行一遍 |
| npm run analyse  | 生成打包文件结构的可视化分析报告；注意请在`npm run build`或`npm run dev`后再执行 |
| npm run analyze | 作用同上 |

## 目录结构说明
```
├─build # 编译后生成的所有代码、资源（图片、字体等，虽然只是简单的从源目录迁移过来）
├─node_modules # 利用npm管理的所有包及其依赖
├─vendor # 所有不能用npm管理的第三方库
├─.babelrc # babel的配置文件
├─.eslintrc # ESLint的配置文件
├─index.html # 仅作为重定向使用
├─package.json # npm的配置文件
├─webpack-config # 存放分拆后的webpack配置文件
│   ├─base # 主要是存放一些变量
│   ├─inherit # 存放生产环境和开发环境相同的部分，以供继承
│   └─vendor # 存放webpack兼容第三方库所需的配置文件
├─webpack.config.js # 生产环境的webpack配置文件（无实质内容，仅为组织整理）
├─webpack.dev.config.js # 开发环境的webpack配置文件（无实质内容，仅为组织整理）
├─src # 当前项目的源码
    ├─pages # 各个页面独有的部分，如入口文件、只有该页面使用到的css、模板文件等
    │  ├─alert # 业务模块
    │  │  └─index # 具体页面
    │  ├─index # 业务模块
    │  │  ├─index # 具体页面
    │  │  └─login # 具体页面
    │  │      └─templates # 如果一个页面的HTML比较复杂，可以分成多块再拼在一起
    │  └─user # 业务模块
    │      ├─edit-password # 具体页面
    │      └─modify-info # 具体页面
    └─public-resource # 各个页面使用到的公共资源
        ├─components # 组件，可以是纯HTML，也可以包含js/css/image等，看自己需要
        │  ├─footer # 页尾
        │  ├─header # 页头
        │  ├─side-menu # 侧边栏
        │  └─top-nav # 顶部菜单
        ├─config # 各种配置文件
        ├─iconfont # iconfont的字体文件
        ├─imgs # 公用的图片资源
        ├─layout # UI布局，组织各个组件拼起来，因应需要可以有不同的布局套路
        │  ├─layout # 具体的布局套路
        │  └─layout-without-nav # 具体的布局套路
        ├─less # less文件，用sass的也可以，又或者是纯css
        │  ├─base-dir
        │  └─base.less # 组织所有的less文件
        ├─libs # 与业务逻辑无关的库都可以放到这里
        └─logic # 业务逻辑
```

## 更新日志
### 1.1.0 (2017-12-05)
更新了一批浏览器缓存相关配置

### 1.0.0 (2017-11-05)
webpack及webpack-dev-server升级到v2版本，并相应修改webpack配置文件。


# ESLint

```
eslint --init

cnpm install eslint --save-dev

cnpm install eslint-loader --save-dev

cnpm install eslint-plugin-react --save-dev

cnpm install pre-commit --save-dev
```

在项目根目录创建一个 `.eslintignore` 文件告诉 `ESLint` 去忽略特定的文件和目录

Text files created on DOS/Windows machines have different line endings than files created on Unix/Linux. DOS uses carriage return and line feed ("\r\n") as a line ending, which Unix uses just line feed ("\n"). 

# 终端

查看指令历史

```
history
```

清除

```
history -c
```

# git 操作

### 提交修改文件

1、查看修改文件

```
git status
```

2、增减文件

```
git add README.md config/setting.js
```

README.md和config/setting.js为增加的文件，中间需要空格

3、填写修改理由

```
git commit -m '理由'
```

4、跟线上的版本合并

```
git pull
```

5、提交文件

```
git push
```

### 解决冲突问题

1、先将本地修改存储起来

```
git stash
```

把所有未提交的修改（包括暂存的和非暂存的）全部保存起来，用于后续恢复当前工作目录

这样本地的所有修改就都被暂时存储起来

用`git stash list`可以看到保存的信息

实际应用中推荐给每个stash加一个message，用于记录版本，

使用`git stash save`取代`git stash`命令。

示例如下：

```
git stash save 'abbott-stash'
```


2、pull内容

```
git pull
```

3、还原暂存的内容

```
git stash pop stash@{0}
```

打开冲突的文件，会看到冲突内容

```
git stash show -p stash@{0}
```

添加-u参数可以输出某一次stash的所有文件差异对比

```
git stash show -u stash@{0}
```

退出

```
control+c
```

删除指定stash

```
git stash drop <stash@{id}>
```

清除所有stash

```
git stash clear
```

查看list中某一次stash

```
git stash show stash@{0}
```

添加-u参数可以输出某一次stash的所有文件差异对比

```
git stash show stash@{0} -u
```

解决冲突常用指令

```
git status #查询本地修改
git log #日志
git reset --hard  版本号 #回退版本
git stash save 'setting' #保存名setting
git pull
git stath list
git stash pop stash{0} #开始解决冲突
git add public/config/setting.js
git commit -m '解决冲突'
git push
stash clear
```

### 创建新的分支

首先，我们创建dev分支，然后切换到dev分支：

```
git checkout -b dev
```

`git checkout`命令加上`-b`参数表示创建并切换，相当于以下两条命令：

```
git branch dev
git checkout dev
```

```
git branch -a
git branch abbott
git checkout abbott
git add index.html
git commit -m 'index.html'
git push
```


### 合并分支

```
git branch -a

git checkout master

git merge abbott

git add .

git commit -m '合并'

git push
```

删除dev分支

```
git branch -d dev
```

### 回滚到上一个版本

```
git reset --hard HEAD~1
```
强制提交版本

```
git push -f
```

在原分支 `git stash save -a 'messeag'` 加 `-a` 这个option选项，我想他们的代码开发可能都是在原代码上进行修改。

而对于在项目里加入了代码新文件的开发来说，`-a`选项才会将新加入的代码文件同时放入暂存区。

仓库初始化的设置

```
touch README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin http://40.125.200.98:10080/hunter.xue/bingtuan-bigdata-web-portal.git
git push -u origin master

npm init -y
```

git rm -r --cached .DS_Store

git diff

按q退出历史记录列表即可

```
git status
ls
git rm MockJson  -r -f
git commit -m 'delete MockJson'
git push
```

当我们需要删除暂存区或分支上的文件, 同时工作区也不需要这个文件了, 可以使用

git rm file_path

当我们需要删除暂存区或分支上的文件, 但本地又需要使用, 只是不希望这个文件被版本控制, 可以使用

git rm --cached file_path

git rm –r * （进入某个目录中，执行此语句，会删除该目录下的所有文件和子目录）

git rm f1    (删除文件f1，包含本地目录和index中的此文件记录)

git rm --ached f1 (删除文件f1，不会删除本地目录文件，只删除index中的文件记录；

将已经git add的文件remove到cache中,这样commit的时候不会提交这个文件,

适用于一下子添加了很多文件, 却又想排除其中个别几个文件的情况.)

git rm -r --cached

git rm -r --cached a/2.txt //删除a目录下的2.txt文件   删除a目录git rm -r --cached a

git commit -m "删除a目录下的2.txt文件"

git push

### 新的仓库建立远程连接

```
mkdir xxx  #创建新文件夹
cd xxx  #进入
git init  #初始化Git仓库
git add .  #增加
git commit -m 'description'  #提交改变到缓存
git remote add origin http://40.125.200.98:10080/hunter.xue/bingtuan-bigdata-web-portal.git  #本地git仓库关联GitHub仓库
git push -u origin master #提交到GitHub
```

### 标签

```
git tag -a v0.1.2 -m '0.1.2版本' #创建远程标签
git tag #
git checkout v0.1.2
git push origin v0.1.2
git push origin :refs/tags/v0.1.2 #删除远程标签
```

```
git rm -r -n --cached  */src/\* #-n：加上这个参数，执行命令时，是不会删除任何文件，而是展示此命令要删除的文件列表预览。
git rm -r --cached  *architect/submodule-dependency/dpm-parent/out/* #最终执行命令
git commit -m "移除out目录下所有文件的版本控制" #提交
git push origin dev #提交到远程服务器
```

```
git branch -D ab-technology #删除本地分支
git push origin :ab-technology #删除远程分支
```

```
git branch mybranch #创建分支
git checkout mybranch #切换分支
git checkout -b mybranch #创建并切换分支
```

```
git checkout -b ab-technology
git push --set-upstream origin ab-technology
```


# Express

安装 Express 并将其保存到依赖列表中

```
npm install express --save
```

以上命令会将 Express 框架安装在当前目录的`node_modules`目录中， node_modules 目录下会自动创建 express 目录。

以下几个重要的模块是需要与 express 框架一起安装的：

* body-parser - node.js 中间件，用于处理 JSON, Raw, Text 和 URL 编码的数据。

* cookie-parser - 这就是一个解析Cookie的工具。通过req.cookies可以取到传过来的cookie，并把它们转成对象。

* multer - node.js 中间件，用于处理 enctype="multipart/form-data"（设置表单的MIME编码）的表单数据。

```
npm install body-parser --save
npm install cookie-parser --save
npm install multer --save
```



# ESLint 配置

## 当前规则

### 警告级别

* 没定义的变量 
* 使用`console.log('jquery')`
* 使用多余空格

### 错误级别

* 字符串饮用为单引号
* 换行标志为`/n`

## ESLint 所有规则说明

```
"no-alert": 0,//禁止使用alert confirm prompt
"no-array-constructor": 2,//禁止使用数组构造器
"no-bitwise": 0,//禁止使用按位运算符
"no-caller": 1,//禁止使用arguments.caller或arguments.callee
"no-catch-shadow": 2,//禁止catch子句参数与外部作用域变量同名
"no-class-assign": 2,//禁止给类赋值
"no-cond-assign": 2,//禁止在条件表达式中使用赋值语句
"no-console": 2,//禁止使用console
"no-const-assign": 2,//禁止修改const声明的变量
"no-constant-condition": 2,//禁止在条件中使用常量表达式 if(true) if(1)
"no-continue": 0,//禁止使用continue
"no-control-regex": 2,//禁止在正则表达式中使用控制字符
"no-debugger": 2,//禁止使用debugger
"no-delete-var": 2,//不能对var声明的变量使用delete操作符
"no-div-regex": 1,//不能使用看起来像除法的正则表达式/=foo/
"no-dupe-keys": 2,//在创建对象字面量时不允许键重复 {a:1,a:1}
"no-dupe-args": 2,//函数参数不能重复
"no-duplicate-case": 2,//switch中的case标签不能重复
"no-else-return": 2,//如果if语句里面有return,后面不能跟else语句
"no-empty": 2,//块语句中的内容不能为空
"no-empty-character-class": 2,//正则表达式中的[]内容不能为空
"no-empty-label": 2,//禁止使用空label
"no-eq-null": 2,//禁止对null使用==或!=运算符
"no-eval": 1,//禁止使用eval
"no-ex-assign": 2,//禁止给catch语句中的异常参数赋值
"no-extend-native": 2,//禁止扩展native对象
"no-extra-bind": 2,//禁止不必要的函数绑定
"no-extra-boolean-cast": 2,//禁止不必要的bool转换
"no-extra-parens": 2,//禁止非必要的括号
"no-extra-semi": 2,//禁止多余的冒号
"no-fallthrough": 1,//禁止switch穿透
"no-floating-decimal": 2,//禁止省略浮点数中的0 .5 3.
"no-func-assign": 2,//禁止重复的函数声明
"no-implicit-coercion": 1,//禁止隐式转换
"no-implied-eval": 2,//禁止使用隐式eval
"no-inline-comments": 0,//禁止行内备注
"no-inner-declarations": [2, "functions"],//禁止在块语句中使用声明（变量或函数）
"no-invalid-regexp": 2,//禁止无效的正则表达式
"no-invalid-this": 2,//禁止无效的this，只能用在构造器，类，对象字面量
"no-irregular-whitespace": 2,//不能有不规则的空格
"no-iterator": 2,//禁止使用__iterator__ 属性
"no-label-var": 2,//label名不能与var声明的变量名相同
"no-labels": 2,//禁止标签声明
"no-lone-blocks": 2,//禁止不必要的嵌套块
"no-lonely-if": 2,//禁止else语句内只有if语句
"no-loop-func": 1,//禁止在循环中使用函数（如果没有引用外部变量不形成闭包就可以）
"no-mixed-requires": [0, false],//声明时不能混用声明类型
"no-mixed-spaces-and-tabs": [2, false],//禁止混用tab和空格
"linebreak-style": [0, "windows"],//换行风格
"no-multi-spaces": 1,//不能用多余的空格
"no-multi-str": 2,//字符串不能用\换行
"no-multiple-empty-lines": [1, {"max": 2}],//空行最多不能超过2行
"no-native-reassign": 2,//不能重写native对象
"no-negated-in-lhs": 2,//in 操作符的左边不能有!
"no-nested-ternary": 0,//禁止使用嵌套的三目运算
"no-new": 1,//禁止在使用new构造一个实例后不赋值
"no-new-func": 1,//禁止使用new Function
"no-new-object": 2,//禁止使用new Object()
"no-new-require": 2,//禁止使用new require
"no-new-wrappers": 2,//禁止使用new创建包装实例，new String new Boolean new Number
"no-obj-calls": 2,//不能调用内置的全局对象，比如Math() JSON()
"no-octal": 2,//禁止使用八进制数字
"no-octal-escape": 2,//禁止使用八进制转义序列
"no-param-reassign": 2,//禁止给参数重新赋值
"no-path-concat": 0,//node中不能使用__dirname或__filename做路径拼接
"no-plusplus": 0,//禁止使用++，--
"no-process-env": 0,//禁止使用process.env
"no-process-exit": 0,//禁止使用process.exit()
"no-proto": 2,//禁止使用__proto__属性
"no-redeclare": 2,//禁止重复声明变量
"no-regex-spaces": 2,//禁止在正则表达式字面量中使用多个空格 /foo bar/
"no-restricted-modules": 0,//如果禁用了指定模块，使用就会报错
"no-return-assign": 1,//return 语句中不能有赋值表达式
"no-script-url": 0,//禁止使用javascript:void(0)
"no-self-compare": 2,//不能比较自身
"no-sequences": 0,//禁止使用逗号运算符
"no-shadow": 2,//外部作用域中的变量不能与它所包含的作用域中的变量或参数同名
"no-shadow-restricted-names": 2,//严格模式中规定的限制标识符不能作为声明时的变量名使用
"no-spaced-func": 2,//函数调用时 函数名与()之间不能有空格
"no-sparse-arrays": 2,//禁止稀疏数组， [1,,2]
"no-sync": 0,//nodejs 禁止同步方法
"no-ternary": 0,//禁止使用三目运算符
"no-trailing-spaces": 1,//一行结束后面不要有空格
"no-this-before-super": 0,//在调用super()之前不能使用this或super
"no-throw-literal": 2,//禁止抛出字面量错误 throw "error";
"no-undef": 1,//不能有未定义的变量
"no-undef-init": 2,//变量初始化时不能直接给它赋值为undefined
"no-undefined": 2,//不能使用undefined
"no-unexpected-multiline": 2,//避免多行表达式
"no-underscore-dangle": 1,//标识符不能以_开头或结尾
"no-unneeded-ternary": 2,//禁止不必要的嵌套 var isYes = answer === 1 ? true : false;
"no-unreachable": 2,//不能有无法执行的代码
"no-unused-expressions": 2,//禁止无用的表达式
"no-unused-vars": [2, {"vars": "all", "args": "after-used"}],//不能有声明后未被使用的变量或参数
"no-use-before-define": 2,//未定义前不能使用
"no-useless-call": 2,//禁止不必要的call和apply
"no-void": 2,//禁用void操作符
"no-var": 0,//禁用var，用let和const代替
"no-warning-comments": [1, { "terms": ["todo", "fixme", "xxx"], "location": "start" }],//不能有警告备注
"no-with": 2,//禁用with

"array-bracket-spacing": [2, "never"],//是否允许非空数组里面有多余的空格
"arrow-parens": 0,//箭头函数用小括号括起来
"arrow-spacing": 0,//=>的前/后括号
"accessor-pairs": 0,//在对象中使用getter/setter
"block-scoped-var": 0,//块语句中使用var
"brace-style": [1, "1tbs"],//大括号风格
"callback-return": 1,//避免多次调用回调什么的
"camelcase": 2,//强制驼峰法命名
"comma-dangle": [2, "never"],//对象字面量项尾不能有逗号
"comma-spacing": 0,//逗号前后的空格
"comma-style": [2, "last"],//逗号风格，换行时在行首还是行尾
"complexity": [0, 11],//循环复杂度
"computed-property-spacing": [0, "never"],//是否允许计算后的键名什么的
"consistent-return": 0,//return 后面是否允许省略
"consistent-this": [2, "that"],//this别名
"constructor-super": 0,//非派生类不能调用super，派生类必须调用super
"curly": [2, "all"],//必须使用 if(){} 中的{}
"default-case": 2,//switch语句最后必须有default
"dot-location": 0,//对象访问符的位置，换行的时候在行首还是行尾
"dot-notation": [0, { "allowKeywords": true }],//避免不必要的方括号
"eol-last": 0,//文件以单一的换行符结束
"eqeqeq": 2,//必须使用全等
"func-names": 0,//函数表达式必须有名字
"func-style": [0, "declaration"],//函数风格，规定只能使用函数声明/函数表达式
"generator-star-spacing": 0,//生成器函数*的前后空格
"guard-for-in": 0,//for in循环要用if语句过滤
"handle-callback-err": 0,//nodejs 处理错误
"id-length": 0,//变量名长度
"indent": [2, 4],//缩进风格
"init-declarations": 0,//声明时必须赋初值
"key-spacing": [0, { "beforeColon": false, "afterColon": true }],//对象字面量中冒号的前后空格
"lines-around-comment": 0,//行前/行后备注
"max-depth": [0, 4],//嵌套块深度
"max-len": [0, 80, 4],//字符串最大长度
"max-nested-callbacks": [0, 2],//回调嵌套深度
"max-params": [0, 3],//函数最多只能有3个参数
"max-statements": [0, 10],//函数内最多有几个声明
"new-cap": 2,//函数名首行大写必须使用new方式调用，首行小写必须用不带new方式调用
"new-parens": 2,//new时必须加小括号
"newline-after-var": 2,//变量声明后是否需要空一行
"object-curly-spacing": [0, "never"],//大括号内是否允许不必要的空格
"object-shorthand": 0,//强制对象字面量缩写语法
"one-var": 1,//连续声明
"operator-assignment": [0, "always"],//赋值运算符 += -=什么的
"operator-linebreak": [2, "after"],//换行时运算符在行尾还是行首
"padded-blocks": 0,//块语句内行首行尾是否要空行
"prefer-const": 0,//首选const
"prefer-spread": 0,//首选展开运算
"prefer-reflect": 0,//首选Reflect的方法
"quotes": [1, "single"],//引号类型 `` "" ''
"quote-props":[2, "always"],//对象字面量中的属性名是否强制双引号
"radix": 2,//parseInt必须指定第二个参数
"id-match": 0,//命名检测
"require-yield": 0,//生成器函数必须有yield
"semi": [2, "always"],//语句强制分号结尾
"semi-spacing": [0, {"before": false, "after": true}],//分号前后空格
"sort-vars": 0,//变量声明时排序
"space-after-keywords": [0, "always"],//关键字后面是否要空一格
"space-before-blocks": [0, "always"],//不以新行开始的块{前面要不要有空格
"space-before-function-paren": [0, "always"],//函数定义时括号前面要不要有空格
"space-in-parens": [0, "never"],//小括号里面要不要有空格
"space-infix-ops": 0,//中缀操作符周围要不要有空格
"space-return-throw-case": 2,//return throw case后面要不要加空格
"space-unary-ops": [0, { "words": true, "nonwords": false }],//一元运算符的前/后要不要加空格
"spaced-comment": 0,//注释风格要不要有空格什么的
"strict": 2,//使用严格模式
"use-isnan": 2,//禁止比较时使用NaN，只能用isNaN()
"valid-jsdoc": 0,//jsdoc规则
"valid-typeof": 2,//必须使用合法的typeof的值
"vars-on-top": 2,//var必须放在作用域顶部
"wrap-iife": [2, "inside"],//立即执行函数表达式的小括号风格
"wrap-regex": 0,//正则表达式字面量用小括号包起来
"yoda": [2, "never"]//禁止尤达条件
```

#  键盘代码

```
keycode 8 = BackSpace
keycode 9 = Tab
keycode 12 = Clear
keycode 13 = Enter
keycode 32 = Space
keycode 33 = Page Up
keycode 34 = Page Down
keycode 35 = End
keycode 36 = Home
keycode 37 = Left Arrow
keycode 38 = Up Arrow
keycode 39 = Right Arrow
keycode 40 = Down Arrow
keycode 41 = Select
keycode 42 = Print
keycode 43 = Execute
keycode 32 = Space
keycode 33 = Page Up
keycode 34 = Page Down
keycode 35 = End
keycode 36 = Home
keycode 37 = Left Arrow
keycode 38 = Up Arrow
keycode 39 = Right Arrow
keycode 40 = Down Arrow
keycode 41 = Select
keycode 42 = Print
keycode 43 = Execute
keycode 45 = Insert
keycode 46 = Delete
keycode 47 = Help
keycode 48 = 0 )
keycode 49 = 1 !
keycode 50 = 2 @
keycode 51 = 3 #
keycode 52 = 4 $
keycode 53 = 5 %
keycode 54 = 6 ^
keycode 55 = 7 &
keycode 56 = 8 *
keycode 57 = 9 (
keycode 65 = a A
keycode 66 = b B
keycode 67 = c C
keycode 68 = d D
keycode 69 = e E
keycode 70 = f F
keycode 71 = g G
keycode 72 = h H
keycode 73 = i I
keycode 74 = j J
keycode 75 = k K
keycode 76 = l L
keycode 77 = m M
keycode 78 = n N
keycode 79 = o O
keycode 80 = p P
keycode 81 = q Q
keycode 82 = r R
keycode 83 = s S
keycode 84 = t T
keycode 85 = u U
keycode 86 = v V
keycode 87 = w W
keycode 88 = x X
keycode 89 = y Y
keycode 90 = z Z
keycode 112 = F1
keycode 113 = F2
keycode 114 = F3
keycode 115 = F4
keycode 116 = F5
keycode 117 = F6
keycode 118 = F7
keycode 119 = F8
keycode 120 = F9
keycode 121 = F10
keycode 122 = F11
keycode 123 = F12
keycode 124 = F13
keycode 125 = F14
keycode 126 = F15
keycode 127 = F16
keycode 128 = F17
keycode 129 = F18
keycode 130 = F19
keycode 131 = F20
keycode 132 = F21
keycode 133 = F22
keycode 134 = F23
keycode 135 = F24
keycode 136 = Num_Lock
```

# 前端配置指令

```
cnpm install --save babel-polyfill

cnpm install --save isomorphic-fetch

cnpm i babel-plugin-import -D

cnpm install antd --save

cnpm install --save-dev url-loader

cnpm install --save-dev file-loader

cnpm install --save-dev json-loader

cnpm install --save react-router-redux

//es6语法插件
cnpm install babel-core babel-loader babel-preset-es2015 --save-dev
//样式提取压缩
cnpm install cssnano extract-text-webpack-plugin optimize-css-assets-webpack-plugin --save-dev
//样式模块加载器(自动添加前缀)
cnpm install style-loader css-loader less-loader less postcss-loader autoprefixer --save-dev
//图片字体文件加载器
cnpm install url-loader img-loader file-loader
//webpack打包框架
cnpm install html-webpack-plugin webpack webpack-dev-server --save-dev

cnpm install --save react-hot-loader

cnpm install --save-dev react-router-dom

cnpm --save-dev install eslint

cnpm --save-dev install eslint-loader

cnpm --save-dev install eslint-plugin-react

cnpm install babel-plugin-import --save-dev

cnpm install babel-eslint --save-dev
```


# 事件

事件有三要素：事件源、事件数据、事件处理程序

可以加return false;是阻止默认操作

onclick: 鼠标单击触发

ondblclick: 双击触发

onmouseover: 鼠标移动上面触发

onmouseout: 鼠标离开时触发

onmousemove: 鼠标在上面移动时触发

onchange: 只要内容改变触发

onblur: 失去焦点时触发

onfocus: 获得焦点时触发

onkeydown: 按键按下的时候触发

onkeyup：按键抬起来的时候触发

onkeypress：事件在用户按下并放开任何字母数字键时发生。但是系统按钮（例如：箭头键、功能键）无法得到识别。

# 正则表达式

用符号来描述书写规则:/ 中间写正则表达式 /

^ ：匹配开头，$：匹配结尾 ； /^ve/以ve开头的 /ve$/以ve结尾

\d：一个任意的数字

\w：一个任意的数字或字母

\s：任意字符串

{n}：把左边的表达式重复n遍

{m,n}：把左边的表达式重复至少m遍，至多n遍
    {m, }：把左边的表达式重复至少m遍，,至多不限

+：左边的表达式，至少出现一次，至多不限，相当于{1，}

*：左边的表达式，至少出现0次，至多不限，相当于{0，}

?：左边的表达式，至少出现0次，至多出现1次，相当于{0，1}

[a,b,c]：只能取方括号中内容之一

[a-z]或[1-9]：在范围中取其一

|：代表或者； （）：优先级； \：转义--“\( \)”这个才是要出现的小括号，需要转义


webpack-dev-server有以下可选参数：


--content-base //设定webpack-dev-server的director根目录。如果不进行设定的话，默认是在当前目录下。
--quiet: //控制台中不输出打包的信息，开发中一般设置为false，进行 打印，这样查看错误比较方面
--no-info: // 不显示任何信息
--colors: //对信息进行颜色输出
--no-colors: //对信息不进行颜色输出
--compress: //开启gzip压缩
--host <hostname/ip>: //设置ip
--port <number>: //设置端口号，默认是:8080
--inline: //webpack-dev-server会在你的webpack.config.js的入口配置文件中再添加一个入口,
--hot: //开发热替换
--open: //启动命令，自动打开浏览器
--history-api-fallback: //查看历史url



上面的参数都是可选的，举个改变端口的例子：

指令：webpack-dev-server --port 8088


父容器和子容器的`margin-top`合并问题解决。
解决办法：
1.给父层添加：overflow:hidden;
2.给父层添加：border除none以外的属性
3.给父层添加：padding-top代替margin-top的效果（推荐）。


| DOM 0 Event        | DOM 2 Event          | Cool    |
| ------------------ |---------------------:| :------:|
| onblur()           | blur                 |         |
| onfocus()          | focus                | focus() 方法用于从下拉列表中移开焦点 |
| onchange()         | change               |         |
| onmouseover()      | mouseover            |         |
| onmouseout()       | mouseout             |         |
| onmousemove()      | mousemove            |         |
| onmousedown()      | mousedown            |         |
| onmouseup()        | mouseup              |         |
| onclick()          | click                |         |
| ondblclick()       | dblclick             |         |
| onkeydown()        | keydown              |         |
| onkeyup()          | keyup                |         |
| onkeypress()       | keypress             |         |
| onsubmit()         | submit               |         |
| onload()           | load                 |         |
| onunload()         | unload               |         |
