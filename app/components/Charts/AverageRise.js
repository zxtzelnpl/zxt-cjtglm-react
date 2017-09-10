import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {average} from '../../static/js/tools'

import './Charts.less'
import echarts from '../../static/js/echarts.min'


let record = {
    title: '五日平均涨幅',
    dates: ['12月1日', '12月1日', '12月1日', '12月1日', '12月1日', '12月1日', '12月1日', '12月1日', '12月1日', '12月1日'],
    datas1: ['7.71', '15.64', '12.66', '9.12', '14.05', '19.67', '7.73', '5.41', '10.61', '14.16'],
    datas2: ['7.71', '15.64', '12.66', '9.12', '14.05', '19.67', '7.73', '5.41', '10.61', '14.16']
}

class AverageRise extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state={
            data : {
                title:'图标',
                date_len : '***',
                data_len : '***',
                data_max : '***',
                data_min : '***',
                data_aver : '***'
            }
        }
    }

    componentDidMount(){
        this.setState({data:{
            title:record.title,
            dates:record.dates,
            datas : [].concat(record.datas1,record.datas2),
            date_len : record.dates.length,
            data_len : record.datas1.length+record.datas1.length,
            data_max : Math.max(...[].concat(record.datas1,record.datas2)),
            data_min : Math.min(...[].concat(record.datas1,record.datas2)),
            data_aver : average([].concat(record.datas1,record.datas2))
        }})

    }

    componentDidUpdate(){
        this.showChart()
    }

    showChart(){
        this.charts = echarts.init(this.main)
        let option = {
            title: {
                text: '五日平均涨幅',
                x: 'center'
            },
            grid: {
                top: 80,
                bottom: 40
            },
            tooltip: {
                show: false
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: this.state.data.dates,
                axisLabel: {
                    show: false
                },
                axisTick: {
                    show: false
                }
            },
            yAxis: {
                type: 'value',
                maxMin: 'auto',
                minMin: 'auto',
                axisLabel: {
                    formatter: '{value}%'
                }
            },
            series: [
                {
                    type: 'line',
                    layout: 'none',
                    coordinateSystem: 'cartesian2d',
                    symbolSize: 5,
                    label: {
                        normal: {
                            show: true,
                            formatter: function (data) {
                                return data.value + '%'
                            }
                        }
                    },
                    edgeSymbol: ['circle', 'arrow'],
                    edgeSymbolSize: [2, 4],
                    data: record.datas1,
                    lineStyle: {
                        normal: {
                            color: '#2f4554'
                        }
                    },
                    silent: true
                }
            ]
        };
        this.charts.setOption(option);
    }

    render() {
        let {date_len,data_len,data_max,data_min,data_aver} = this.state.data

        return (
            <div className="average-rise charts">
                <div className="main" ref={(main)=>{this.main=main}}/>
                <div className="text">
                    <p>
                        1、统计阶段：最近
                        <span>{date_len}</span>
                        个交易日，共计
                        <span>{data_len}</span>
                        只标的。
                    </p>
                    <p>
                        2、统计结果：统计周期内，五日平均最低涨幅为
                        <span className="red">{data_min}%</span>
                        ，五日平均最高涨幅为
                        <span className="red">{data_max}%</span>
                        ,五日平均涨幅为
                        <span className="red">{data_aver}%</span>。
                    </p>
                </div>
            </div>
        )
    }
}

export default AverageRise