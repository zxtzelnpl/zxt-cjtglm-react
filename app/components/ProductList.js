import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import pic from '../static/img/product/lvxiangzhao.jpg'
import pic_s from '../static/img/product/lvxiangzhao-s.png'
import './ProductList.less'

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
        pic_s: pic_s
    },
    {
        id: '10000030',
        name: '吕向召',
        style: '善于挖掘牛股亮点',
        title: '五日概率牛人',
        record: [
            ['三日最大涨幅', '17.04%'],
            ['次日上涨概率', '90%'],
        ],
        pic: pic,
        pic_s: pic_s
    },
    {
        id: '10000031',
        name: '吕向召',
        style: '善于挖掘牛股亮点',
        title: '五日概率牛人',
        record: [
            ['三日最大涨幅', '17.04%'],
            ['次日上涨概率', '90%'],
        ],
        pic: pic,
        pic_s: pic_s
    }
]

class Product extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    componentDidMount() {
    }

    render() {
        let {id, name, style, title, record, pic, pic_s} = this.props.data
        return (
            <a className="niurenbox" href={id}>
                <div className="left hasHonor">
                    <img src={pic_s}/>
                    <p className="name">{name}</p>
                    <p className="honor">{title}</p>
                </div>
                <div className="right">
                    <div className="up">
                        <span className="up1">操作风格</span>
                        <span className="up2">{style}</span>
                        <span className="link">查看详情 ></span>
                    </div>
                    <div className="down">
                        <div className="down1 crpjzf">
                            <span>{record[0][0]}</span>
                            <span>{record[0][1]}</span>
                        </div>
                        <div className="down3 ggzdzf">
                            <span>{record[1][0]}</span>
                            <span>{record[1][1]}</span>
                        </div>
                    </div>
                </div>
            </a>
        )
    }

}


class ProductList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        let productHtml = datas.map(data => (
            <Product key={data.id} data={data}/>
        ))
        return (

            <div>
                <div className="titleZxt">
                    选股牛人
                </div>
                <div className="niurenboxes">
                    {productHtml}
                </div>
            </div>
        )

    }
}

export default ProductList