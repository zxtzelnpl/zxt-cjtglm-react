import React from 'react'
import {bindActionCreators} from 'redux'
import * as subscribeListActionsFromOtherFile from '../actions/subscriblelist'
import * as productListActionsFromOtherFile from '../actions/productlist'
import {connect} from 'react-redux'

import SubscribeList from '../components/SubscribeList'
import Footer from '../components/Footer'


class MySubscribePage extends React.Component {
    constructor(props, content) {
        super(props, content)
        this.state = {
            initDom: false,
            subscribelist: []
        }
    }

    render() {
        return (
            <div className="subscribe-list-page">
                <div className="content">
                    {
                        this.state.initDom ?
                            (<SubscribeList
                                user_id={this.props.match.params.id}
                                subscribelist={this.state.subscribelist}
                                productlist={this.props.productlist}
                            />  ) :
                            (<div className="none"/>)
                    }

                </div>
                <Footer footerIndex={2}/>
            </div>
        )

    }

    componentDidMount() {
        let productsPromise = new Promise((resolve, reject) => {
            if (this.props.productlist.size === 0) {
                return fetch('/ashx/productlist.ashx', {
                    method: 'get'
                })
                    .then((response) => {
                        return response.json()
                    })
                    .then((productlist) => {
                        this.props.productListActions.load(productlist)
                        resolve(true)
                    })
            }
            else {
                resolve(true)
            }
        })

        let subscribesPromise = new Promise((resolve, reject) => {
            let user_id = this.props.match.params.id
            let url = `/ashx/user_subscribe.ashx?user_id=${user_id}`
            return fetch(url, {
                method: 'get'
            })
                .then((response) => {
                    return response.json()
                })
                .then((json) => {
                    resolve(json)
                })
        })

        Promise.all([productsPromise, subscribesPromise])
            .then(([productlist, subscribelist]) => {
                this.setState({
                    initDom: true,
                    subscribelist: subscribelist
                })
            })

    }

    shouldComponentUpdate(nextProp,nextState){
        return nextState.initDom
    }
}

// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
    return {
        subscribelist: state.subscribelist,
        userinfo: state.userinfo,
        productlist: state.productlist
    }
}

function mapDispatchToProps(dispatch) {
    return {
        subscribeListActions: bindActionCreators(subscribeListActionsFromOtherFile, dispatch),
        productListActions: bindActionCreators(productListActionsFromOtherFile, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MySubscribePage)