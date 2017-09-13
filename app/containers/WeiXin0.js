import './WeiXin0.less'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import React from 'react'
import { connect } from 'react-redux'
import Footer from '../components/Footer'

class WeiXin0 extends React.Component {
    constructor(props,content){
        super(props,content)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    render(){
        return (
            <div className="wei-xin-0">
                <div className="wrap">
                    <div className="title">
                        <div className="wrap">
                            <div className="left">
                                选股策略
                            </div>
                            <div className="right">
                                2017-09-13 14:26
                            </div>
                        </div>
                        <div className="leftD" />
                        <div className="rightD" />
                    </div>
                    <div className="board">
                        <div className="box">
                            <div className="up">
                                <span>603385</span><span>惠达卫浴</span>
                            </div>
                            <div className="down">
                                <span className="label">看好理由：</span>
                                <span className="text">位列卫生陶瓷四大龙头，中报业绩超预期</span>
                            </div>
                        </div>
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
        userinfo:state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WeiXin0)