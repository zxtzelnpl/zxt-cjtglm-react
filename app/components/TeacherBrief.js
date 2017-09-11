import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './TeacherBrief.less'

import honor from '../static/img/honor.png'

class TeacherBrief extends React.Component{
    constructor(props,context){
        super(props,context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){

        let {pic_s,name,title,brief,special} = this.props.teacher
        return (
            <div className="teacher-brief">
                <div className="people">
                    <div className="photo">

                        <img src={pic_s}/>


                    </div>
                    <div className="nicks">
                        <div className="up">
                            <span>{name}</span>
                            <span id="title">{title}</span>
                        </div>
                        <div className="down">
                            <span className="honor" style={{display:'inline'}}><img src={honor} alt="" />{title}</span>
                            <span className="honorSub">{special}</span>
                        </div>
                    </div>
                </div>
                <div className="intro">
                    <div className="word">
                        简介：
                    </div>
                    <div className="text">{brief}</div>
                </div>
            </div>
        )
    }
}

export default TeacherBrief