import React from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as registerStatementActionsFromOtherFile from '../actions/registerstatement'
import * as userInfoActionsFromOtherFile from '../actions/userinfo'
import * as wxInfoActionsFromOtherFile from '../actions/wxinfo'
import * as productListActionsFromOtherFile from '../actions/productlist'
import User from '../components/User' //用户中心页面
import BindWeiXin from '../components/BindWeiXin' //注册页面
import wxConfig from '../config/weixin'
import teacher_data_format from '../static/js/teacher_data_format'


class CenterPage extends React.Component {
    constructor(props, content) {
        super(props, content)
    }

    render() {
        let user_count = this.props.wxinfo.user_count;
        if (user_count == null) {
            return <div className="none"/>
        }
        else if (user_count === '1') {
            return <User
                wxinfo={this.props.wxinfo}
                userinfo={this.props.userinfo}
                registerStatementActions={this.props.registerStatementActions}
                userInfoActions={this.props.userInfoActions}
            />
        }
        else if (user_count === '0') {
            return <BindWeiXin
                wxinfo={this.props.wxinfo}
                registerStatementActions={this.props.registerStatementActions}
                wxInfoActions={this.props.wxInfoActions}
            />
        }
        else {
            return <div className="none"/>
        }
    }

    componentDidMount() {
        if (this.props.wxinfo.user_count == null) {
            if (localStorage.getItem('wxinfo')) {
                console.log('########wxinfolocalstorage########');
                console.log(localStorage.getItem('wxinfo'));
                console.log('########wxinfolocalstorage########');
                this.props.wxInfoActions.get(JSON.parse(localStorage.getItem('wxinfo')))
            } else {
                this.getWeiXinInfo.call(this)
            }
        }
    }

    getWeiXinInfo() {
        let query = getQuery(location.search);
        let url = 'http://zjw.jyzqsh.com/';
        if (!query.code) {
            getCode()
        } else {
            return fetch('/ashx/wx_openid_user_is.ashx?code=' + query.code)
                .then((res) => {
                    return res.json()
                })
                .then((json) => {
                    if(json.openid==null){
                        location.href = url
                    }
                    else{
                        localStorage.setItem('wxinfo', JSON.stringify(json))
                        this.props.wxInfoActions.get(json)
                    }
                })
        }
    }
}

CenterPage.propTypes = {}
CenterPage.defaultProps = {};

// -------------------redux react 绑定--------------------
function mapStateToProps(state) {
    return {
        userinfo: state.userinfo,
        registerstatement: state.registerstatement,
        wxinfo: state.wxinfo,
        productlist:state.productlist
    }
}

function mapDispatchToProps(dispatch) {
    return {
        registerStatementActions: bindActionCreators(registerStatementActionsFromOtherFile, dispatch),
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch),
        wxInfoActions: bindActionCreators(wxInfoActionsFromOtherFile, dispatch),
        productListActions:bindActionCreators(productListActionsFromOtherFile, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CenterPage)

function getQuery(search) {
    let query = {}
    let _query = search.slice(1).split('&')
    _query.forEach((str) => {
        let arr = str.split('=')
        query[arr[0]] = arr[1]
    })
    return query
}


function getCode() {
    let url = 'http://zjw.jyzqsh.com/';
    let urlCode = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${wxConfig.AppID}&redirect_uri=${url}&response_type=code&scope=snsapi_base&state=lk#wechat_redirect`
    window.location.href = urlCode
}