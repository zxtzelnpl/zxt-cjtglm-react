import './SubscribeList.less'

import React from 'react'

import {Link} from 'react-router-dom'

class SubscribeList extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        let list = this.props.subscribelist;
        let products = this.props.productlist;
        let htmlArr = list.map((subscribe) => {
            let product_id = subscribe.produce_id
            let product = products.get(String(product_id))
            let overplus_produces = subscribe.overplus_produces
            let {pic,name,special} = product
            return (
                <Link  className="box" to={"/mysubscribearticle/"+product_id} key={subscribe.id}>
                    <div className="wrap">
                        <div className="photo">
                            <img src={pic}/>
                        </div>
                        <div className="details">
                            <p className="name">
                                  <span>
                                      {name}
                                      <span className="rest">
                                        ( 剩余{overplus_produces}期 )
                                      </span>
                                  </span>
                                <span className="check">查看详情</span>
                            </p>
                            <p className="style">
                                <span>操作风格</span>
                                <span>
                                      {special}
                                </span>
                            </p>
                        </div>
                    </div>
                </Link>
            )
        })
        return (
            <div className="subscribe-list">
                {htmlArr}
            </div>
        )
    }
}

export default SubscribeList