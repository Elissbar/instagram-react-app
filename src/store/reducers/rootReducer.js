import { combineReducers } from 'redux'
import {Registration} from './registration'
import {Auth} from './auth'

export default combineReducers({
    regist: Registration,
    auth: Auth
})