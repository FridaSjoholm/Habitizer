import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import HabitFormReducer from './HabitFormReducer';
import HabitReducer from './HabitReducer';

export default combineReducers({
  auth: AuthReducer,
  habitForm: HabitFormReducer,
  habits: HabitReducer
});
