import React, { Component } from 'react'
import PropTypes from 'prop-types'
import firebase from 'firebase'
import {
  Avatar,
  Menu,
  Dropdown,
  Layout,
} from 'antd'

import './Header.css'

const LayoutHeader = Layout.Header

export default class Header extends Component {
  static propTypes = {
    user: PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.email,
      photoURL: PropTypes.string
    }),
  };

  handleSignOutClick = () => {
    firebase.auth().signOut();
  }

  menu = () => (
    <Menu>
      <Menu.Item>
        <a rel="noopener noreferrer">
          Settings
        </a>
      </Menu.Item>
      <Menu.Item onClick={this.handleSignOutClick}>
        <a rel="noopener noreferrer">
          SignOut
        </a>
      </Menu.Item>
    </Menu>
  )

  render() {
    return (
      <LayoutHeader className="header">
        <div className="logo" />
        <Menu
          theme="dark"
        >
        </Menu>
        <div className="avatar">
          <Dropdown
            trigger={['click']}
            overlay={this.menu()}
            placement="bottomCenter"
          >
            <Avatar
              icon="user"
              shape="circle"
              size="large"
            />
          </Dropdown>
        </div>
      </LayoutHeader>
    )
  }
}