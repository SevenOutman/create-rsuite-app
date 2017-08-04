# create-rsuite-app
`create-rsuite-app` 是用于快速创建基于 [Rsuite](https://rsuitejs.com) + React + Redux + React-Router 为模板的脚手架，能让你快读得搭建功能完善的后台框架。

[在线 DEMO](https://rsuitejs.com/rsuite-example-admin/#/events?_k=kew5mz)
## 用法
#### 安装

```bash
# 确保全局安装
npm install -g yo
npm install -g generator-create-rsuite-app
```

#### 创建项目
```bash
# 创建并进入项目文件夹
mkdir your-project && cd your-project

// 使用脚手架安装项目
yo create-rsuite-app
```

#### 运行项目
等待 npm install 安装完成后，执行下面命令，打开 `localhost:3002` 即可运行项目。
```bash
npm run dev
```
#### 构建项目
```bash
npm run build
```

## 脚手架介绍
脚手架启用了 `eslint`、`less`、`redux`、`react-router`、`react-router-redux`、`react-intl`、`react-redux` 等依赖和配置。在使用该脚手架时，要确保对前面提到的知识有所了解。


### 项目结构介绍
脚手架的项目结构位于 `generators/app/temlates` 文件夹下，项目结构如下：
```
.
├── README.md
├── data                // 存放本地 mock json 数据
│   ├── captcha.jpg
│   └── users.json
├── package.json
├── src 
│   ├── actions         // redux action 
│   ├── components      // react component
│   ├── constants       // 常量定义
│   ├── containers      // redux containers 
│   ├── hoc             // 高阶函数
│   ├── index.html      // 首页
│   ├── index.js        // 入口文件
│   ├── less            // less 样式
│   ├── locales         // 国际化 文件夹
│   ├── reducers        // redux reducer
│   ├── routes          // react-router 定义
│   └── utils
├── webpack             // webpack 配置文件
│   ├── extractLess.js
│   ├── plugins.js
│   └── rules.js
├── webpack.config.js
└── webpack.dev.config.js
```


