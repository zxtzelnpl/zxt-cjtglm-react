import React from 'react'
import { connect } from 'react-redux'

import TeachaerBrief from '../components/TeacherBrief'
import DownImage from '../components/DownImage'
import Subscribe from '../components/Subscribe'
/*Charts*/
import Charts from '../components/Charts'



class TeacherPage extends  React.Component{
    constructor(props,content){
        super(props,content)
    }

    componentDidMount(){

    }

    render(){
        let teacher_data = this.props.productlist.get(this.props.match.params.id);
        return (
            <div className="teacher-page">
                <TeachaerBrief teacher={teacher_data}/>
                <DownImage pic={teacher_data.img1}/>
                <DownImage pic={teacher_data.img2}/>
                <DownImage pic={teacher_data.img_result}/>
                <Charts records = {teacher_data.records}/>
                <DownImage pic={teacher_data.img3}/>
                <Subscribe productID = {this.props.match.params.id}/>
            </div>
        )
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

    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TeacherPage)