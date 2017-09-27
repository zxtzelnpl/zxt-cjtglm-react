import './MySubscribeArticlePage.less'

import React from 'react'
import {bindActionCreators} from 'redux'
import * as newsListmentActionsFromOtherFile from '../actions/newslist'
import {connect} from 'react-redux'

import SubscribeArticleList from '../components/SubscribeArticleList'
import Footer from '../components/Footer'

class MySubscribeArticlePage extends React.Component {
    constructor(props, content) {
        super(props, content)
        // this.url = '/ashx/SubscribeList.ashx'
    }

    componentDidMount() {
        console.log(this.props.match)
    }

    render() {
        return (
            <div className="subscribe-list-page">
                <div className="content">
                    <div className="head">
                        <div className="wrap">
                            <img src="http://weixin.cjtglm.com/txsecurities_pics/analysts/00/201612281745545.png"/>
                            <div>
                                <p>瑜亮</p>
                                <p>进攻K线创始人</p>
                            </div>
                        </div>

                        <a>续 费</a>
                    </div>
                    <SubscribeArticleList list={this.props.newslist}/>
                </div>
                <Footer footerIndex={2}/>
            </div>
        )
    }
}

// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
    return {
        newslist: state.newslist
    }
}

function mapDispatchToProps(dispatch) {
    return {
        newsListmentActions:bindActionCreators(newsListmentActionsFromOtherFile, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MySubscribeArticlePage)