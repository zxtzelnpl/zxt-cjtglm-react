import * as actionTypes from '../constants/productlist'

import pic from '../static/img/product/lvxiangzhao.jpg'
import pic_s from '../static/img/product/lvxiangzhao-s.png'
import img_result from '../static/img/teacher/img-result.jpg'
import img1 from '../static/img/teacher/img1.jpg'
import img2 from '../static/img/teacher/img2.jpg'
import img3 from '../static/img/teacher/img3.jpg'



const _initialState = [];
_initialState.sort(function (a, b) {
    return parseInt(a.rank) - parseInt(b.rank)
})

const initialState = new Map()
_initialState.forEach((item) => {
    initialState.set(item.id, item)
})


export default function productlist(state = initialState, action) {
    switch (action.type) {
        case actionTypes.PRODUCTLIST_LOAD:
            let _state = new Map()
            action.data.sort(function (a, b) {
                return parseInt(a.rank) - parseInt(b.rank)
            })
            action.data.forEach((item) => {
                _state.set(item.id, item)
            })
            return _state
        default:
            return state
    }
}