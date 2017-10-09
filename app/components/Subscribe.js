import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './Subscribe.less'

var wxJsApiParam;

function jsApiCall() {
    WeixinJSBridge.invoke(
        'getBrandWCPayRequest',
        wxJsApiParam, /*josn串*/
        function (res) {
            WeixinJSBridge.log(res.err_msg);
            if (res.err_msg === "get_brand_wcpay_request:ok") {

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

class Subscribe extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    getSubscribe() {
        let url = '';//获取wxJsApiParam
        fetch(url, {
            method: 'get'
        })
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                wxJsApiParam = json;
                callpay()
            })
    }

    render() {
        return (
            <a className="subscribe" href="javascript:void(0);" onClick={this.getSubscribe.bind(this)}>
                <p>￥39.00</p>
                <p>订阅</p>
            </a>
        )
    }
}

export default Subscribe