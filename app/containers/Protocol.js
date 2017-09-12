import './Protocol.less'

import xy2 from '../static/img/protocol/xy02.png'
import xy3 from '../static/img/protocol/xy03.png'
import xy4 from '../static/img/protocol/xy04.png'
import xy7 from '../static/img/protocol/xy07.png'

import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as registerStatementActionsFromOtherFile from '../actions/registerstatement'

class Protocol extends React.Component{
    constructor(props,context){
        super(props,context)
    }

    render(){
        return (
            <div className="protocol-page">
                <section className="header">
                    <p className="title">超级投顾联盟</p>
                    <p className="attation"><span className="red">*</span>微信公众号一经绑定成功，以下电子协议即为生效，其协议内容与纸质协议具有同等法律效应</p>
                    <p className="links">
                        <a href="#a"><span className="num">1</span><span className="text">投顾用户电子服务协议</span></a>
                        <a href="#b"><span className="num">2</span><span className="text">投资顾问业务风险揭示书</span></a>
                        <a href="#c"><span className="num">3</span><span className="text">适当性调查表</span></a>
                    </p>
                </section>
                <section className="content">
                    <div className="content-wrap">
                        <div className="xy" id="a"><img src={xy2} alt=""/></div>
                        <div className="xy" id="b"><img src={xy3} alt=""/></div>
                        <div className="xy" id="c"><img src={xy4} alt=""/></div>
                        <div className="question-box">
                            <div className="question-title">
                                <p>风险测评</p>
                            </div>
                            <div className="question">
                                <p>1、目前的个人及家庭财务状况属于以下哪一种 ？</p>
                                <label><input type="radio" name="question0" value="1" checked="checked" disabled="disabled" />A 有较大数额未到期负债</label>
                                <label><input type="radio" name="question0" value="2" disabled="disabled" />B 收入和支出相抵</label>
                                <label><input type="radio" name="question0" value="3" disabled="disabled" />C 有一定积蓄</label>
                                <label><input type="radio" name="question0" value="4" disabled="disabled" />D 有较为丰厚的积蓄</label>
                                <label><input type="radio" name="question0" value="5" disabled="disabled" />E 比较富有且有相当的投资</label>
                            </div>
                            <div className="question">
                                <p>2、您个人目前已经或者准备投资的金额占您或者家庭所拥有总资产的比重是多少 ？</p>
                                <label><input type="radio" name="question1" value="1" checked="checked" disabled="disabled" />A 80-100%</label>
                                <label><input type="radio" name="question1" value="2" disabled="disabled" />B 50-80%</label>
                                <label><input type="radio" name="question1" value="3" disabled="disabled" />C 20-50%</label>
                                <label><input type="radio" name="question1" value="4" disabled="disabled" />D 10-20%</label>
                                <label><input type="radio" name="question1" value="5" disabled="disabled" />E 0-10%</label>
                            </div>
                            <div className="question">
                                <p>3、您属于哪个年龄层 ？</p>
                                <label><input type="radio" name="question2" value="1" checked="checked" disabled="disabled" />A 75岁以上／20岁以下</label>
                                <label><input type="radio" name="question2" value="2" disabled="disabled" />B 66至75岁</label>
                                <label><input type="radio" name="question2" value="3" disabled="disabled" />C 56至65岁</label>
                                <label><input type="radio" name="question2" value="4" disabled="disabled" />D 46至55岁</label>
                                <label><input type="radio" name="question2" value="5" disabled="disabled" />E 20至45岁</label>
                            </div>
                            <div className="question">
                                <p>4、您计划中的投资期限是多长 ？</p>
                                <label><input type="radio" name="question3" value="1" checked="checked" disabled="disabled" />A 没有期限,想短炒一把</label>
                                <label><input type="radio" name="question3" value="2" disabled="disabled" />B 少于1年</label>
                                <label><input type="radio" name="question3" value="3" disabled="disabled" />C 1–3年</label>
                                <label><input type="radio" name="question3" value="4" disabled="disabled" />D 3-5年</label>
                                <label><input type="radio" name="question3" value="5" disabled="disabled" />E 5年以上</label>
                            </div>
                            <div className="question">
                                <p>5、您是否有过股票与基金的投资经历，如果有投资时间是多长 ？</p>
                                <label><input type="radio" name="question4" value="1" checked="checked" disabled="disabled" />A 没有</label>
                                <label><input type="radio" name="question4" value="2" disabled="disabled" />B 有，但是少于1年</label>
                                <label><input type="radio" name="question4" value="3" disabled="disabled" />C 有，在1–3年之间</label>
                                <label><input type="radio" name="question4" value="4" disabled="disabled" />D 有，在3–5年之间</label>
                                <label><input type="radio" name="question4" value="5" disabled="disabled" />E 有，长于5年</label>
                            </div>
                            <div className="question">
                                <p>6、您证券投资主要用于什么目的 ？</p>
                                <label><input type="radio" name="question5" value="1" checked="checked" disabled="disabled" />A 平时生活保障，赚点补贴家用</label>
                                <label><input type="radio" name="question5" value="2" disabled="disabled" />B 养老</label>
                                <label><input type="radio" name="question5" value="3" disabled="disabled" />C 子女教育</label>
                                <label><input type="radio" name="question5" value="4" disabled="disabled" />D 资产增值</label>
                                <label><input type="radio" name="question5" value="5" disabled="disabled" />E 家庭富裕</label>
                            </div>
                            <div className="question">
                                <p>7、您希望获得的年收益率是多少 ？</p>
                                <label><input type="radio" name="question6" value="1" checked="checked" disabled="disabled" />A 相当于储蓄存款收益率 </label>
                                <label><input type="radio" name="question6" value="2" disabled="disabled" />B 相当于通货膨胀率 </label>
                                <label><input type="radio" name="question6" value="3" disabled="disabled" />C 高于通货膨胀率，只要保值并略有增值即可</label>
                                <label><input type="radio" name="question6" value="4" disabled="disabled" />D 接近或相当于股票市场平均收益率 </label>
                                <label><input type="radio" name="question6" value="5" disabled="disabled" />E 大大超过股票市场平均收益率</label>
                            </div>
                            <div className="question">
                                <p>8、以下几种投资模式，您更偏好哪种模式 ？</p>
                                <label><input type="radio" name="question7" value="1" checked="checked" disabled="disabled" />A 收益只有5%，但不亏损</label>
                                <label><input type="radio" name="question7" value="2" disabled="disabled" />B 收益15%，但可能亏损5%</label>
                                <label><input type="radio" name="question7" value="3" disabled="disabled" />C 收益30%，但可能亏损15%</label>
                                <label><input type="radio" name="question7" value="4" disabled="disabled" />D 收益50%，但可能亏损30%</label>
                                <label><input type="radio" name="question7" value="5" disabled="disabled" />E 收益100%，但可能亏损60%</label>
                            </div>
                            <div className="question">
                                <p>9、如果您的证券或基金投资暂时亏损了30%，您怎么办 ？</p>
                                <label><input type="radio" name="question8" value="1" checked="checked" disabled="disabled" />A 无法承受风险，准备卖掉或者赎回</label>
                                <label><input type="radio" name="question8" value="2" disabled="disabled" />B 3个月到6个月内如果还是亏损30%，就准备卖掉或者赎回</label>
                                <label><input type="radio" name="question8" value="3" disabled="disabled" />C 1年之内亏损30%，就准备卖掉或者赎回</label>
                                <label><input type="radio" name="question8" value="4" disabled="disabled" />D 2－3年之内都可以持有，等待机会</label>
                                <label><input type="radio" name="question8" value="5" disabled="disabled" />E 没关系，可以长期持有，等待机会</label>
                            </div>
                            <div className="question">
                                <p>10、以3年的投资期限来说，如果与股票市场整体的表现相比，您希望您的投资 ？</p>
                                <label><input type="radio" name="question9" value="1" checked="checked" disabled="disabled" />A 无所谓</label>
                                <label><input type="radio" name="question9" value="2" disabled="disabled" />B 略微滞后股市整体的增长</label>
                                <label><input type="radio" name="question9" value="3" disabled="disabled" />C 与股市保持同步增长</label>
                                <label><input type="radio" name="question9" value="4" disabled="disabled" />D 超过股市整体增长10-30%</label>
                                <label><input type="radio" name="question9" value="5" disabled="disabled" />E 超越股市整体增长的30%以上客户签署确认</label>
                            </div>
                        </div>
                        <div className="xy"><img src={xy7} alt=""/></div>
                    </div>
                </section>
                <section className="footer">
                    <p>您的投资类型为保守类型</p>
                </section>
            </div>
        )
    }
}

// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
    return {
        score:state.userinfo.score
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Protocol)