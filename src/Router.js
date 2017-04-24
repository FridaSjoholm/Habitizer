import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import HabitList from './components/HabitList';
import HabitCreate from './components/HabitCreate';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Please Login" />
      </Scene>

      <Scene key="main">
        <Scene
          key="habitList"
          component={HabitList}
          title="Habits"
          rightTitle="Add"
          onRight={() => Actions.habitCreate()}
          initial
        />

        <Scene
          key="habitCreate"
          component={HabitCreate}
          title="Create Habit"
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
