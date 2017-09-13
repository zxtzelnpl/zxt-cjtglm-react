import * as actionTypes from '../constants/userinfo'
import img from '../static/img/user/img.jpg'

const initialState = {
    userid: '**********',
    openid: '******************',
    img: img,
    nickname: '******',
    name: '****',
    phone: '*********',
    account: '********',
    ID: '******************',
    orders: [],
    subscribe: [],
    score: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    customer: '021-51572550'
}

export default function userinfo(state = initialState, action) {
    switch (action.type) {
        case actionTypes.USERINFO_SCORE:
            let _state = Object.assign({}, state)
            _state.score = action.score
            return _state
        case actionTypes.USERINFO_LOAD:
            return action.data
        default:
            return state
    }
}