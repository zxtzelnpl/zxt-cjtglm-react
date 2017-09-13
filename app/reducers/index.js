import { combineReducers } from 'redux'
import userinfo from './userinfo'
import teacherinfo from './teacherinfo'
import registerstatement from './registerstatement'
import productlist from './productlist'
import footer from './footer'
import articlelist from './articlelist'

export default combineReducers({
    userinfo,
    teacherinfo,
    productlist,
    registerstatement,
    footer,
    articlelist
})