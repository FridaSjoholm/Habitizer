import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Picker, Text } from 'react-native';
import { habitUpdate, habitCreate } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class HabitCreate extends Component {
  onButtonPress() {
    const { chore, description, day } = this.props;
    this.props.habitCreate({ chore, description, day: day || 'Monday' });
  }
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
        <Text style={styles.pickerTextStyle}>
          Select shift
        </Text>
        <CardSection>
          <Picker
            selectedValue={this.props.day}
            onValueChange={value => this.props.habitUpdate({ prop: 'day', value })}
            style={{ flex: 1 }}
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}
const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingTop: 10,
    color: '#f2dbd7',
    alignSelf: 'center',
    fontWeight: '600',
  }
};

const mapStateToProps = (state) => {
  const { chore, description, day } = state.habitForm;
  return { chore, description, day };
};

export default connect(mapStateToProps, { habitUpdate, habitCreate })(HabitCreate);
