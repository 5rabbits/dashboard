import React, { Component } from 'react'
import './App.css';
import firebase from 'firebase'

const provider = new firebase.auth.GoogleAuthProvider();
export default class App extends Component {

  componentWillMount() {
    console.log('!firebase.auth().currentUser', firebase.auth().currentUser)
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        firebase.auth().signInWithPopup(provider).then(function (result) {
        }).catch(function (error) {
        });
      }
    })
  }

  handleSignOutClick = () => {
    firebase.auth().signOut()
  }

  render() {
    return (
      <div>
        <div>asd</div>
        <button onClick={this.handleSignOutClick}>SignOut</button>
      </div>
    );
  }
}