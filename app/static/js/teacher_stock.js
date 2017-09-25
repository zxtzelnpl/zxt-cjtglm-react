import shaojunjie1 from '../img/stocks/shaojunjie1.jpg'
let lvxiangzhao = [{
    name: '汉王科技',
    code: '002362',
    result: '71.40%',
    daySend: '2017.08.16',
    day: '阶段',
    dayCount: '阶段最高涨幅',
    img: shaojunjie1
}]
let maxin = [{
    name: '汉王科技',
    code: '002362',
    result: '71.40%',
    daySend: '2017.08.16',
    day: '阶段',
    dayCount: '阶段最高涨幅',
    img: shaojunjie1
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
let wuweiwei = [{
    name: '乐心医疗',
    code: '300562',
    result: '24.87%',
    daySend: '2017.09.05',
    day: 4,
    dayCount: '四日最高涨幅',
    img: shaojunjie1
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
let zhouyu = [{
    name: '乐心医疗',
    code: '300562',
    result: '24.87%',
    daySend: '2017.09.05',
    day: 4,
    dayCount: '四日最高涨幅'
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
export default function (name) {
    switch (name) {
        case '吕向召':
            return lvxiangzhao
        case '马鑫':
            return maxin
        case '苏学鹏':
            return suxuepeng
        case '吴伟伟':
            return wuweiwei
        case '俞亮':
            return yuliang
        case '周康':
            return zhoukang
        case '周煜':
            return zhouyu
        case '邵军杰':
            return shaojunjie
        default:
            return nobody
    }
}