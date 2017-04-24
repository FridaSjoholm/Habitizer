import {
  HABIT_UPDATE
} from './types';

export const habitUpdate = ({ prop, value }) => {
  return {
    type: HABIT_UPDATE,
    payload: { prop, value }
  };
};
