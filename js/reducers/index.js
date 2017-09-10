import { combineReducers } from 'redux'
import persons from './persons'
import actives from './actives'

const aboutUsApp = combineReducers({
  persons,
  actives
})

export default aboutUsApp