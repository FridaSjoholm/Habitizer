import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

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
          <Router />
       </Provider>
     );
   }
 }

 export default App;
