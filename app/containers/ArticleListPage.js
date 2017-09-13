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

    }

    load(){
        console.log('The loaddddd')
        this.props.articleListmentActions.load([
            {
                id:'5',
                description: '大幅下挫时仍是短期加仓良机',
                createTime: '2017-09-13 09:57'
            },
            {
                id:'6',
                description: '新能源板块为什么难能成为领涨旗帜?',
                createTime: '2017-09-13 09:57'
            },
            {
                id:'7',
                description: '逻辑分享——“取缔燃油车”谁最受益',
                createTime: '2017-09-13 09:57'
            },
            {
                id:'8',
                description: '当下市场机会大于风险，投资者应保持积极参与',
                createTime: '2017-09-13 09:57'
            },
            {
                id:'9',
                description: '操作上控制仓位，不宜追高',
                createTime: '2017-09-13 09:57'
            }
        ])
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