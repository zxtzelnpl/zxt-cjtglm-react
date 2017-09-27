import * as actionTypes from '../constants/buylist'

export default function articlelist(state = [], action) {
    let _state;
    switch (action.type) {
        case actionTypes.BUYLIST_INIT:
            _state = action.data
            return _state
        default:
            return state
    }
}