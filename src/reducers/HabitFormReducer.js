import {
  HABIT_UPDATE
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
    default:
      return state;
  }
};
