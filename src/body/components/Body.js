import React, { Component } from 'react'
import { Layout, Divider, Card, Row, Col } from 'antd'

import './Body.css'

const Content = Layout.Content

export default class Body extends Component {
  render() {
    return (
      <Content style={{ padding: '0 50px' }}>
        <div style={{ background: '#fff', padding: 24 }}>
          <div>
            <Row gutter={16}>
              <Col className="gutter-row" span={4}>
                <Card.Grid style={{ width: '100%' }}>
                  <p className="text">85%</p>
                  <p className="description">Conectados</p>
                </Card.Grid>
              </Col>
              <Col className="gutter-row" span={4}>
                <Card.Grid style={{ width: '100%' }}>
                  <p className="text">20%</p>
                  <p className="description">Remoto</p>
                </Card.Grid>
              </Col>
              <Col className="gutter-row" span={4}>
                <Card.Grid style={{ width: '100%' }}>
                  <p className="text">10%</p>
                  <p className="description">AFK</p>
                </Card.Grid>
              </Col>
              <Col className="gutter-row" span={4}>
                <Card.Grid style={{ width: '100%' }}>
                  <p className="text">10%</p>
                  <p className="description">AFK</p>
                </Card.Grid>
              </Col>
              <Col className="gutter-row" span={4}>
                <Card.Grid style={{ width: '100%' }}>
                  <p className="text">10%</p>
                  <p className="description">AFK</p>
                </Card.Grid>
              </Col>
              <Col className="gutter-row" span={4}>
                <Card.Grid style={{ width: '100%' }}>
                  <p className="text">10%</p>
                  <p className="description">AFK</p>
                </Card.Grid>
              </Col>
            </Row>
            <Divider />
          </div>
        </div>
      </Content>
    )
  }
}