import './static/css/font-awesome.less'
import './static/css/public.less'

import React from 'react'
import {render} from 'react-dom'

import Perf from 'react-addons-perf'

import {Provider} from 'react-redux'
import configureStore from './store/configureStore'

import {
    BrowserRouter,
    Route,
    Redirect
} from 'react-router-dom'
import ProductPage from './containers/ProductPage' //投顾列表页面
import TeacherPage from './containers/TeacherPage' //投顾详情页面
import UserCenterPage from './containers/UserCenterPage' //用户中心页面
import ProtocolPage from './containers/ProtocolPage' //用户协议页面
import ArticleListPage from './containers/ArticleListPage' //文章列表页面
import ArticleDetailPage from './containers/ArticleDetailPage' //文章列表页面

import RegisterStatement from './containers/RegisterStatement' //注册声明弹出框

import WeiXin0 from './containers/WeiXin0' //微信模版1

if (__DEV__) {
    console.info('__DEV__是' + __DEV__ + '这里是测试环境')
    window.Perf = Perf
}

fetch('/api/articlelist',{
    method:'get'
})
    .then((response)=>{
        return response.json()
    })
    .then((json)=>{
        console.log('****json****')
        console.log(json)
        console.log('****json****')
        window.initialState = json.initialState
    })
    .catch((err)=>{
        console.log('****err****')
        console.log(err)
        console.log('****err****')
    })

const store = configureStore()
let App = () => (
    <BrowserRouter>
        <div className="container">
            <Route exact path="/" render={() => (
                <Redirect to="/product"/>
            )}/>
            <Route path="/teacher/:id" component={TeacherPage} />
            <Route path="/product" component={ProductPage} />
            <Route path="/center" component={UserCenterPage} />
            <Route path="/protocol" component={ProtocolPage} />
            <Route path="/articlelist" component={ArticleListPage} />
            <Route path="/article/:id" component={ArticleDetailPage} />
            <Route path="/weixin0" component={WeiXin0} />
            <RegisterStatement />
        </div>
    </BrowserRouter>
)
render(
    <Provider  store={store}>
        <App/>
    </Provider>
    ,
    document.getElementById('root')
)

