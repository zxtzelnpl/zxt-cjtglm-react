import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './DownImage.less'

class DownImage extends React.Component{
    constructor(props,content){
        super(props,content)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    componentDidMount(){

    }

    render(){
        console.log(this.props.pic)
        if(this.props.pic){
            return (
                <div className="down-img">
                    <img src={this.props.pic} alt=""/>
                </div>
            )
        }
        else{
            return (<div className="no-img"/>)
        }

    }
}

export default DownImage