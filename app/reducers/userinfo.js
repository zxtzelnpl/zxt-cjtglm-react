import * as actionTypes from '../constants/userinfo'

export default function userinfo(state={}, action) {
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