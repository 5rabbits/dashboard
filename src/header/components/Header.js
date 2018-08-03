import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Firebase from 'firebase';
import { Button } from 'antd';
import 'antd/dist/antd.css';

export default class Header extends Component {
  static propTypes = {
    user: PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.email,
      photoURL: PropTypes.string
    }),
  };

  handleSignOutClick = () => {
    Firebase.auth().signOut();
  }

  render() {
    console.log('user: ', this.props.user);
    return (
      <div>
        <Button onClick={this.handleSignOutClick}>SignOut</Button>
      </div>
    )
  }
}