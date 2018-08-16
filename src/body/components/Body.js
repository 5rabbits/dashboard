import React, { Component } from 'react'
import { Layout, Divider, Card, Row, Col, Table } from 'antd'
import Chart from 'react-google-charts'

import './Body.css'

const Content = Layout.Content
const Meta = Card.Meta

export default class Body extends Component {

  commitsChart = () => {
    const columns = [
      {
        type: "string",
        label: "Fecha"
      },
      {
        label: "TBX",
        type: "number"
      },
      {
        label: "TTB",
        type: "number"
      },
      {
        label: "CT",
        type: "number"
      },
      {
        label: "IPM",
        type: "number"
      }
    ]
    const rows = [
      ['15-08', 100, 120, 98, 50],
      ['16-08', 98, 100, 110, 45],
      ['17-08', 110, 105, 80, 37],
      ['18-08', 78, 123, 105, 60],
    ]

    return (
      <Chart
        chartType="AreaChart"
        width="100%"
        height="400px"
        legendToggle
        rows={rows}
        columns={columns}
      />
    )
  }

  dataSourceTableCommit = () => {
    return ([
      {
        key: 1,
        name: 'Victor Sanchez',
        commit: 'Test 12321',
        project: 'TimeBillingX',
        date: '17/08/2018'
      },
      {
        key: 2,
        name: 'Victor Sanchez',
        commit: 'Test 12321',
        project: 'TimeBillingX',
        date: '17/08/2018'
      },
      {
        key: 3,
        name: 'Victor Sanchez',
        commit: 'Test 12321',
        project: 'TimeBillingX',
        date: '17/08/2018'
      },
      {
        key: 4,
        name: 'Victor Sanchez',
        commit: 'Test 12321',
        project: 'TimeBillingX',
        date: '17/08/2018'
      },
      {
        key: 5,
        name: 'Victor Sanchez',
        commit: 'Test 12321',
        project: 'TimeBillingX',
        date: '17/08/2018'
      },
    ])
  }

  columnsTableCommit = () => {
    return ([
      {
        title: 'Nombre',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Commit',
        dataIndex: 'commit',
        key: 'date',
      },
      {
        title: 'Proyecto',
        dataIndex: 'project',
        key: 'project',
      },
      {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
      },
    ])
  }

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
            <Row gutter={16}>
              <Col className="gutter-row" span={16}>
                <Card
                  hoverable
                  cover={this.commitsChart()}
                >
                  <Table
                    dataSource={this.dataSourceTableCommit()}
                    columns={this.columnsTableCommit()}
                  />
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </Content>
    )
  }
}
