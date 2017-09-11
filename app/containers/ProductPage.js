import React from 'react'
import { connect } from 'react-redux'

import Banner from '../components/Banner'
import ProductList from '../components/ProductList'
import ProductListHot from '../components/ProductListHot'

class ProductPage extends  React.Component{
    constructor(props,content){
        super(props,content)
    }

    componentDidMount(){

    }

    render(){
        let list = this.props.productlist;
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
            </div>
        )
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

    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductPage)