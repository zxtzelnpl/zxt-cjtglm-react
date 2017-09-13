import * as actionTypes from '../constants/articlelist'

const _initialState = [
    {
        id:'0',
        description: '大幅下挫时仍是短期加仓良机',
        createTime: '2017-09-13 09:57'
    },
    {
        id:'1',
        description: '新能源板块为什么难能成为领涨旗帜?',
        createTime: '2017-09-13 09:57'
    },
    {
        id:'2',
        description: '逻辑分享——“取缔燃油车”谁最受益',
        createTime: '2017-09-13 09:57'
    },
    {
        id:'3',
        description: '当下市场机会大于风险，投资者应保持积极参与',
        createTime: '2017-09-13 09:57'
    },
    {
        id:'4',
        description: '操作上控制仓位，不宜追高',
        createTime: '2017-09-13 09:57'
    }
]

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