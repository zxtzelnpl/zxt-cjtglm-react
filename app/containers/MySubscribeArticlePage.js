import './MySubscribeArticlePage.less'

import React from 'react'
import {bindActionCreators} from 'redux'
import * as newsListmentActionsFromOtherFile from '../actions/newslist'
import * as wxInfoActionsFromOtherFile from '../actions/wxinfo'
import {connect} from 'react-redux'

import SubscribeArticleList from '../components/SubscribeArticleList'
import Footer from '../components/Footer'

var wxJsApiParam
function jsApiCall() {
    WeixinJSBridge.invoke(
        'getBrandWCPayRequest',
        wxJsApiParam, /*josn串*/
        function (res) {
            WeixinJSBridge.log(res.err_msg);
            if (res.err_msg === "get_brand_wcpay_request:ok") {
                alert('购买成功')
            }
        }
    );
}

function callpay() {
    if (typeof WeixinJSBridge === "undefined") {
        if (document.addEventListener) {
            document.addEventListener('WeixinJSBridgeReady', jsApiCall, false);
        }
        else if (document.attachEvent) {
            document.attachEvent('WeixinJSBridgeReady', jsApiCall);
            document.attachEvent('onWeixinJSBridgeReady', jsApiCall);
        }
    }
    else {
        jsApiCall();
    }
}

class MySubscribeArticlePage extends React.Component {
    constructor(props, content) {
        super(props, content)
        // this.url = '/ashx/SubscribeList.ashx'
    }

    componentDidMount() {
        console.log(this.props.match)
    }

    render() {
        return (
            <div className="subscribe-list-page">
                <div className="content">
                    <div className="head">
                        <div className="wrap">
                            <img src="http://weixin.cjtglm.com/txsecurities_pics/analysts/00/201612281745545.png"/>
                            <div>
                                <p>瑜亮</p>
                                <p>进攻K线创始人</p>
                            </div>
                        </div>

                        <a onClick={this.getSubscribe.bind(this)}>续 费</a>
                    </div>
                    <SubscribeArticleList list={this.props.newslist}/>
                </div>
                <Footer footerIndex={2}/>
            </div>
        )
    }

    getSubscribe() {
        if(this.props.wxinfo.user_count === '1'){
            let money = 1;
            let url = `/wx_pay/pay_Inter.aspx?openid=${this.props.wxinfo.openid}&money=${money}`;//获取wxJsApiParam
            fetch(url, {
                method: 'get'
            })
                .then((response) => {
                    return response.text();
                })
                .then((text) => {
                    wxJsApiParam = eval("(" + text + ")");
                    callpay()
                })
                .catch((err)=>{
                    alert('连接失败，请稍后重试')
                })
        }
        else{
            alert('请先完成注册后购买')
            location.hash = 'center'
        }
    }
}

// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
    return {
        newslist: state.newslist,
        wxinfo:state.wxinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        newsListmentActions:bindActionCreators(newsListmentActionsFromOtherFile, dispatch),
        wxInfoActions:bindActionCreators(wxInfoActionsFromOtherFile,dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MySubscribeArticlePage)