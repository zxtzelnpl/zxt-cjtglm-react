import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Link} from 'react-router-dom'

import {formatDate} from '../static/js/tools'

import './ProductListHot.less'

class ScrollText extends React.Component{
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    render() {
        let datas = this.props.list
        let linkData = datas[0]
        let textsHtml = datas.map((data)=>{
            let {stockName,time,word,rise} = data.stock
            return (
                <span key={data.name}>{time.slice(5)}《选股牛人-<b>{data.name}</b>》推出<b>{stockName}</b>{word}<b>{rise}</b></span>
            )
        })
        let textLinkHtml = (<span key="last">{linkData.stock.time.slice(5)}《选股牛人-<b>{linkData.name}</b>》推出<b>{linkData.stock.name}</b>{linkData.stock.word}<b>{linkData.stock.rise}</b></span>)

        return (
            <div className="scroll-text">
                <div className="wrap">
                    {textsHtml}
                    {textLinkHtml}
                </div>
            </div>
        )
    }
}


class Product extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        let {id, name, special, records, pic,stock} = this.props.data
        return (
            <li>
                <Link to={"/teacher/"+id} className="box">
                    <div className="teacher-img"><img src={pic}/></div>
                    <div className="teacher-data">
                        <div className="up">
                            <span className="up1">
                                <span>
                                   {name}
                                </span>
                            </span>
                            <span className="up2">{special}</span>
                            <span className="link">查看详情 &gt;</span>
                        </div>
                        <div className="down">
                            <div className="down1">
                                <span className="stock">{stock.name}</span>
                                <span className="time">{stock.time}</span>
                                <span className="words">{stock.word}</span>
                                <span className="result">{stock.rise}</span>
                            </div>
                            <div className="down3">
                                <span>{records[0].title}</span>
                                <span>{formatDate(records[0])}</span>
                            </div>
                        </div>
                    </div>
                </Link>
            </li>
        )
    }

}


class ProductListHot extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        if(this.props.list.length>0){
            let productHtml = this.props.list.map(data => (
                <Product key={data.id} data={data}/>
            ))
            return (

                <div className="product-hot">
                    <div className="title">
                        <span className="word">明星牛人</span>
                        <ScrollText list = {this.props.list}/>
                    </div>
                    <div className="list">
                        <ul>
                            {productHtml}
                        </ul>
                    </div>
                </div>
            )
        }
        else{
            return (
                <div className="none"/>
            )
        }


    }
}

export default ProductListHot