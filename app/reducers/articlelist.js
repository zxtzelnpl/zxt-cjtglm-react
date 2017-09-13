import * as actionTypes from '../constants/articlelist'

const initialState = new Map()

export default function articlelist(state = initialState, action) {
    let _state = new Map();
    switch (action.type) {
        case actionTypes.ARTICLELIST_INIT:
            action.data.forEach((article)=>{
                _state.set(article.id,article)
            })
            return _state
        case actionTypes.ARTICLELIST_LOAD:
            state.forEach((article)=>{
            _state.set(article.id,article)
            })
            action.data.forEach((article)=>{
                _state.set(article.id,article)
            })
            return _state
        case actionTypes.ARTICLELIST_ADD:
            state.forEach((article)=>{
                _state.set(article.id,article)
            })
            console.log('state:',state)
            _state.set(action.data.id,action.data)
            console.log('_state:',_state)
            return _state
        default:
            return state
    }
}