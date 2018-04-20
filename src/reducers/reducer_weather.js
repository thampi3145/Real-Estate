import {FETCH_WEATHER, CREATE_POST} from '../actions/index';

const Intial_state = {all:[],post:[]};

export default function (state = Intial_state, action) {
        
  switch(action.type) {
    case FETCH_WEATHER:
        
    return {...state,post: action.payload.data};
    case CREATE_POST:
    return {...state, all: action.payload.data};
    default:
        return state;
  }
  return state;
}
