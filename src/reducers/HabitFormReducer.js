import {
  HABIT_UPDATE,
  HABIT_CREATE
} from '../actions/types';

const INITIAL_STATE = {
  chore: '',
  description: '',
  day: ''
};

export default ( state = INITIAL_STATE, action ) => {
  switch (action.type) {
    case HABIT_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case HABIT_CREATE:
      return INITIAL_STATE;
    default:
      return state;
  }
};
