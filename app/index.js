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
import UserCenterPage from './containers/UserCenterPage' //投顾详情页面
import Protocol from './containers/Protocol' //投顾详情页面

import RegisterStatement from './containers/RegisterStatement' //注册声明组件

const store = configureStore()

if (__DEV__) {
    console.info('__DEV__是' + __DEV__ + '这里是测试环境')
    window.Perf = Perf
}

let App = () => (
    <BrowserRouter>
        <div className="container">
            <Route exact path="/" render={() => (
                <Redirect to="/product"/>
            )}/>
            <Route path="/teacher/:id" component={TeacherPage} />
            <Route path="/product" component={ProductPage} />
            <Route path="/center" component={UserCenterPage} />
            <Route path="/protocol" component={Protocol} />
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