import React, { Component } from 'react';
import firebase from 'firebase';

import './App.css';
import Header from './header/components/Header';
import Body from './body/components/Body';
import Footer from './footer/components/Footer';

const provider = new firebase.auth.GoogleAuthProvider();

export default class App extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        firebase.auth().signInWithPopup(provider)
      }
    })
  }


  render() {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}