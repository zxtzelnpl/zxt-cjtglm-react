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
import CenterPage from './containers/CenterPage' //用户中心页面
import ProtocolPage from './containers/ProtocolPage' //用户协议页面
import ArticleListPage from './containers/ArticleListPage' //文章列表页面
import ArticleDetailPage from './containers/ArticleDetailPage' //文章列表页面
import MySubscribePage from './containers/MySubscribePage' //个人订阅列表页面
import MySubscribeArticlePage from './containers/MySubscribeArticlePage' //个人订阅单个产品页面

import NotFound from './components/NotFound' //Not Found
import RegisterStatement from './containers/RegisterStatement' //注册声明弹出框
import WeiXin0 from './containers/WeiXin0' //微信模版1

if (__DEV__) {
    console.info('__DEV__是' + __DEV__ + '这里是测试环境')
    window.Perf = Perf
}

let App = () => (
    <HashRouter>
        <div className="container">
            <Route exact path="/" render={() => (
                <Redirect to="/center"/>
            )}/>
            <Route path="/teacher/:id" component={TeacherPage}/>
            <Route path="/product" component={ProductPage}/>
            <Route path="/usercenter" component={CenterPage}/>
            <Route path="/protocol" component={ProtocolPage}/>
            <Route path="/articlelist" component={ArticleListPage}/>
            <Route path="/article/:id" component={ArticleDetailPage}/>
            <Route path="/mysubscirbe/:id" component={MySubscribePage}/>
            <Route path="/mysubscirbearticle/:id" component={MySubscribeArticlePage}/>
            <Route path="/weixin0" component={WeiXin0}/>
            <Route path="/center" component={CenterPage}/>
            <Route path="/notfound/:reason" component={NotFound}/>
            <RegisterStatement/>
        </div>
    </HashRouter>
)

const wxConfig = {
    AppID: 'wx0b172217f0472b86',
    AppSecret: '5f073ab7160493eca6f5c0870b7186b5',
    urlCode: 'https://open.weixin.qq.com/connect/oauth2/authorize'
}


let initialState = {}, store;
let wxinfoPromise = new Promise(function (resolve) {
    if (localStorage.getItem('wxinfo')) {
        console.log('########wxinfolocalstorage########');
        console.log(localStorage.getItem('wxinfo'));
        console.log('########wxinfolocalstorage########');
        resolve(JSON.parse(localStorage.getItem('wxinfo')));
    } else {
        let wxinfo = getWeiXinInfo()
        wxinfo.then((json)=>{
            localStorage.setItem('wxinfo',JSON.stringify(json))
            resolve(json)
        })
    }
})

Promise
    .all([wxinfoPromise])
    .then(function ([wxinfo]) {
        initialState.wxinfo = wxinfo
        initial()
    })


function initial() {
    store = configureStore(initialState)
    render(
        <Provider store={store}>
            <App/>
        </Provider>
        ,
        document.getElementById('root')
    )
}


function getWeiXinInfo() {
    let query = getQuery();
    if (!query.code) {
        let urlCode = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid='
            + wxConfig.AppID
            + '&redirect_uri='
            + location.href
            + '&response_type=code&scope=snsapi_base&state=lk#wechat_redirect'
        window.location = urlCode
    } else {
        return fetch('/ashx/wx_openid_user_is.ashx?code=' + query.code)
            .then((res) => {
                return res.json()
            })
    }
}

function getQuery() {
    let query = {}
    let _query = location.search.slice(1).split('&')
    _query.forEach((str) => {
        let arr = str.split('=')
        query[arr[0]] = arr[1]
    })
    return query
}




