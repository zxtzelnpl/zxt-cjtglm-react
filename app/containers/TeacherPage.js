import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as productListActionsFromOtherFile from '../actions/productlist'
import * as wxInfoActionsFromOtherFile from '../actions/wxinfo'
import * as userInfoActionsFromOtherFile from '../actions/userinfo'

import TeachaerBrief from '../components/TeacherBrief'
import ScrollStock from '../components/ScrollStock'
import DownImage from '../components/DownImage'
import Subscribe from '../components/Subscribe'
import Footer from '../components/Footer'
import Charts from '../components/Charts'
import detail from '../static/img/teacher/detail.jpg'
/*Charts*/

class TeacherPage extends  React.Component{
    constructor(props,content){
        super(props,content)
    }

    componentDidMount(){
        if(!this.teacher_data){
            let url = '/ashx/productlist.ashx'
            fetch(url,{
                method:'get'
            })
                .then((response)=>{
                    return response.json()
                })
                .then((json)=>{
                    if(json.fail){
                        return Promise.reject(json)
                    }
                    else{
                        this.props.productListActions.load(json)
                    }
                })
                // .catch((err)=>{
                //     console.log('****err****')
                //     console.log(err)
                //     console.log('****err****')
                // })
        }
        this.getUserInfo.call(this)
        document.body.scrollTop=0;
    }

    getUserInfo(){
        let user_count = this.props.wxinfo.user_count
        if(user_count!=='1'){
            return
        }
        if(this.props.userinfo.phone){
            console.log(this.props.userinfo.phone)
        }
        else{
            let openid = this.props.wxinfo.openid
            let url = `/ashx/users_id.ashx?openid=${openid}`
            fetch(url)
                .then((res)=>{return res.json()})
                .then((json)=>{
                    console.log(json)
                    if(json.length>0){
                        this.props.userInfoActions.load(json[0])
                    }
                    else{

                    }
                })
        }
    }

    render(){
        let teacher_data = this.teacher_data = this.props.productlist.get(this.props.match.params.id);
        if(teacher_data){
            return (
                <div className="teacher-page">
                    <TeachaerBrief teacher={teacher_data}/>
                    <ScrollStock stocks={teacher_data.stocks}/>
                    <Charts records = {teacher_data.records}/>
                    <DownImage pic={detail}/>
                    <Subscribe
                        product = {teacher_data}
                        userinfo = {this.props.userinfo}
                        wxinfo = {this.props.wxinfo}
                        wxInfoActions = {this.props.wxInfoActions}
                    />
                    <Footer footerIndex={1} />
                </div>
            )
        }
        else{
            return <div className="none"/>
        }
    }
}

// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
    return {
        productlist:state.productlist,
        wxinfo:state.wxinfo,
        userinfo:state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        productListActions:bindActionCreators(productListActionsFromOtherFile,dispatch),
        wxInfoActions:bindActionCreators(wxInfoActionsFromOtherFile,dispatch),
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch),
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TeacherPage)


