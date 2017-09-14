import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as productListActionsFromOtherFile from '../actions/productlist'

import TeachaerBrief from '../components/TeacherBrief'
import DownImage from '../components/DownImage'
import Subscribe from '../components/Subscribe'
import Footer from '../components/Footer'
/*Charts*/
import Charts from '../components/Charts'



class TeacherPage extends  React.Component{
    constructor(props,content){
        super(props,content)
    }

    componentDidMount(){
        if(!this.teacher_data){
            let url = '/api/product/'+this.props.match.params.id
            fetch(url,{
                method:'get'
            })
                .then((response)=>{
                    return response.json()
                })
                .then((json)=>{
                    console.log('****json****')
                    if(json.fail){
                        return Promise.reject(json)
                    }
                    else{
                        this.props.productListActions.add(json)
                    }
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
        let teacher_data = this.teacher_data = this.props.productlist.get(this.props.match.params.id);

        if(teacher_data){
            return (
                <div className="teacher-page">
                    <TeachaerBrief teacher={teacher_data}/>
                    <DownImage pic={teacher_data.img1}/>
                    <DownImage pic={teacher_data.img2}/>
                    <DownImage pic={teacher_data.img_result}/>
                    <Charts records = {teacher_data.records}/>
                    <DownImage pic={teacher_data.img3}/>
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