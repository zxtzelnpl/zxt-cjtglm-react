import * as actionTypes from '../constants/userinfo'
import img from '../static/img/user/img.jpg'

const initialState = {
    userid:'**********',
    openid:'******************',
    img:img,
    nickname:'Aaron',
    name:'赵学通',
    phone:'15921433951',
    account:'********',
    ID:'******************',
    orders:[],
    subscribe:[],
    score:[1,1,1,1,1,1,1,1,1,1],
    customer:'021-51572550'
}

export default function userinfo (state = initialState, action) {
    switch (action.type) {
        case actionTypes.USERINFO_UPDATE:
            return action.data
        default:
            return state
    }
}