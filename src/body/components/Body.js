import React, { Component } from 'react'
import { Layout } from 'antd'

const Content = Layout.Content

export default class Body extends Component {
  render() {
    return (
      <Content style={{ padding: '0 50px' }}>
        <div style={{ background: '#fff', padding: 24, height: '100%' }}>Content</div>
      </Content>
    )
  }
}