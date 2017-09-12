import * as actionTypes from '../constants/footer'

const initialState = {
    index:1
}

export default function footer (state = initialState, action) {
    switch (action.type) {
        case actionTypes.FOOTER_CHANGE:
            return action.data
        default:
            return state
    }
}