import React from 'react'
import { connect } from 'react-redux'

class Protocol extends React.Component{
    constructor(props,context){
        super(props,context)
    }

    render(){
        return (
            <div>

            </div>
        )
    }
}

// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Protocol)