import img from '../static/img/user/user.png'

import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as registerStatementActionsFromOtherFile from '../actions/registerstatement'
import * as userInfoActionsFromOtherFile from '../actions/userinfo'
import UserCenterPage from '../components/User' //用户中心页面
import BindWeiXin from '../components/BindWeiXin' //注册页面

class CenterPage extends React.Component{
    constructor(props,content){
        super(props,content)
        this.url='/ashx/users_id.ashx'+'?openid=oijVfszBRm_nxYzNH6RAchSKXFxE'
    }

    componentDidMount(){
        if(!this.props.userinfo){
            fetch( this.url,{
                method:'get'
            })
                .then((response)=>{
                    return response.json()
                })
                .then((json)=>{
                    console.log('****json****')
                    console.log(json)
                    this.props.userInfoActions.load(json[0])
                    console.log('****json****')
                })
                .catch((err)=>{
                    console.log('****err****')
                    console.log(err)
                    console.log('****err****')
                })
        }
    }

    render(){
        if(this.props.userinfo){
            return <UserCenterPage
                userinfo = {this.props.userinfo}
                registerStatementActions = {this.props.registerStatementActions}
            />
        }
        else if(this.props.userinfo){
            return <BindWeiXin
                registerStatementActions = {this.props.registerStatementActions}
            />
        }
        else{
            return <div className="none" />
        }
    }
}

CenterPage.propTypes = {

}
CenterPage.defaultProps = {

};

// -------------------redux react 绑定--------------------
function mapStateToProps(state) {
    return {
        userinfo:state.userinfo,
        registerstatement: state.registerstatement
    }
}

function mapDispatchToProps(dispatch) {
    return {
        registerStatementActions:bindActionCreators(registerStatementActionsFromOtherFile, dispatch),
        userInfoActions:bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CenterPage)