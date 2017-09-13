import './ArticleListPage.less'

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
        if(this.props.articlelist.size<6){
            fetch('/api/articlelist',{
                method:'get'
            })
                .then((response)=>{
                    return response.json()
                })
                .then((json)=>{
                    this.props.articleListmentActions.first(json)
                })
                .catch((err)=>{
                    console.log('****err****')
                    console.log(err)
                    console.log('****err****')
                })
        }
    }

    load(){
        fetch('/api/articlelist/load',{
            method:'get'
        })
            .then((response)=>{
                return response.json()
            })
            .then((json)=>{
                this.props.articleListmentActions.load(json)
            })
            .catch((err)=>{
                console.log('****err****')
                console.log(err)
                console.log('****err****')
            })
    }

    render(){
        if(this.props.articlelist.size<6){
            return (
                <div className="none" />
            )
        }
        else{
            let url = this.props.articlelist.get('img').url
            let list = [];
            this.props.articlelist.forEach((article)=>{
                if(article.id!=='img'){
                    list.push(article)
                }
            })
            console.log('*******url*******')
            console.log(url)
            console.log('*******url*******')
            return (
                <div className="article-list-page">
                    <div className="header">
                        <img src={url}/>
                    </div>
                    <div className="content">
                        <ArticleList articlelist={list}/>
                        <span onClick={this.load.bind(this)}>加载</span>
                    </div>
                    <Footer footerIndex={0}/>
                </div>
            )

        }
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