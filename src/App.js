import React, { Component } from 'react';
import firebase from 'firebase';
import { Layout } from 'antd';
import {observable, action} from "mobx";
import {observer} from 'mobx-react'

import './App.css';
import Header from './header/components/Header';
import Body from './body/components/Body';
import Footer from './footer/components/Footer';
import { decorate } from 'mobx';

const provider = new firebase.auth.GoogleAuthProvider();

const App = observer(class App extends Component {
  user = null

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        firebase.auth().signInWithPopup(provider)
      }

      this.setUser(user)
    })
  }

  setUser(user) {
    this.user = user
  }

  render() {
    return (
      <Layout
        className="layout"
      >
        <Header
          user={this.user}
        />
        <Body />
        <Footer />
      </Layout>
    )
  }
})

export default decorate(App, {
  user: observable,
  setUser: action
})