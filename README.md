# sanxiangmobile

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



# 项目注意部分
## bscroll 源码修改
替换掉 `/SANX/node_modules/better-scroll/dist/` 下 `bscroll.js` 

解决 `swiper` 组件左右滑动时阻止浏览器默认事件 以及滚动自动触发点击事件的bug

## 请求封装
`/SANX/src/http/index.js`   
    
    post                接口请求
    postImg             七牛云上传图片请求



## 打包问题
main.js 文件 line91

    // 是否app
    const isApp = false;
    // 移动端 为 false 
    // app 为 true

router/index.js 文件 line11 line475

     // 首页
    {
      path: "/",        // "/" 移动端       "index" app
      name: "index",
      component: resolve => require(['../components/index'], resolve)
    },
    {       //  navbar app
      path: '/',        // "navbar" 移动端       "/" app 
      name: 'navbar',
      component: () => import('com/navbar/navbar')
    }

* 打包app
1. main.js  
    --> line91   `const isApp = false;`

2. router/index.js  
    --> line11   首页-`path: "index"`  
    --> line475     navbar-`path: "/"`

* 打包移动端
1. main.js  
    --> line91   `const isApp = true;`

2. router/index.js  
    --> line11     首页-  `path: "/"`  
    --> line475     navbar-  `path: "navbar"`