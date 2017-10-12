import './WeiXin0.less'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import React from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import * as newsListmentActionsFromOtherFile from '../actions/newslist'
import Footer from '../components/Footer'

class WeiXin0 extends React.Component {
    constructor(props,content){
        super(props,content)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state={
            time:null,
            stocks:null
        }
    }

    componentDidMount(){
        let article_id = this.props.match.params.id
        // let article_id = 3114
        let url =`/ashx/Article_Selce.ashx?article_id=${article_id}`
        window.fetch(url)
            .then((res)=>{
            return res.json()
            })
            .then((json)=>{
                let stocks = null
                let _stocks = json[0].strategy.split('---')
                let time = json[0].create_time.replace(/\//ig,'\-')
                if(_stocks.length>0){
                    stocks = _stocks.map((stock)=>{
                        let arr = stock.split(/[*]|[+]|zjw/gi)
                        return arr
                    })
                }
                this.setState({
                    time:time,
                    stocks:stocks
                })


            })
    }

    render(){
        let stocks = this.state.stocks;
        console.log(stocks)
        let htmlStocks;
        if(stocks!=null){
            htmlStocks = stocks.map((stock,index)=>{
                return (
                    <div className="box" key={index}>
                        <div className="up">
                            <span>{stock[0]}</span><span>{stock[1]}</span>
                        </div>
                        <div className="down">
                            <span className="label">看好理由：</span>
                            <span className="text">{stock[2]}</span>
                        </div>
                    </div>
                )
            })
        }
        else{
            htmlStocks = <div className="none"/>
        }
        return (
            <div className="wei-xin-0">
                <div className="wrap">
                    <div className="title">
                        <div className="wrap">
                            <div className="left">
                                选股策略
                            </div>
                            <div className="right">
                                {this.state.time}
                            </div>
                        </div>
                        <div className="leftD" />
                        <div className="rightD" />
                    </div>
                    <div className="board">
                        {htmlStocks}
                    </div>
                </div>
                <Footer footerIndex={0}/>
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
)(WeiXin0)