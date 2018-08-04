import React, { Component } from 'react'
import { Layout } from 'antd'

const LayoutFooter = Layout.Footer

export default class Footer extends Component {
  render() {
    return (
      <LayoutFooter style={{ textAlign: 'center' }}>
        Dashboard ©2018 Created by Lemontech
      </LayoutFooter>
    )
  }
}