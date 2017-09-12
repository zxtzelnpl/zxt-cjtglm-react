import * as actionTypes from '../constants/footer'

export function change(data) {
    return {
        type: actionTypes.FOOTER_CHANGE,
        data
    }
}