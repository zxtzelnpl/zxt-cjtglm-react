import './ArticleDetailPage.less'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import React from 'react'
import { connect } from 'react-redux'

import Footer from '../components/Footer'

class ArticleDetailPage extends React.Component{
    constructor(props,context){
        super(props,context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }
    render(){
        let article_data = this.props.articlelist.get(this.props.match.params.id);
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
}

// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
    return {
        articlelist:state.articlelist
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ArticleDetailPage)