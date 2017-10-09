import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as productListActionsFromOtherFile from '../actions/productlist'

import TeachaerBrief from '../components/TeacherBrief'
import ScrollStock from '../components/ScrollStock'
import DownImage from '../components/DownImage'
import Subscribe from '../components/Subscribe'
import Footer from '../components/Footer'
import teacher_data_format from '../static/js/teacher_data_format'
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
                        teacher_data_format(json)
                        this.props.productListActions.load(json)
                    }
                })
                .catch((err)=>{
                    console.log('****err****')
                    console.log(err)
                    console.log('****err****')
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
                    <Subscribe productID = {this.props.match.params.id}/>
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
        productlist:state.productlist
    }
}

function mapDispatchToProps(dispatch) {
    return {
        productListActions:bindActionCreators(productListActionsFromOtherFile,dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TeacherPage)