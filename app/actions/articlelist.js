import * as actionTypes from '../constants/articlelist'

export function load(data) {
    return {
        type: actionTypes.ARTICLELIST_LOAD,
        data
    }
}