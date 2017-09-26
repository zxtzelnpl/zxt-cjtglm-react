import React from 'react'
import {bindActionCreators} from 'redux'
import * as articleListmentActionsFromOtherFile from '../actions/articlelist'
import {connect} from 'react-redux'

import SubscribeList from '../components/SubscribeList'
import Footer from '../components/Footer'

class MySubscribePage extends React.Component {
    constructor(props, content) {
        super(props, content)
        // this.url = '/ashx/SubscribeList.ashx'
    }

    componentDidMount() {
        console.log(this.props.match)
    }

    render() {
        return (
            <div className="subscribe-list-page">
                <div className="content">
                    <SubscribeList list={this.props.subscribelist}/>
                </div>
                <Footer footerIndex={2}/>
            </div>
        )
    }
}

// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
    return {
        subscribelist: ''
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MySubscribePage)