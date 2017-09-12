import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {average} from '../../static/js/tools'

import './Charts.less'
import echarts from '../../static/js/echarts.min'


let record = {
    title: '五日平均涨幅',
    date: ['12月1日', '12月1日', '12月1日', '12月1日', '12月1日', '12月1日', '12月1日', '12月1日', '12月1日', '12月1日'],
    data: ['7.71', '15.64', '12.66', '9.12', '14.05', '19.67', '7.73', '5.41', '10.61', '14.16']
}

class AverageRise extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    componentDidMount(){
        this.showChart(this.main,this.props.record)
    }

    showChart(main,record){
        this.charts = echarts.init(main)
        let links = record.data.map(function (item, i) {
            return {
                source: i,
                target: i + 1
            };
        });
        links.pop();
        let option = {
            title: {
                text: record.title,
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
                data: record.date,
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
                            position:[5,5],
                            formatter: function (data) {
                                return data.value + '%'
                            }
                        }
                    },
                    edgeSymbol: ['circle', 'arrow'],
                    edgeSymbolSize: [2, 4],
                    data: record.data,
                    links: links,
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
        let {date,data} = this.props.record
        let date_len,data_len,data_max,data_min,data_aver;
        date_len = date.length
        data_len = data.length
        data_max = Math.max(...data)
        data_min = Math.min(...data)
        data_aver = average(data)
        return (
            <div className="average-rise charts">
                <div className="main" ref={(main)=>{this.main=main}}/>
                <div className="text">
                    <p>数据统计：</p>
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