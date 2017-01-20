import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCvOnezHsejOhsLGFXYoB1nsA5oQPcYBP0',
      authDomain: 'auth-ecc90.firebaseapp.com',
      databaseURL: 'https://auth-ecc90.firebaseio.com',
      storageBucket: 'auth-ecc90.appspot.co',
      messagingSenderId: '499203268364'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
