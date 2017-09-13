import './ArticleListPage.less'

import header_img from '../static/img/article/header.png'

import React from 'react'
import { bindActionCreators } from 'redux'
import * as articleListmentActionsFromOtherFile from '../actions/articlelist'
import { connect } from 'react-redux'

import ArticleList from '../components/ArticleList'
import Footer from '../components/Footer'

class ArticleListPage extends  React.Component{
    constructor(props,content){
        super(props,content)
    }

    componentDidMount(){
        fetch('/api/articlelist',{
            method:'get'
        })
            .then((response)=>{
                return response.json()
            })
            .then((json)=>{
                console.log('****json****')
                console.log(json)
                this.props.articleListmentActions.load(json)
                console.log('****json****')
            })
            .catch((err)=>{
                console.log('****err****')
                console.log(err)
                console.log('****err****')
            })
    }

    load(){

        fetch('/api/load',{
            method:'get'
        })
            .then((response)=>{
                return response.json()
            })
            .then((json)=>{
                console.log('****json****')
                console.log(json)
                this.props.articleListmentActions.load(json)
                console.log('****json****')
            })
            .catch((err)=>{
                console.log('****err****')
                console.log(err)
                console.log('****err****')
            })
    }

    render(){
        return (
            <div className="article-list-page">
                <div className="header">
                    <img src={header_img}/>
                </div>
                <div className="content">
                    <ArticleList articlelist={this.props.articlelist}/>
                    <span onClick={this.load.bind(this)}>加载</span>
                </div>
                <Footer footerIndex={0}/>
            </div>
        )
    }
}

// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
    return {
        articlelist:state.articlelist
    }
}

function mapDispatchToProps(dispatch) {
    return {
        articleListmentActions:bindActionCreators(articleListmentActionsFromOtherFile, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ArticleListPage)