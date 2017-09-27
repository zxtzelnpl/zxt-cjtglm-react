import * as actionTypes from '../constants/buylist'

export function init(data) {
    return {
        type: actionTypes.BUYLIST_INIT,
        data
    }
}