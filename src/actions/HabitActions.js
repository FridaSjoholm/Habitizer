import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  HABIT_UPDATE,
  HABIT_CREATE
} from './types';

export const habitUpdate = ({ prop, value }) => {
  return {
    type: HABIT_UPDATE,
    payload: { prop, value }
  };
};

export const habitCreate = ({ chore, description, day }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/habits`)
      .push({ chore, description, day })
      .then(() => {
        dispatch({ type: HABIT_CREATE });
        Actions.habitList({ type: 'reset' });
      });
  };
};
