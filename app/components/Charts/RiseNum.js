import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './Charts.less'
import echarts from '../../static/js/echarts.min'

class RiseNum extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    componentDidMount() {
        this.showChart(this.main,this.props.record)
    }

    showChart(main,record){
        let {title,data} = record
        this.charts = echarts.init(main)
        let option = {
            title: {
                text: title,
                x: 'center'
            },
            tooltip: {
                show: false
            },
            legend: {
                show: false
            },
            grid: {
                top: 100,
                bottom: 20
            },
            series: [
                {
                    name: title,
                    type: 'pie',
                    radius: '50%',
                    center: ['50%', '60%'],
                    data: [
                        {
                            value: data[0],
                            name: '上涨个数'
                        },
                        {
                            value: data[1],
                            name: '下跌个数'
                        }
                    ],
                    color: ['#FF7A78', '#91C7AF'],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },
                    labelLine: {
                        normal: {
                            length: 15,
                            length2: 10
                        }

                    },
                    silent: true
                }
            ]
        };
        this.charts.setOption(option);
    }

    render() {
        let record = this.props.record;
        let data_len = record.data[0]+record.data[1]
        let date_len = parseInt(data_len/2)
        let word = record.title.slice(0,1)
        return (
            <div className="rise-num charts">
                <div className="main" ref={(main) => {this.main = main}} />
                <div className="text">
                    <p>数据统计：</p>
                    <p>1、统计阶段：最近<span>{date_len}</span>个交易日，共计<span>{data_len}</span>只标的。</p>
                    <p>2、统计结果：{word}日上涨个数有<span className="red">{record.data[0]}</span>个，下跌个数<span className="green">{record.data[1]}</span>个 ；</p>
                </div>
            </div>
        )
    }
}

export default RiseNum