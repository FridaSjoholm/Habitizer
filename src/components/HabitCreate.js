import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { habitUpdate } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class HabitCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Chore"
            placeholder="Vacuum"
            value={this.props.chore}
            onChangeText={value => this.props.habitUpdate({ prop: 'chore', value })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Description"
            placeholder="All tha floors"
            value={this.props.description}
            onChangeText={value => this.props.habitUpdate({ prop: 'description', value })}
          />
        </CardSection>

        <CardSection>
          <Text>Daypicker</Text>
        </CardSection>

        <CardSection>
          <Button>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}
const mapStateToProps = (state) => {
  const { chore, description, day } = state.habitForm;
  return { chore, description, day };
};

export default connect(mapStateToProps, { habitUpdate })(HabitCreate);
