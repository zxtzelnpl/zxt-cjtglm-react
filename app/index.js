import './static/css/font-awesome.less'
import './static/css/public.less'

import React from 'react'
import {render} from 'react-dom'

import Perf from 'react-addons-perf'

import {Provider} from 'react-redux'
import configureStore from './store/configureStore'

import {
    HashRouter,
    Route,
    Redirect
} from 'react-router-dom'
import ProductPage from './containers/ProductPage' //投顾列表页面
import TeacherPage from './containers/TeacherPage' //投顾详情页面
import UserCenterPage from './containers/UserCenterPage' //用户中心页面
import ProtocolPage from './containers/ProtocolPage' //用户协议页面
import ArticleListPage from './containers/ArticleListPage' //文章列表页面
import ArticleDetailPage from './containers/ArticleDetailPage' //文章列表页面
import MySubscribePage from './containers/MySubscribePage' //个人订阅列表页面

import NotFound from './components/NotFound' //Not Found
import RegisterStatement from './containers/RegisterStatement' //注册声明弹出框
import WeiXin0 from './containers/WeiXin0' //微信模版1

if (__DEV__) {
    console.info('__DEV__是' + __DEV__ + '这里是测试环境')
    window.Perf = Perf
}

const store = configureStore()
let App = () => (
    <HashRouter>
        <div className="container">
            <Route exact path="/" render={() => (
                <Redirect to="/articlelist"/>
            )}/>
            <Route path="/teacher/:id" component={TeacherPage} />
            <Route path="/product" component={ProductPage} />
            <Route path="/center" component={UserCenterPage} />
            <Route path="/protocol" component={ProtocolPage} />
            <Route path="/articlelist" component={ArticleListPage} />
            <Route path="/article/:id" component={ArticleDetailPage} />
            <Route path="/mysubscirbe/:id" component={MySubscribePage} />
            <Route path="/weixin0" component={WeiXin0} />
            <Route path="/notfound/:reason" component={NotFound} />
            <RegisterStatement />
        </div>
    </HashRouter>
)
render(
    <Provider  store={store}>
        <App/>
    </Provider>
    ,
    document.getElementById('root')
)



