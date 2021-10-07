import { Col, Row } from 'antd'
import React from 'react'
const Header = () => {
  return (
    <div className="header-area text-center pt-3 pb-3">
      <Row gutter={16}>
        <Col span={24}>
          <h2>Our Launch Mission</h2>
        </Col>
      </Row>
    </div>
  )
}

export default Header
