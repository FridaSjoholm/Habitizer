//Import libraries
import React from 'react';
import { Text, View } from 'react-native';

//Make Component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>
        {props.headerText}
      </Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#e6ebef',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 25,
    color: '#000',
    fontWeight: '600'
  }
};
//Make Component available
export { Header };
