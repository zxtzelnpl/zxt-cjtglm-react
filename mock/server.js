const Koa = require('koa');
const Router  = require('koa-router');

const app = new Koa();
const router = new Router()

const pic='1'
const pic_s='1'
const img='1'
const img1='1'
const img2='1'
const img3='1'
const img_result='1'


let initialState = {
    articlelist:[
        {
            id:'0',
            description: '大幅下挫时仍是短期加仓良机',
            createTime: '2017-09-13 09:57'
        },
        {
            id:'1',
            description: '新能源板块为什么难能成为领涨旗帜?',
            createTime: '2017-09-13 09:57'
        },
        {
            id:'2',
            description: '逻辑分享——“取缔燃油车”谁最受益',
            createTime: '2017-09-13 09:57'
        },
        {
            id:'3',
            description: '当下市场机会大于风险，投资者应保持积极参与',
            createTime: '2017-09-13 09:57'
        },
        {
            id:'4',
            description: '操作上控制仓位，不宜追高',
            createTime: '2017-09-13 09:57'
        }
    ],
    productlist:[
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
    ],
    userinfo:{
        userid:'**********',
        openid:'******************',
        img:img,
        nickname:'Aaron',
        name:'赵学通',
        phone:'15921433951',
        account:'********',
        ID:'******************',
        orders:[],
        subscribe:[],
        score:[1,1,1,1,1,1,1,1,1,1],
        customer:'021-51572550'
    }
}

let articleMore =[
    {
        id:'5',
        description: '大幅下挫时仍是短期加仓良机',
        createTime: '2017-09-13 09:57'
    },
    {
        id:'6',
        description: '新能源板块为什么难能成为领涨旗帜?',
        createTime: '2017-09-13 09:57'
    },
    {
        id:'7',
        description: '逻辑分享——“取缔燃油车”谁最受益',
        createTime: '2017-09-13 09:57'
    },
    {
        id:'8',
        description: '当下市场机会大于风险，投资者应保持积极参与',
        createTime: '2017-09-13 09:57'
    },
    {
        id:'9',
        description: '操作上控制仓位，不宜追高',
        createTime: '2017-09-13 09:57'
    }
]

router.get('/api/articlelist',function(ctx,next){
    ctx.body = initialState.articlelist
})
router.get('/api/productlist',function(ctx,next){
    ctx.body = initialState.productlist
})
router.get('/api/userinfo',function(ctx,next){
    ctx.body = initialState.userinfo
})
router.get('/api/load',function(ctx,next){
    ctx.body = articleMore
})
// 开始服务并生成路由
app.use(router.routes())
    .use(router.allowedMethods())
app
    .listen(3000)