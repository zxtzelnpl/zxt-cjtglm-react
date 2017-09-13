import { combineReducers } from 'redux'
import userinfo from './userinfo'
import registerstatement from './registerstatement'
import productlist from './productlist'
import articlelist from './articlelist'

export default combineReducers({
    userinfo,
    productlist,
    registerstatement,
    articlelist
})