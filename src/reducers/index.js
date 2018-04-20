import { combineReducers } from 'redux';
import weatherReducers from './reducer_weather';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  post: weatherReducers,
  form: formReducer
});

export default rootReducer;
