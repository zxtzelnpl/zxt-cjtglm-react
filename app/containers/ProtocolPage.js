import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userInfoActionsFromOtherFile from '../actions/userinfo'
import Protocol from  '../components/Protocol'
import ProtocolDisabled from  '../components/ProtocolDisabled'
import {getQuery} from "../static/js/tools";

import questions from '../constants/questions'

class ProtocolPage extends React.Component{
    constructor(props,context){
        super(props,context)
        console.log(this.props)
        this.article_id = getQuery(this.props.location.search).article_id;
        console.log(this.article_id)
        console.log(this.props.history)
        console.log(this.props.history)

    }

    render(){
        console.log(this.props.score)
        if(this.props.score){
            return <ProtocolDisabled
                questions = {questions}
                score = {this.props.score}
            />
        }
        else{
            return <Protocol
                questions = {questions}
                userInfomentActions = {this.props.userInfomentActions}
                openid = {this.props.openid}
                article_id = {this.article_id}
            />
        }
    }
}



// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
    return {
        score:state.userinfo.score,
        openid:state.wxinfo.openid
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInfomentActions:bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProtocolPage)