import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Link} from 'react-router-dom'

import {formatDate} from '../static/js/tools'

import './ProductList.less'

class Product extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    componentDidMount() {
    }

    render() {
        let {id, name, special, records, pic,lables} = this.props.data
        return (
            <li>
                <Link to={"/teacher/"+id} className="box">
                    <div className="teacher-img">
                        <img src={pic}/>
                        <p className="name">{name}</p>
                        <p className="honor">{lables[2]}</p>
                    </div>
                    <div className="teacher-data">
                        <div className="up">
                            <span className="up1">操作风格</span>
                            <span className="up2">{special}</span>
                            <span className="link">查看详情 ></span>
                        </div>
                        <div className="down">
                            <div className="down1">
                                <span>{records[0].title}</span>
                                <span>{formatDate(records[0])}</span>
                            </div>
                            <div className="down3">
                                <span>{records[1].title}</span>
                                <span>{formatDate(records[1])}</span>
                            </div>
                        </div>
                    </div>
                </Link>
            </li>

        )
    }

}


class ProductList extends React.Component {
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

                <div className="product-normal">
                    <div className="title">
                    <span className="word">
                        选股牛人
                    </span>
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
                <div className="none" />
            )
        }


    }
}

export default ProductList