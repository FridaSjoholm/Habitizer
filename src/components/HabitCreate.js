import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, CardSection, Input, Button } from './common';

class HabitCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Chore"
            placeholder="Vacuum"
          />
        </CardSection>

        <CardSection>
          <Input
            label="Description"
            placeholder="All tha floors"
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

export default HabitCreate;
