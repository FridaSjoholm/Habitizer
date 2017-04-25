import React, { Component } from 'react';
import { connect } from 'react-redux';
import { habitUpdate, habitCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import HabitForm from './HabitForm';

class HabitCreate extends Component {
  onButtonPress() {
    const { chore, description, day } = this.props;
    this.props.habitCreate({ chore, description, day: day || 'Monday' });
  }
  render() {
    return (
      <Card>
        <HabitForm />

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
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

export default connect(mapStateToProps, { habitUpdate, habitCreate })(HabitCreate);
