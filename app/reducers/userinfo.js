import * as actionTypes from '../constants/userinfo'

export default function userinfo(state={}, action) {
    let _state
    switch (action.type) {
        case actionTypes.USERINFO_SCORE:
            _state = Object.assign({}, state)
            _state.score = action.score
            return _state
        case actionTypes.USERINFO_NAME:
            _state = Object.assign({}, state)
            _state.name = action.name
            return _state
        case actionTypes.USERINFO_ACCOUNT:
            _state = Object.assign({}, state)
            _state.account = action.account
            return _state
        case actionTypes.USERINFO_ID:
            _state = Object.assign({}, state)
            _state.ID_number = action.ID_number
            return _state
        case actionTypes.USERINFO_LOAD:
            return action.data
        default:
            return state
    }
}