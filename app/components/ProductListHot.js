import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Link} from 'react-router-dom'

import {formatDate} from '../static/js/tools'

import './ProductListHot.less'


class Product extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        let {id, name, special, records,half_body_img,stock} = this.props.data
        return (
            <li>
                <Link to={"/teacher/"+id} className="box">
                    <div className="teacher-img"><img src={half_body_img}/></div>
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