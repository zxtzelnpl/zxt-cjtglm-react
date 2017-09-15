import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as productListActionsFromOtherFile from '../actions/productlist'

import Banner from '../components/Banner'
import ProductList from '../components/ProductList'
import ProductListHot from '../components/ProductListHot'
import Footer from '../components/Footer'

import teacher_data_format from '../static/js/teacher_data_format'

class ProductPage extends  React.Component{
    constructor(props,content){
        super(props,content)
        this.url = '/ashx/productlist.ashx'
    }

    componentDidMount(){
        if(this.props.productlist.size<3){
            fetch(this.url,{
                method:'get'
            })
                .then((response)=>{
                    return response.json()
                })
                .then((json)=>{
                    console.log('****json****')
                    console.log(json)
                    teacher_data_format(json)
                    console.log(json)
                    this.props.productListActions.load(json)
                    console.log('****json****')
                })
                .catch((err)=>{
                    console.log('****err****')
                    console.log(err)
                    console.log('****err****')
                })
        }
    }

    render(){
        if(this.props.productlist.size>0){
            let normal = [];
            let hot = [];
            [...this.props.productlist.values()].forEach((item)=>{
                if(parseInt(item.rank)<=3){
                    hot.push(item)
                }
                else{
                    normal.push(item)
                }
            })
            return (
                <div className="product-page">
                    <Banner/>
                    <ProductListHot list={hot}/>
                    <ProductList list={normal}/>
                    <Footer footerIndex={1}/>
                </div>
            )
        }
        else{
            return(
                <div className="none"/>
            )
        }

    }
}

// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
    return {
        productlist:state.productlist
    }
}

function mapDispatchToProps(dispatch) {
    return {
        productListActions:bindActionCreators(productListActionsFromOtherFile, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductPage)