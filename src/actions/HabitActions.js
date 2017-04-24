import {
  HABIT_UPDATE
} from './types';

export const habitUpdate = ({ prop, value }) => {
  return {
    type: HABIT_UPDATE,
    payload: { prop, value }
  };

export const habitCreate = ({ chore, description, day})
    console.log(chore, description, day);
};
