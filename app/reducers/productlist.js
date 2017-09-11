import * as actionTypes from '../constants/productlist'

import pic from '../static/img/product/lvxiangzhao.jpg'
import pic_s from '../static/img/product/lvxiangzhao-s.png'
import img_result from '../static/img/teacher/img-result.jpg'
import img1 from '../static/img/teacher/img1.jpg'
import img2 from '../static/img/teacher/img2.jpg'
import img3 from '../static/img/teacher/img3.jpg'

const _initialState = [
    {
        id: '10000027',
        rank: '1',
        name: '吴伟伟',
        title: '次日涨股牛人',
        special: '事件博弈',
        position: '高级投资经理',
        pic: pic,
        pic_s: pic_s,
        brief: '资深投资顾问，多年证券从业经历，具有丰富的市场投资经验，对市场、行业和公司均有深入的分析研究，同时对市场信息和股价反应之间的联系具有深刻的理解，总结了一套行之有效的操作策略；曾在湖北卫视“天生我财”节目中担任嘉宾，专门对于市场的最新信息进行解读和投资机会的发掘。',
        img1: img1,
        img2: img2,
        img3: img3,
        img_result: img_result,
        records: [
            {
                title: '五日平均涨幅',
                date: ['12月1日', '12月1日', '12月1日', '12月1日', '12月1日', '12月1日', '12月1日', '12月1日', '12月1日', '12月1日'],
                data: ['7.71', '15.64', '12.66', '9.12', '14.05', '19.67', '7.73', '5.41', '10.61', '14.16']
            },
            {
                title: '五日最大涨幅',
                date: ['12月1日', '12月1日', '12月1日', '12月1日', '12月1日'],
                data1: ['6.61', '10.43', '7.41', '13.13', '4.61'],
                data2: ['5.64', '11.11', '8.46', '20.06', '7.43']
            }
        ],
        stock: {
            name: '汉王科技',
            time: '2017.08.16',
            word: '阶段涨幅',
            rise: '71.40%'
        },
        pirce: '39'
    },
    {
        id: '10000032',
        rank: '2',
        name: '周煜',
        title: '次日涨股牛人',
        special: '事件博弈',
        position: '高级投资经理',
        pic: pic,
        pic_s: pic_s,
        brief: '资深投资顾问，多年证券从业经历，具有丰富的市场投资经验，对市场、行业和公司均有深入的分析研究，同时对市场信息和股价反应之间的联系具有深刻的理解，总结了一套行之有效的操作策略；曾在湖北卫视“天生我财”节目中担任嘉宾，专门对于市场的最新信息进行解读和投资机会的发掘。',
        img1: img1,
        img2: img2,
        img3: img3,
        img_result: img_result,
        records: [
            {
                title: '五日上涨个数',
                data: [39, 5]
            },
            {
                title: '次日上涨概率',
                date: ['2017-8-31', '2017-8-31', '2017-8-31', '2017-8-31', '2017-8-31'],
                data: [2, 1, 1, 2, 1]
            }
        ],
        stock: {
            name: '汉王科技',
            time: '2017.08.16',
            word: '阶段涨幅',
            rise: '71.40%'
        },
        pirce: '39'
    },
    {
        id: '10000036',
        rank: '3',
        name: '马鑫',
        title: '次日涨股牛人',
        special: '事件博弈',
        position: '高级投资经理',
        pic: pic,
        pic_s: pic_s,
        brief: '资深投资顾问，多年证券从业经历，具有丰富的市场投资经验，对市场、行业和公司均有深入的分析研究，同时对市场信息和股价反应之间的联系具有深刻的理解，总结了一套行之有效的操作策略；曾在湖北卫视“天生我财”节目中担任嘉宾，专门对于市场的最新信息进行解读和投资机会的发掘。',
        img1: img1,
        img2: img2,
        img3: img3,
        img_result: img_result,
        records: [
            {
                title: '次日上涨概率',
                date: ['2017-8-31', '2017-8-31', '2017-8-31', '2017-8-31', '2017-8-31'],
                data: [2, 1, 1, 2, 1]
            },
            {
                title: '五日最大涨幅',
                date: ['12月1日', '12月1日', '12月1日', '12月1日', '12月1日'],
                data1: ['6.61', '10.43', '7.41', '13.13', '4.61'],
                data2: ['5.64', '11.11', '8.46', '20.06', '7.43']
            }
        ],
        stock: {
            name: '汉王科技',
            time: '2017.08.16',
            word: '阶段涨幅',
            rise: '71.40%'
        },
        pirce: '39'
    },
    {
        id: '10000029',
        rank: '4',
        name: '吕向召',
        title: '次日涨股牛人',
        special: '事件博弈',
        position: '高级投资经理',
        pic: pic,
        pic_s: pic_s,
        brief: '资深投资顾问，多年证券从业经历，具有丰富的市场投资经验，对市场、行业和公司均有深入的分析研究，同时对市场信息和股价反应之间的联系具有深刻的理解，总结了一套行之有效的操作策略；曾在湖北卫视“天生我财”节目中担任嘉宾，专门对于市场的最新信息进行解读和投资机会的发掘。',
        img1: img1,
        img2: img2,
        img3: img3,
        img_result: img_result,
        records: [
            {
                title: '五日最大涨幅',
                date: ['12月1日', '12月1日', '12月1日', '12月1日', '12月1日'],
                data1: ['6.61', '10.43', '7.41', '13.13', '4.61'],
                data2: ['5.64', '11.11', '8.46', '20.06', '7.43']
            },
            {
                title: '五日平均涨幅',
                date: ['12月1日', '12月1日', '12月1日', '12月1日', '12月1日', '12月1日', '12月1日', '12月1日', '12月1日', '12月1日'],
                data: ['7.71', '15.64', '12.66', '9.12', '14.05', '19.67', '7.73', '5.41', '10.61', '14.16']
            }
        ],
        stock: {
            name: '汉王科技',
            time: '2017.08.16',
            word: '阶段涨幅',
            rise: '71.40%'
        },
        pirce: '39'
    },
    {
        id: '10000046',
        rank: '5',
        name: '邵军杰',
        title: '次日涨股牛人',
        special: '事件博弈',
        position: '高级投资经理',
        pic: pic,
        pic_s: pic_s,
        brief: '资深投资顾问，多年证券从业经历，具有丰富的市场投资经验，对市场、行业和公司均有深入的分析研究，同时对市场信息和股价反应之间的联系具有深刻的理解，总结了一套行之有效的操作策略；曾在湖北卫视“天生我财”节目中担任嘉宾，专门对于市场的最新信息进行解读和投资机会的发掘。',
        img1: img1,
        img2: img2,
        img3: img3,
        img_result: img_result,
        records: [
            {
                title: '五日平均涨幅',
                date: ['12月1日', '12月1日', '12月1日', '12月1日', '12月1日', '12月1日', '12月1日', '12月1日', '12月1日', '12月1日'],
                data: ['7.71', '15.64', '12.66', '9.12', '14.05', '19.67', '7.73', '5.41', '10.61', '14.16']
            },
            {
                title: '五日最大涨幅',
                date: ['12月1日', '12月1日', '12月1日', '12月1日', '12月1日'],
                data1: ['6.61', '10.43', '7.41', '13.13', '4.61'],
                data2: ['5.64', '11.11', '8.46', '20.06', '7.43']
            },
            {
                title: '五日上涨个数',
                data: [39, 5]
            },
            {
                title: '次日上涨概率',
                date: ['2017-8-31', '2017-8-31', '2017-8-31', '2017-8-31', '2017-8-31'],
                data: [2, 1, 1, 2, 1]
            }
        ],
        stock: {
            name: '汉王科技',
            time: '2017.08.16',
            word: '阶段涨幅',
            rise: '71.40%'
        },
        pirce: '39'
    }
].sort(function (a, b) {
    return parseInt(a.rank) - parseInt(b.rank)
})

const initialState = new Map()
_initialState.forEach((item) => {
    initialState.set(item.id, item)
})


export default function productlist(state = initialState, action) {
    switch (action.type) {
        case actionTypes.PRODUCTLIST_CHANGE:
            return action.data
        default:
            return state
    }
}