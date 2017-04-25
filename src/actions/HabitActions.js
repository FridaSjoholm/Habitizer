import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  HABIT_UPDATE,
  HABIT_CREATE,
  HABITS_FETCH_SUCCESS
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

export const habitsFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/habits`)
      .on('value', snapshot => {
        dispatch({ type: HABITS_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const habitSave = ({ chore, description, day, uid }) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/habits/${uid}`)
      .set({ chore, description, day })
      .then(() => console.log('saved!'));
  };
};
