import { combineReducers } from 'redux';
import weatherReducers from './reducer_weather';

const rootReducer = combineReducers({
  state: (state = {}) => state
});

export default rootReducer;
