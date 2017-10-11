import './SubscribeArticleList.less'

import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import {Link} from 'react-router-dom'

const listZxt = [
    {
        "id": "10000029",
        "rank": "1",
        "name": "吕向召",
        "title": "热点瞭望手",
        "special": "热点瞭望手",
        "position": "次日平均涨幅+8.70%---上榜次数+12---个股最大涨幅+78%---高级投资经理---热点瞭望手---五日概率牛人",
        "pic": "\\txsecurities_pics\\analysts\\0\\201612291507623.png",
        "brief": "曾担任腾讯财经直播视频《事件龙虎榜》、《午间起牛》等栏目长期特邀嘉宾。投资风格沉稳果断，善于挖掘具备优质基本面和独特主题亮点相结合的上市公司，并结合技术走势制定完善的操作策略。",
        "img1": "\\txsecurities_pics\\analysts\\1\\201612291522924.jpg",
        "img2": "\\txsecurities_pics\\analysts\\2\\201612291524799.jpg",
        "img3": "\\txsecurities_pics\\analysts\\33\\201707211739396.jpg",
        "fiveday": "",
        "nextday": "",
        "threeday": "12月1日+4.71+7.04---12月1日+11.43+6.11---12月1日+12.05+9.61---12月1日+17.04+8.46---12月1日+4.61+13.48---三日最大涨幅",
        "risen": "2017-09-12+2---2017-09-13+1---2017-09-14+2---2017-09-15+2---2017-09-18+2---次日上涨概率"
    },
    {
        "id": "10000032",
        "rank": "2",
        "name": "周煜",
        "title": "狙击牛股",
        "special": "狙击牛股",
        "position": " 次日平均涨幅+8.70%---上榜次数+12---个股最大涨幅+78%---高级投资经理---狙击牛股---五日涨幅牛人",
        "pic": "\\txsecurities_pics\\analysts\\0\\201701031318725.png",
        "brief": "从业经验近十年，风格成熟稳健，追求绝对收益。曾在招商证券、大同证券任职。通过长期实践，研究出一套可复制性强、可操作性强的轮动操作技术，尤其在强势股中反复多次波段操作，适用于各类投资者。",
        "img1": "\\txsecurities_pics\\analysts\\1\\201701031343418.jpg",
        "img2": "\\txsecurities_pics\\analysts\\2\\201701031349574.jpg",
        "img3": "\\txsecurities_pics\\analysts\\33\\201709011733757.jpg",
        "fiveday": "",
        "nextday": "35---9---五日上涨个数",
        "threeday": "12月1日+6.90+4.70---12月1日+17.90+7.40---12月1日+4.01+9.70---12月1日+10.33+8.16---12月1日+9.4+7.76---五日最大涨幅",
        "risen": ""
    },
    {
        "id": "10000046",
        "rank": "3",
        "name": "邵军杰",
        "title": "龙虎英雄",
        "special": "龙虎英雄",
        "position": "次日平均涨幅+6.70%---上榜次数+12---个股最大涨幅+78%---高级投资经理---龙虎英雄---五日涨幅牛人",
        "pic": "\\txsecurities_pics\\analysts\\0\\201709061119637.png",
        "brief": "入市十余年，曾担任机构操盘手、首席策略分析师，资管部总监，擅长大资金的运作手法，风险控制，以直率的坦荡之心传道授业；其独创的大资金运作交易系统，能在众多标的物中选出未来具有惊人爆发力的个股！",
        "img1": "\\txsecurities_pics\\analysts\\1\\201709061147919.jpg",
        "img2": "\\txsecurities_pics\\analysts\\2\\201709061150950.jpg",
        "img3": "\\txsecurities_pics\\analysts\\33\\201709120909706.jpg",
        "fiveday": "",
        "nextday": "42---3---次日上涨个数",
        "threeday": "12月1日+12.13+8.64---12月1日+13.43+10.34---12月1日+11.43+18.33---12月1日+10.13+9.64---12月1日+17.16+9.46---五日最大涨幅",
        "risen": ""
    },
    {
        "id": "10000045",
        "rank": "4",
        "name": "刘章右",
        "title": "趋势博弈",
        "special": "趋势博弈",
        "position": "次日平均涨幅+8.70%---上榜次数+12---个股最大涨幅+78%---高级投资经理---趋势博弈---三日概率王",
        "pic": "\\txsecurities_pics\\analysts\\00\\201709061107058.png",
        "brief": "曾就职于业内著名投资，负责私募研究工作，从主力行为和庄家行为入手，以黄金分割，波浪，周期等分析手段为工具，以三维分析体系为框架，强势捉庄，弱势擒妖，震荡做T，穿越牛熊实现稳健盈利。",
        "img1": "\\txsecurities_pics\\analysts\\11\\201709061121977.jpg",
        "img2": "",
        "img3": "\\txsecurities_pics\\analysts\\33\\201709061128149.jpg",
        "fiveday": "",
        "nextday": "38---4---次日上涨个数",
        "threeday": "",
        "risen": "2017-09-12+2---2017-09-13+1---2017-09-14+2---2017-09-15+2---2017-09-18+2---三日上涨概率"
    },
    {
        "id": "10000044",
        "rank": "5",
        "name": "秦通",
        "title": "捉妖秦牛",
        "special": "捉妖秦牛",
        "position": "次日平均涨幅+6.70%---上榜次数+12---个股最大涨幅+78%---高级投资经理---捉妖秦牛---三日选股牛人",
        "pic": "\\txsecurities_pics\\analysts\\0\\201709051134724.png",
        "brief": "投资学专业，主攻A股市场定价投资分析，采用新的视角，站在专业投资机构的角度，独创《价值论假说》，依托定价分析模型对上市公司进行估值；投资格言：做投资找根源，根源错，事亦错。投资永远是围绕价值进行,K线价格仅仅是公司价值的表现形式。",
        "img1": "\\txsecurities_pics\\analysts\\1\\201709051151709.jpg",
        "img2": "\\txsecurities_pics\\analysts\\2\\201709051154584.jpg",
        "img3": "",
        "fiveday": "12月1日+7.66---12月1日+7.61---12月1日+10.31---12月1日+11.13---12月1日+13.86---12月1日+9.14---12月1日+9.96---12月1日+8.31---12月1日+11.63---12月1日+9.93",
        "nextday": "43---1---三日上涨个数",
        "threeday": "",
        "risen": ""
    },
    {
        "id": "10000043",
        "rank": "6",
        "name": "焦晓颖",
        "title": "估值聚焦",
        "special": "估值聚焦",
        "position": "次日平均涨幅+8.70%---上榜次数+12---个股最大涨幅+78%---高级投资经理---估值聚焦---五日概率王",
        "pic": "\\txsecurities_pics\\analysts\\0\\201709051101769.png",
        "brief": "曾在投资银行任职多年，擅长宏观经济政策解读，精于证券市场趋势行情的判断，对短线市场的热点挖掘和追随有相当高的造诣；善于跨市场操作，利用复杂的金融手段搭建稳定的交易结构，近几年在市场上获得非常可观的资产回报率。",
        "img1": "\\txsecurities_pics\\analysts\\1\\201709051147879.jpg",
        "img2": "\\txsecurities_pics\\analysts\\2\\201709051151191.jpg",
        "img3": "",
        "fiveday": "",
        "nextday": "",
        "threeday": "12月1日+12.13+8.64---12月1日+13.43+10.34---12月1日+11.43+18.33---12月1日+10.13+9.64---12月1日+17.16+9.46---五日最大涨幅",
        "risen": "2017-09-12+2---2017-09-13+1---2017-09-14+1---2017-09-15+2---2017-09-18+2---五日上涨概率"
    },
    {
        "id": "10000042",
        "rank": "7",
        "name": "董齐安",
        "title": "强势优选",
        "special": "强势优选",
        "position": "次日平均涨幅+8.70%---上榜次数+12---个股最大涨幅+78%---高级投资经理---强势优选---次日概率牛人",
        "pic": "\\txsecurities_pics\\analysts\\0\\201709051133593.png",
        "brief": "在证券市场风风雨雨历经20多年，拥有丰富的实战经验；善于对上市公司进行价值研究，能够运用合理的股指工具为投资寻找足够的安全边际，善于跨市场操作，利用复杂的金融手段搭建稳定的交易结构, 获得可观的资产回报率。",
        "img1": "\\txsecurities_pics\\analysts\\11\\201709051116658.jpg",
        "img2": "\\txsecurities_pics\\analysts\\22\\201709051119377.jpg",
        "img3": "",
        "fiveday": "",
        "nextday": "",
        "threeday": "12月1日+8.71+7.64---12月1日+12.43+10.11---12月1日+13.95+10.67---12月1日+10.13+9.46---12月1日+7.61+9.43---三日最大涨幅",
        "risen": "2017-09-12+2---2017-09-13+2---2017-09-14+1---2017-09-15+2---2017-09-18+2---次日上涨概率"
    },
    {
        "id": "10000027",
        "rank": "8",
        "name": "吴伟伟",
        "title": "擒妖专家",
        "special": "擒妖专家",
        "position": " 次日平均涨幅+8.70%---上榜次数+12---个股最大涨幅+78%---高级投资经理---擒妖专家---次日涨股牛人",
        "pic": "\\txsecurities_pics\\analysts\\0\\201612291531425.png",
        "brief": "资深投资顾问，多年证券从业经历，具有丰富的市场投资经验，擅长波段操作，短线热点追踪，行情大趋势研判！不同市场大环境采取不同操作策略。具备专业的知识与成熟的技巧，拥有自己独特的投资风格。",
        "img1": "\\txsecurities_pics\\analysts\\1\\201612291518164.jpg",
        "img2": "\\txsecurities_pics\\analysts\\2\\201612291519195.jpg",
        "img3": "\\txsecurities_pics\\analysts\\33\\201709081020438.jpg",
        "fiveday": "12月1日+7.71---12月1日+15.64---12月1日+12.66---12月1日+9.12---12月1日+14.05---12月1日+19.67---12月1日+7.73---12月1日+5.41---12月1日+10.61---12月1日+14.16",
        "nextday": "",
        "threeday": "12月1日+6.61+5.64---12月1日+10.43+11.11---12月1日+7.41+8.46---12月1日+13.13+20.06---12月1日+4.61+7.43---五日最大涨幅",
        "risen": ""
    },
    {
        "id": "10000036",
        "rank": "9",
        "name": "马鑫",
        "title": "利润狙击手",
        "special": "利润狙击手",
        "position": "次日平均涨幅+8.70%---上榜次数+12---个股最大涨幅+78%---高级投资经理---利润狙击手---五日选股牛人",
        "pic": "\\txsecurities_pics\\analysts\\0\\201701091053471.png",
        "brief": "金融学、英语系双学士，实战派高手，股民谓之“利润狙击手”，熟悉各路资金的操作手法及运作思路，倡导“事件驱动和价值投资”双重投资理念；在市场把控和政策分析方面视角独特，擅长准确把握市场运行节奏！",
        "img1": "\\txsecurities_pics\\analysts\\1\\201701091050851.jpg",
        "img2": "\\txsecurities_pics\\analysts\\2\\201701091052757.jpg",
        "img3": "\\txsecurities_pics\\analysts\\33\\201709051413421.jpg",
        "fiveday": "",
        "nextday": "39---5---三日上涨个数",
        "threeday": "12月1日+8.61+7.11---12月1日+4.31+12.13---12月1日+14.06+5.24---12月1日+5.96+6.31---12月1日+8.66+10.03---五日最大涨幅",
        "risen": ""
    }
]

class SubscribeList extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    componentDidMount(){

    }

    render() {
        let list = listZxt;
        let htmlArr = list.map((subscribe) => {
            return (
                <Link  className="box" to={"/weixin0/1212"} key={subscribe.id}>
                    <h4>选股牛人-{this.props.product_name}</h4><span>2017-09-21 10:14</span>
                </Link>
            )
        })
        return (
            <div className="subscribe-article-list">
                {htmlArr}
            </div>
        )
    }
}

export default SubscribeList