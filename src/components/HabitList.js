import _ from 'lodash';
import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import { habitsFetch } from '../actions';
import ListItem from './ListItem';

class HabitList extends Component {
  componentWillMount() {
    this.props.habitsFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ habits }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(habits);
  }

  renderRow(habit) {
    return <ListItem habit={habit} />;
  }


  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}
const mapStateToProps = state => {
  const habits = _.map(state.habits, (val, uid) => {
    return { ...val, uid };
  });
  return { habits };
};

export default connect(mapStateToProps, { habitsFetch })(HabitList);
