import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ReactSwipe from 'react-swipe'
import './ScrollStock.less'


class ScrollStock extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.swipers=[];
    }

    render() {
        let stocks = this.props.stocks;
        console.log(stocks)
        let htmlList = stocks.map((stock,index) => {
            return (
                <div className="box" key={stock.code} ref={(swiper)=>{this.swipers[index]=swiper}}>
                    <img src={stock.img} alt=""/>
                    <div>
                        <p><span>推出标的：</span><span className="em name">{stock.name}</span></p>
                        <p><span>推出日期：</span><span className="daySend">{stock.daySend}</span></p>
                        <p><span>交易日个数：</span><span className="day">{stock.day}</span></p>
                        <p><span>涨幅情况：</span><span className="em result">{stock.result}</span></p>
                    </div>
                </div>
            )
        });

        console.log(stocks)
        return (
            <div className="scroll-stock">
                <ReactSwipe
                    swipeOptions={
                        {
                            startSlide:2,
                            speed: 400,
                            // auto: 1000,
                            continuous: true,
                            callback:(index,elem)=>{
                                let prev = index-1>=0?index-1:2
                                let next = index+1<=2?index+1:0

                            },
                        }
                    }
                    style={
                        {
                            container: {
                                overflow:'visible',
                                visibility: 'hidden',
                                position: 'relative',
                                margin:'0 auto',
                                width:'6.5rem',
                                height:'3rem'
                            },
                            wrapper:{
                                position: 'relative'
                            },
                            child: {
                                float: 'left',
                                position: 'relative',
                                transitionProperty: 'transform',
                                display:'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width:'5.6rem',
                                height:'2.5rem',
                                borderRadius:'5px',
                                background:'#ffffff',
                                transformOrigin: 'center center',
                                transition: 'transform .5s',
                                transform:'scale(1,1)'
                            }
                        }
                    }
                >
                    {htmlList}
                </ReactSwipe>
            </div>
        )
    }


}

export default ScrollStock

