import * as actionTypes from '../constants/userinfo'

export function change_score(score) {
    return {
        type: actionTypes.USERINFO_SCORE,
        score
    }
}

export function load(data) {
    return {
        type: actionTypes.USERINFO_LOAD,
        data
    }
}