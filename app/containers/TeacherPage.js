import React from 'react'
import { connect } from 'react-redux'

import TeachaerBrief from '../components/TeacherBrief'
import DownImage from '../components/DownImage'
import Subscribe from '../components/Subscribe'
/*Charts*/
import AverageRise from '../components/Charts/AverageRise'
import MaxRise from '../components/Charts/MaxRise'
import RiseNum from '../components/Charts/RiseNum'
import RiseProbability from '../components/Charts/RiseProbability'



class TeacherPage extends  React.Component{
    constructor(props,content){
        super(props,content)
    }

    componentDidMount(){
        console.log(this.props.productlist)
        console.log(this.props.match.params.id)
    }

    render(){
        let teacher_data = this.props.productlist.get(this.props.match.params.id);
        console.log(teacher_data)
        return (
            <div className="teacher-page">
                <TeachaerBrief teacher={teacher_data}/>
                <DownImage pic={teacher_data.img1}/>
                <DownImage pic={teacher_data.img2}/>
                <DownImage pic={teacher_data.img_result}/>
                <AverageRise teacher={teacher_data}/>
                <MaxRise />
                <RiseNum />
                <RiseProbability />
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