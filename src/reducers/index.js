import {combineReducers} from 'redux';
import courses from './courseReducer';
import loginreducer from './loginReducer';

const rootReducer = combineReducers({
  courses,
  loginreducer
});

export default rootReducer;