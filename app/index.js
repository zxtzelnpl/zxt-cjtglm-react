import './static/css/font-awesome.less'
import './static/css/public.less'
import 'whatwg-fetch'
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import {HashRouter} from 'react-router-dom'
import Perf from 'react-addons-perf'


import App from './App'
import Loading from './components/Loading'

import {initialState as userInitialState} from './reducers/userinfo'
import {getCode, getQuery} from './static/js/tools'

/**上线后一定要删除啊,别忘了啊**/
// localStorage.removeItem('wxinfo')
// localStorage.removeItem('userinfo')
/**上线后一定要删除啊,别忘了啊**/
if (__DEV__) {
  // console.info('__DEV__是' + __DEV__ + '这里是测试环境')
  // localStorage.setItem('wxinfo', '{"openid":"oy4PmwjoPAe6-eEUSIUcPm-4jYdQ","nick_name":"Aaron Z","province":"内蒙古","country":"中国","city":"兴安","sex":"1","headimgurl":"http://wx.qlogo.cn/mmopen/E0cm3AJSvSCZodaMYE3TQImBpsGb6HmhXicwVWJ6NFf66RN10CA4D3IOpDHgITfpHjqJv4libmofd1Wp4zfIlt9RueSw9XoNQF/0","channel":"其他","user_count":"1","erro":"OK","receviedAt":"1513221087164"}')
  // window.Perf = Perf
}

render(<Loading/>, document.getElementById('root'))
getInitialState()

function __render(wxinfo, userinfo) {
  let store = configureStore({
    wxinfo: wxinfo,
    userinfo: userinfo
  })
  console.log(store.getState())
  render(
      <Provider store={store}>
        <HashRouter>
          <App/>
        </HashRouter>
      </Provider>
      ,
      document.getElementById('root')
  )
}

function getInitialState() {
  let userinfo = userInitialState
  if (typeof localStorage === 'object' && localStorage.getItem('userinfo')) {
    userinfo = JSON.parse(localStorage.getItem('userinfo'))
  }

  let getWxinfo = new Promise((resolve, reject) => {
    if (typeof localStorage === 'object' && localStorage.getItem('wxinfo')) {
      let wxinfo = JSON.parse(localStorage.getItem('wxinfo'))
      resolve(wxinfo)
    }
    else {
      let query = getQuery(location.search)
      if (query.code) {
        fetch('/ashx/wx_openid_user_is.ashx?code=' + query.code)
            .then(res => {
              return res.json()
            })
            .then(json => {
              if (json.erro !== 'OK') {
                reject({
                  state: 'noAttention',
                  info: '您还没有关注公众号《君银牛人堂》，请先关注后查看页面'
                })
              }
              else {
                let wxinfo = Object.assign(
                    {receviedAt: new Date().getTime()},
                    json)
                resolve(wxinfo)
              }
            })
            .catch(() => {
              reject({
                state: 'net',
                info: '网络错误，请稍后重试'
              })
            })
      }
      else {
        getCode()
      }
    }
  })

  getWxinfo.then(wxinfo => {
    localStorage.setItem('wxinfo', JSON.stringify(wxinfo))
    __render(wxinfo, userinfo)
  })
      .catch(err=>{
        if(err.state){
          alert(err.info)
        }
      })
}








