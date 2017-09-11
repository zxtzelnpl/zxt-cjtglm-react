import { combineReducers } from 'redux'
import userinfo from './userinfo'
import teacherinfo from './teacherinfo'
import productlist from './productlist'

export default combineReducers({
    userinfo,
    teacherinfo,
    productlist
})