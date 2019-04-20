import { combineReducers } from 'redux'
import apiKey from './apiKey';
import issues from './issues';
import repos from './repos';

export default combineReducers({
  apiKey,
  issues,
  repos
})