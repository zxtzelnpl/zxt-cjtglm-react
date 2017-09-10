import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './AverageRise.less'
import echarts from '../../static/js/echarts.min'


let record = {
    title: '五日平均涨幅',
    dates: ['12月1日', '12月1日', '12月1日', '12月1日', '12月1日', '12月1日', '12月1日', '12月1日', '12月1日', '12月1日'],
    datas: ['7.71', '15.64', '12.66', '9.12', '14.05', '19.67', '7.73', '5.41', '10.61', '14.16']
}

class AverageRise extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            index: 0
        }
    }

    componentDidMount(){
        console.log(echarts)
    }

    render() {
        return (
            <div className="AverageRise">
                <div className="main" rel={(rel)=>{this.main=rel}}>
                    <canvas/>
                </div>
                <div className="text">
                    <p>1、统计阶段：最近<span>10</span>个交易日，共计<span>20</span>只标的。</p>
                    <p>2、统计结果：统计周期内，五日平均最低涨幅为<span>5.41%</span>，五日平均最高涨幅为<span>19.67%</span>,五日平均涨幅为<span>11.67%</span>。
                    </p>
                </div>
            </div>
        )
    }
}

export default AverageRise