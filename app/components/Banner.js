import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ReactSwipe from 'react-swipe'

import './Banner.less'

import img5 from '../static/img/banner/junyinniuren5.jpg'
import img6 from '../static/img/banner/junyinniuren6.jpg'
import img7 from '../static/img/banner/junyinniuren7.jpg'

class Banner extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            index: 0
        }
    }

    render() {
        return (
            <ReactSwipe
                className="carousel"
                swipeOptions={
                    {
                        speed: 400,
                        auto: 1000,
                        continuous: true,
                    }
                }
            >
                <div>
                    <img src={img5} alt=""/>
                </div>
                <div>
                    <img src={img6} alt=""/>
                </div>
                <div>
                    <img src={img7} alt=""/>
                </div>
            </ReactSwipe>
        );
    }
}

export default Banner
