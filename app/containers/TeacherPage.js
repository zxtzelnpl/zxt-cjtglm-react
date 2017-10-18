import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
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
import {getQuery, getCode} from "../static/js/tools";

/*Charts*/

class TeacherPage extends React.Component {
    constructor(props, content) {
        super(props, content)
    }

    render() {
        console.log('render')
        let teacher_data = this.teacher_data = this.props.productlist.get(this.props.match.params.id);
        if (teacher_data) {
            return (
                <div className="teacher-page">
                    <TeachaerBrief teacher={teacher_data}/>
                    <ScrollStock stocks={teacher_data.stocks}/>
                    <Charts records={teacher_data.records}/>
                    <DownImage pic={detail}/>
                    <Subscribe
                        product={teacher_data}
                        userinfo={this.props.userinfo}
                        wxinfo={this.props.wxinfo}
                        wxInfoActions={this.props.wxInfoActions}
                    />
                    <Footer footerIndex={1}/>
                </div>
            )
        }
        else {
            return <div className="none"/>
        }
    }

    componentDidMount() {
        let wxInfoPromise = this.getWeiXinInfo()

        let productsPromise = this.getProducts()

        let userInfoPromise = wxInfoPromise
            .then((flag) => {
                return new Promise((resolve, reject) => {
                    if(this.props.userinfo.phone){
                        resolve({hasLoad:true})
                    }
                    else{
                        if (flag) {
                            let openid
                            if(flag.hasLoad){
                                openid = this.props.wxinfo.openid
                            }
                            else{
                                openid = flag.openid;
                            }

                            let url = `/ashx/users_id.ashx?openid=${openid}`
                            fetch(url)
                                .then((res) => {
                                    return res.json()
                                })
                                .then((json) => {
                                    if (json.length > 0) {
                                        resolve(json[0])
                                    }
                                    else {
                                        resolve(false)
                                    }
                                })
                                .catch(() => {
                                    resolve(false)
                                })
                        }
                        else {
                            resolve(false)
                        }
                    }
                })
            })


        Promise.all([wxInfoPromise,productsPromise, userInfoPromise])
            .then(([wxInfo,products, userInfo]) => {
                console.log(wxInfo)
                console.log(products)
                console.log( userInfo)
                if(wxInfo&&!wxInfo.hasLoad){
                    console.log('wxInfo')
                    this.props.wxInfoActions.get(wxInfo)
                }
                if (products&&!products.hasLoad) {
                    console.log('products')
                    this.props.productListActions.load(products)
                }
                if(userInfo&&!userInfo.hasLoad){
                    console.log('userInfo')
                    this.props.userInfoActions.load(userInfo)
                }
                document.body.scrollTop = 0;
            })
    }

    getWeiXinInfo() {
        return new Promise((resolve, reject) => {
            if(this.props.wxinfo.openid){
                resolve({hasLoad:true})
            }
            else {
                let query = getQuery(location.search);
                if (!query.code) {
                    getCode()
                } else {
                    fetch('/ashx/wx_openid_user_is.ashx?code=' + query.code)
                        .then((res) => {
                            return res.json()
                        })
                        .then((json) => {
                            if (json.openid == null) {
                                alert('关注微信公众号《君银牛人堂》注册后可进行购买')
                                resolve(false)
                            }
                            else {
                                resolve(json)
                            }
                        })
                        .catch((err)=>{
                            alert('关注微信公众号《君银牛人堂》注册后，可进行购买')
                            resolve(false)
                        })
                }
            }
        })
    }

    getProducts() {
        return new Promise((resolve, reject) => {
            if (this.props.productlist.size === 0) {
                return fetch('/ashx/productlist.ashx', {
                    method: 'get'
                })
                    .then((response) => {
                        return response.json()
                    })
                    .then((productlist) => {
                        resolve(productlist)
                    })
            }
            else {
                resolve({hasLoad:true})
            }
        })
    }
}

// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
    return {
        productlist: state.productlist,
        wxinfo: state.wxinfo,
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        productListActions: bindActionCreators(productListActionsFromOtherFile, dispatch),
        wxInfoActions: bindActionCreators(wxInfoActionsFromOtherFile, dispatch),
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TeacherPage)


