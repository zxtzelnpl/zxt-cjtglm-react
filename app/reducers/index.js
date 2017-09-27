import { combineReducers } from 'redux'
import userinfo from './userinfo'
import registerstatement from './registerstatement'
import productlist from './productlist'
import articlelist from './articlelist'
import buylist from './buylist'
import newslist from './newslist'

export default combineReducers({
    userinfo,
    productlist,
    registerstatement,
    articlelist,
    buylist,
    newslist
})