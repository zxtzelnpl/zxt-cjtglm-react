import './User.less'

import React from 'react'
import {Link} from 'react-router-dom'
import InfoBox from '../components/InfoBox'
import Footer from '../components/Footer'

class UserCenterPage extends React.Component{
    constructor(props,content){
        super(props,content)
    }

    showRegisterStatement(){
        this.props.registerStatementActions.change({show:true})
    }

    render(){
        let {img,nike_name,name,phone,account,ID} = this.props.userinfo
        let customer = this.customer
        return(
            <div className="usercenter-page">
                <section className="head">
                    <img src={img} alt=""/>
                    <p>{nike_name}</p>
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
                        <Link to="/mysubscirbe/1">
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
                        <Link to="/protocol">
                            <span className="btn fa fa-angle-right" />
                        </Link>
                    </div>
                    <div className="link-box">
                        联系我们<span className="single-word">：</span>
                        {customer}
                        <a href={"tel:"+customer}>
                            <span className="btn fa fa-angle-right" />
                        </a>
                    </div>
                </section>
                <Footer footerIndex={2}/>
            </div>
        )
    }
}

export default UserCenterPage