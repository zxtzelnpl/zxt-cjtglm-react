import './static/css/font-awesome.less'
import './static/css/public.less'
import user_img from './static/img/user/user.png'

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
                <Redirect to="/articlelist"/>
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

let initialState={},store;
let userPromise = new Promise(function(resolve){
    localStorage.clear();
    if(localStorage.getItem('userinfo')){
        console.log(localStorage.getItem('userinfo'))
        resolve(JSON.parse(localStorage.getItem('userinfo')));
    }else{
        fetch('/ashx/wx_openid_user_is.aspx',{method:'get',mode: 'no-cors'})
            .then((response)=>{
                console.log(response)
                return response.text()
            })
            .then((json)=>{
                alert(JSON.stringify(json))
                resolve(json)
            })
    }
})

Promise
    .all([userPromise])
    .then(function([userinfo]){
        // localStorage.setItem('userinfo',JSON.stringify(userinfo))
        initialState.userinfo = userinfo
        initial()
    })




function initial(){
    store = configureStore(initialState)
    render(
        <Provider store={store}>
            <App/>
        </Provider>
        ,
        document.getElementById('root')
    )
}




