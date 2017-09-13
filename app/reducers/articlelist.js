import * as actionTypes from '../constants/articlelist'

const _initialState = []

const initialState = new Map()
_initialState.map((article)=>{
    initialState.set(article.id,article)
})

export default function articlelist(state = initialState, action) {
    switch (action.type) {
        case actionTypes.ARTICLELIST_LOAD:
            let _state = new Map();
            state.forEach((article)=>{
            _state.set(article.id,article)
            })
            action.data.forEach((article)=>{
                _state.set(article.id,article)
            })
            return _state
        default:
            return state
    }
}