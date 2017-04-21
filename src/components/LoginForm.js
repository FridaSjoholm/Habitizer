import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged } from '../actions';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="name@mail.com"
            label="Email"
            value={this.props.email}
            onChangeText={this.onEmailChange.bind(this)}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            placeholder="password"
            label="Password"
          />
        </CardSection>
        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}


const mapStateToProps = state => {
  return {
    email: state.auth.email
  };
};

export default connect(mapStateToProps, { emailChanged })(LoginForm);
