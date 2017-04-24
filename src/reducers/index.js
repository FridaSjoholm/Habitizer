import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import HabitFormReducer from './HabitFormReducer';

export default combineReducers({
  auth: AuthReducer,
  habitForm: HabitFormReducer
});
