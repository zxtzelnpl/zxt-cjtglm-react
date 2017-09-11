import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import echarts from '../../static/js/echarts.min'
import {numToChinese} from "../../static/js/tools";

import './Charts.less'


let record = {
    title: '五日最大涨幅',
    date: ['12月1日', '12月1日', '12月1日', '12月1日', '12月1日'],
    data1: ['6.61', '10.43', '7.41', '13.13', '4.61'],
    data2: ['5.64', '11.11', '8.46', '20.06', '7.43']
}

class MaxRise extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    componentDidMount(){
        this.showChart()
    }

    showChart(){
        this.charts = echarts.init(this.main)
        let {title,date,data1,data2,data3} = record
        let option = {
            title: {
                text: title,
                x: 'center'
            },
            tooltip: {
                show: false
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: date,
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: false
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value}%'
                    }
                }
            ],
            series: [
                {
                    name: '股票1',
                    type: 'bar',
                    barWidth: '30%',
                    data: data1,
                    silent: true,
                    color: ['#3398DB']
                },
                {
                    name: '股票2',
                    type: 'bar',
                    barWidth: '30%',
                    data: data2,
                    silent: true,
                    color: ['#FF7A78']
                },
                {
                    name: '股票',
                    type: 'line',
                    barWidth: '30%',
                    data: data3,
                    silent: true,
                    color: ['#3398DB']
                }
            ]
        };
        this.charts.setOption(option);
    }

    render() {
        record.data = record.data1.concat(record.data2)
        record.data3 = []
        record.data1.forEach((item,index)=>{
            let num = (parseInt(item)+parseInt(record.data2[index]))/2
            record.data3.push(num)
        })
        let date_len = record.date.length
        let date_len_chinese = numToChinese(date_len)
        let data_len = record.data.length
        let data_max = Math.max.apply(undefined,record.data)
        let data_l_5=0,data_l_10=0,data_o_10=0;
        record.data.forEach((num)=>{
            let _num = parseInt(num)
            if(_num<5){
                data_l_5++
            }
            else if(_num<=10){
                data_l_10++
            }
            else if(_num>10){
                data_o_10++
            }
        })
        return (
            <div className="max-rise charts">
                <div className="main" ref={(main)=>{this.main=main}} />
                <div className="text">
                    <p>数据统计：</p>
                    <p>1、统计阶段: 最近<span>{date_len}</span>个交易日，共计<span>{data_len}</span>只标的；</p>
                    <p>2、统计结果：</p>
                    <p>（1）推出标的{date_len_chinese}个交易日最大涨幅低于5%的有 <span className="red" >{data_l_5}</span>只；</p>
                    <p>（2）推出标的{date_len_chinese}个交易日最大涨幅在5%-10%之间的有 <span className="red" >{data_l_10}</span>只;</p>
                    <p>（3）推出标的{date_len_chinese}个交易日最大涨幅超过10%的有 <span className="red" >{data_o_10}</span>只;</p>
                    <p>（4）单只标的{date_len_chinese}个交易日最高涨幅为 <span className="red" >{data_max}%</span>；</p>
                </div>
            </div>
        )
    }
}

export default MaxRise