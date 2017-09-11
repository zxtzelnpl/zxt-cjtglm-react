import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './Subscribe.less'

class Subscribe extends React.Component{
    constructor(props,context){
        super(props,context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    getSubscribe(){
        console.log(this.props.productID)
    }

    render(){
        return (
            <a className="subscribe" href="javascript:void(0);" onClick={this.getSubscribe.bind(this)}>
                <p>￥39.00</p>
                <p>订阅</p>
            </a>
        )
    }
}

export default Subscribe