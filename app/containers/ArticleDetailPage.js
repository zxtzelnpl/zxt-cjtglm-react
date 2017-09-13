import './ArticleDetailPage.less'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import React from 'react'
import { bindActionCreators } from 'redux'
import * as articleListmentActionsFromOtherFile from '../actions/articlelist'
import { connect } from 'react-redux'

import Footer from '../components/Footer'

class ArticleDetailPage extends React.Component{
    constructor(props,context){
        super(props,context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    componentDidMount(){
        if(!this.article_data){
            let url = '/api/article/'+this.props.match.params.id
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
                        this.props.articleListmentActions.add(json)
                    }
                })
                .catch((err)=>{
                    console.log('****err****')
                    console.log(err)
                    console.log('****err****')
                    window.location = '/notfound/'+err.reason
                })
        }
    }

    render(){
        let article_data =this.article_data =  this.props.articlelist.get(this.props.match.params.id);
        if(article_data){
            return (
                <div className="article-detial-page">
                    <h4 className="title">{article_data.description}</h4>
                    <span className="sub">{article_data.createTime}</span>
                    <div className="content">
                        这里面是文章的主体
                    </div>
                    <Footer footerIndex={0}/>
                </div>
            )
        }
        else{
            return(
                <div className="none" />
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
)(ArticleDetailPage)