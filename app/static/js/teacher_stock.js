import shaojunjie1 from '../img/stocks/shaojunjie1.jpg'
import wuweiwei1 from '../img/stocks/wuweiwei1.jpg'
import maxin1 from '../img/stocks/maxin1.jpg'
import zhouyue1 from '../img/stocks/zhouyue1.jpg'
let lvxiangzhao = [{
    name: '汉王科技',
    code: '002362',
    result: '71.40%',
    daySend: '2017.08.16',
    day: '阶段',
    dayCount: '阶段最高涨幅',
    img: shaojunjie1
}]

//马鑫
let maxin = [{
    name: '南卫股份',
    code: '603880',
    result: '19.16%',
    daySend: '2017.10.12',
    day:'2',
    dayCount: '二日最高涨幅',
    img: maxin1
}]
let suxuepeng = [{
    name: '陕西黑猫',
    code: '601015',
    result: '20.75%',
    daySend: '2017.09.07',
    day: 4,
    dayCount: '四日最高涨幅',
    img: shaojunjie1
}]

//吴伟伟
let wuweiwei = [{
    name: '乐心医疗',
    code: '300562',
    result: '63.54%',
    daySend: '2017.09.05',
    day:'阶段',
    dayCount: '阶段最高涨幅',
    img: wuweiwei1
}]

let yuliang = [{
    name: '陕西黑猫',
    code: '601015',
    result: '20.75%',
    daySend: '2017.09.07',
    day: 4,
    dayCount: '四日最高涨幅',
    img: shaojunjie1
}]
let zhoukang = [{
    name: '陕西黑猫',
    code: '601015',
    result: '20.75%',
    daySend: '2017.09.07',
    day: 4,
    dayCount: '四日最高涨幅',
    img: shaojunjie1
}]

//周煜
let zhouyu = [{
    name: '士兰微',
    code: '600460',
    result: '24.84%',
    daySend: '2017.09.28',
    day:'3',
    dayCount: '三日最高涨幅',
    img: zhouyue1
}]

let nobody = [{
    name: '陕西黑猫',
    code: '601015',
    result: '20.75%',
    daySend: '2017.09.07',
    day: 4,
    dayCount: '四日最高涨幅',
    img: shaojunjie1
}]

let shaojunjie = [{
    name: '陕西黑猫',
    code: '601012',
    result: '20.75%',
    daySend: '2017.09.07',
    day: 4,
    dayCount: '四日最高涨幅',
    img: shaojunjie1
},{
    name: '陕西黑猫',
    code: '601011',
    result: '20.75%',
    daySend: '2017.09.07',
    day: 4,
    dayCount: '四日最高涨幅',
    img: shaojunjie1
},{
    name: '陕西黑猫',
    code: '601015',
    result: '20.75%',
    daySend: '2017.09.07',
    day: 4,
    dayCount: '四日最高涨幅',
    img: shaojunjie1
}]
export function stocks (name) {
    switch (name) {
        case '吴伟伟':
            return wuweiwei
        case '马鑫':
            return maxin
        case '周煜':
            return zhouyu
        default:
            return []
    }
}

export function ranks (name) {
    switch (name) {
        case '吴伟伟':
            return 1
        case '马鑫':
            return 2
        case '周煜':
            return 3
        default:
            return 4
    }
}