import './UserCenterPage.less'


import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as registerStatementActionsFromOtherFile from '../actions/registerstatement'
import InfoBox from '../components/InfoBox'
import {Link} from 'react-router-dom'

class UserCenterPage extends React.Component{
    constructor(props,content){
        super(props,content)
    }

    showRegisterStatement(){
        this.props.registerStatementActions.change({show:true})
    }

    render(){
        console.log(this.props.userinfo)
        let {img,nickname,name,phone,account,ID,customer} = this.props.userinfo
        return(
            <div className="usercenter-page">
                <section className="head">
                    <img src={img} alt=""/>
                    <p>{nickname}</p>
                </section>
                <section>
                    <InfoBox data={{
                        inputName:'name',
                        word:'姓名',
                        content:name,
                        placeholder:'请输入您新的姓名',
                        canChange:true
                    }}/>
                    <InfoBox data={{
                        inputName:'phone',
                        word:'手机',
                        content:phone,
                        placeholder:'请输入您新的手机',
                        canChange:false
                    }}/>
                </section>
                <section>
                    <InfoBox data={{
                        inputName:'name',
                        word:'身份证号',
                        content:ID,
                        placeholder:'请输入您新的身份证',
                        canChange:true
                    }}/>
                    <InfoBox data={{
                        inputName:'name',
                        word:'用户账户',
                        content:account,
                        placeholder:'请输入您新的账户',
                        canChange:true
                    }}/>
                </section>
                <section>
                    <div className="link-box">
                        我的订阅
                        <Link to="/product">
                            <span className="btn fa fa-angle-right" />
                        </Link>
                    </div>
                    <div className="link-box">
                        我的订单
                        <Link to="/product">
                            <span className="btn fa fa-angle-right" />
                        </Link>
                    </div>
                    <div className="link-box">
                        注册申明
                        <span
                            className="btn fa fa-angle-right"
                            onClick={this.showRegisterStatement.bind(this)}
                        />
                    </div>
                    <div className="link-box">
                        协<span className="hidden">空空</span>议
                        <Link to="/product">
                            <span className="btn fa fa-angle-right" />
                        </Link>
                    </div>
                    <div className="link-box">
                        联系我们<span className="single-word">：</span>
                        {customer}
                        <Link to={"tel:"+customer}>
                            <span className="btn fa fa-angle-right" />
                        </Link>
                    </div>
                </section>
            </div>
        )
    }
}

// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
    return {
        userinfo:state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        registerStatementActions:bindActionCreators(registerStatementActionsFromOtherFile, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserCenterPage)