import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Button } from './common';
import HabitForm from './HabitForm';
import { habitUpdate } from '../actions';

class HabitEdit extends Component {
  componentWillMount() {
    _.each(this.props.habit, (value, prop) => {
      this.props.habitUpdate({ prop, value });
    });
  }
  onButtonPress() {
    const { chore, description, day } = this.props;
    console.log(chore, description, day);
    console.log(this.props);
  }
  render() {
    return (
      <Card>
        <HabitForm />

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save Changes
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

export default connect(mapStateToProps, { habitUpdate })(HabitEdit);
