import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class ListItem extends Component {
  onRowPress() {
    Actions.habitEdit({ habit: this.props.habit });
  }

  render() {
    const { chore, day } = this.props.habit;

    return (
      <TouchableWithoutFeedback
        onPress={this.onRowPress.bind(this)}
        style={styles.containerStyle}
      >
        <CardSection>
            <Text style={styles.textStyle}>
              {chore}
            </Text>
            <Text style={styles.rightStyle}>
              {day}
            </Text>
        </CardSection>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 18,
    paddingLeft: 15,
    flex: 2
  },
  rightStyle: {
    fontSize: 18,
    color: 'grey',
    paddingLeft: 30,
    flex: 1
  }
};

export default ListItem;
