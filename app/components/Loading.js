import React from 'react'
import './Loading.less'

class Loading extends React.Component{
  render(){
    return(
        <div className="loading">
          <div className="wave">
            <div className="wave1"></div>
            <div className="wave2"></div>
          </div>
        </div>
    )
  }
}

export default Loading