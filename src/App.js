import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

 class App extends Component {
   componentWillMount() {
     firebase.initializeApp({
       apiKey: 'AIzaSyBd1YTJmTNw6Og1HwurJ7s6fvOq8NaIU8o',
       authDomain: 'habitizer-5aa0d.firebaseapp.com',
       databaseURL: 'https://habitizer-5aa0d.firebaseio.com',
       projectId: 'habitizer-5aa0d',
       storageBucket: 'habitizer-5aa0d.appspot.com',
       messagingSenderId: '495005308695'
     });
   }

   render() {
     const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
     return (
       <Provider store={store}>
         <View>
           <Text style={styles.textStyle}> This App is working! </Text>
           <LoginForm />
         </View>
       </Provider>
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
