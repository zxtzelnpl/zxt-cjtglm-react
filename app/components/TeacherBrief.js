import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './TeacherBrief.less'

import pic from '../static/img/product/lvxiangzhao.jpg'
import pic_s from '../static/img/product/lvxiangzhao-s.png'
import honor from '../static/img/honor.png'
import circle from '../static/img/fixed.png'

const datas = [
    {
        id: '10000027',
        name: '吴伟伟',
        title: '次日涨股牛人',
        style: '事件博弈',
        position:'',
        record: [
            ['三日最大涨幅', '17.04%'],
            ['次日上涨概率', '90%'],
        ],
        pic: pic,
        pic_s: pic_s,
        brief:'资深投资顾问，多年证券从业经历，具有丰富的市场投资经验，对市场、行业和公司均有深入的分析研究，同时对市场信息和股价反应之间的联系具有深刻的理解，总结了一套行之有效的操作策略；曾在湖北卫视“天生我财”节目中担任嘉宾，专门对于市场的最新信息进行解读和投资机会的发掘。',
        record1:{
            title:'五日平均涨幅',
            dates:['12月1日','12月1日','12月1日','12月1日','12月1日','12月1日','12月1日','12月1日','12月1日','12月1日'],
            datas:['7.71','15.64','12.66','9.12','14.05','19.67','7.73','5.41','10.61','14.16']
        },
        record2:{
            title:'五日最大涨幅',
            dates:['12月1日','12月1日','12月1日','12月1日','12月1日'],
            datas1:['6.61','10.43','7.41','13.13','4.61'],
            datas2:['5.64','11.11','8.46','20.06','7.43']
        }
    }
]

class TeacherBrief extends React.Component{
    constructor(props,context){
        super(props,context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
        return (
            <div className="teacher-brief">
                <div className="people">
                    <div className="photo">

                        <img src={pic_s}/>


                    </div>
                    <div className="nicks">
                        <div className="up">
                            <span>吴伟伟</span>
                            <span id="title">高级投资经理</span>
                        </div>
                        <div className="down">
                            <span className="honor" style={{display:'inline'}}><img src={honor} alt="" />次日涨股牛人</span><span className="honorSub">事件博弈</span>
                        </div>
                    </div>
                </div>
                <div className="intro">
                    <div className="word">
                        简介：
                    </div>
                    <div className="text">资深投资顾问，多年证券从业经历，具有丰富的市场投资经验，对市场、行业和公司均有深入的分析研究，同时对市场信息和股价反应之间的联系具有深刻的理解，总结了一套行之有效的操作策略；曾在湖北卫视“天生我财”节目中担任嘉宾，专门对于市场的最新信息进行解读和投资机会的发掘。</div>
                </div>
            </div>
        )
    }
}

export default TeacherBrief