import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { habitsFetch } from '../actions'

class HabitList extends Component {
  componentWillMount() {
    this.props.employeesFetch();
  }
  render() {
    return (
      <View>
        <Text> Habit A </Text>
        <Text> Habit B </Text>
        <Text> Habit C </Text>
        <Text> Habit D </Text>
        <Text> Habit E </Text>
        <Text> Habit F </Text>
        <Text> Habit G </Text>
      </View>
    );
  }
}

export default connect(null, { habitsFetch })(HabitList);
