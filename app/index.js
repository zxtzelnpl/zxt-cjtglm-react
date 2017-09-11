import React from 'react'
import {render} from 'react-dom'
import moment from 'moment'

import Perf from 'react-addons-perf'

import {Provider} from 'react-redux'

import {
    BrowserRouter,
    Route,
    Link,
    Redirect
} from 'react-router-dom'


import configureStore from './store/configureStore'

const store = configureStore()

import './static/css/public.less'
import ProductPage from './containers/ProductPage' //投顾列表页面
import TeacherPage from './containers/TeacherPage' //投顾详情页面


if (__DEV__) {
    console.info('__DEV__是' + __DEV__ + '这里是测试环境')
    window.Perf = Perf
}

let App = () => (
    <BrowserRouter>
        <Route render={({ location }) => (
            <div className="container">
                <Route exact path="/" render={() => (
                    <Redirect to="/product"/>
                )}/>
                <Route path="/teacher/:id" component={TeacherPage} />
                <Route path="/product" component={ProductPage} />
            </div>
        )}/>
    </BrowserRouter>
)

render(
    <Provider  store={store}>
        <App/>
    </Provider>
    ,
    document.getElementById('root')
)