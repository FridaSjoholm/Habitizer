import React, { Component } from 'react';
import { View, Text } from 'react-native';

 class App extends Component {
   render() {
     return (
       <View>
         <Text style={styles.textStyle}> This App is working! </Text>
       </View>
     );
   }
 }

 const styles = {
   textStyle: {
     fontSize: 20,
     textAlign: 'center',
     margin: 30,
     color: 'pink'
   }
 };

 export default App;
