import * as actionTypes from '../constants/wxinfo'

export default function wxinfo(state={}, action) {
    let _state = Object.assign({},state)
    switch (action.type) {
        case actionTypes.WEIXIN_GET:
            return action.data
        case actionTypes.WEIXIN_USER_COUNT:
            _state.user_count = action.data
            return _state
        case actionTypes.WEIXIN_UPDATE:
            return action.data
        default:
            return state
    }
}