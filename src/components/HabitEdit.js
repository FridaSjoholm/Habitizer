import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Button, Confirm } from './common';
import HabitForm from './HabitForm';
import { habitUpdate, habitSave, habitDelete } from '../actions';

class HabitEdit extends Component {
  state = { showModal: false };
  componentWillMount() {
    _.each(this.props.habit, (value, prop) => {
      this.props.habitUpdate({ prop, value });
    });
  }
  onButtonPress() {
    const { chore, description, day } = this.props;
    this.props.habitSave({ chore, description, day, uid: this.props.habit.uid });
  }
  onAccept() {
    const { uid } = this.props.habit;
    this.props.habitDelete({ uid });
  }
  onDecline() {
    this.setState({ showModal: false });
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

        <CardSection>
          <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
            Delete Habit
          </Button>
        </CardSection>

        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Are you sure you want to remove this habit?
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { chore, description, day } = state.habitForm;
  return { chore, description, day };
};

export default connect(mapStateToProps, {
  habitUpdate, habitSave, habitDelete 
})(HabitEdit);
