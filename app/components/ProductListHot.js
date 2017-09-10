import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import pic from '../static/img/product/lvxiangzhao.jpg'
import pic_s from '../static/img/product/lvxiangzhao-s.png'
import './ProductListHot.less'

const datas = [
    {
        id: '10000029',
        name: '吕向召',
        style: '善于挖掘牛股亮点',
        title: '五日概率牛人',
        record: [
            ['三日最大涨幅', '17.04%'],
            ['次日上涨概率', '90%'],
        ],
        pic: pic,
        pic_s: pic_s,
        stock:{
            name:'汉王科技',
            time:'2017.08.16',
            word:'阶段涨幅',
            rise:'71.40%'
        }
    },
    {
        id: '10000030',
        name: '吴伟伟',
        style: '善于挖掘牛股亮点',
        title: '五日概率牛人',
        record: [
            ['三日最大涨幅', '17.04%'],
            ['次日上涨概率', '90%'],
        ],
        pic: pic,
        pic_s: pic_s,
        stock:{
            name:'汉王科技',
            time:'2017.08.16',
            word:'阶段涨幅',
            rise:'71.40%'
        }
    },
    {
        id: '10000031',
        name: '马鑫',
        style: '善于挖掘牛股亮点',
        title: '五日概率牛人',
        record: [
            ['三日最大涨幅', '17.04%'],
            ['次日上涨概率', '90%'],
        ],
        pic: pic,
        pic_s: pic_s,
        stock:{
            name:'汉王科技',
            time:'2017.08.16',
            word:'阶段涨幅',
            rise:'71.40%'
        }
    }
]

class ScrollText extends React.Component{
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    render() {
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
        let {id, name, style, title, record, pic, pic_s,stock} = this.props.data
        return (
            <li>
                <a href={id} className="box">
                    <div className="teacher-img"><img src={pic}/></div>
                    <div className="teacher-data">
                        <div className="up">
                            <span className="up1">
                                <span>
                                   {name}
                                </span>
                            </span>
                            <span className="up2">{style}</span>
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
                                <span>{record[0][0]}</span>
                                <span>{record[0][1]}</span>
                            </div>
                        </div>
                    </div>
                </a>
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
        let productHtml = datas.map(data => (
            <Product key={data.id} data={data}/>
        ))
        return (

            <div className="product-hot">
                <div className="title">
                    <span className="word">明星牛人</span>
                    <ScrollText />
                </div>
                <div className="list">
                    <ul>
                        {productHtml}
                    </ul>
                </div>
            </div>
        )

    }
}

export default ProductListHot