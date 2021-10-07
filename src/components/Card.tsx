import { Card, Col } from 'antd'
import PropTypes from 'prop-types'
import React from 'react'
const CardView = ({ item, setSingleLaunch }) => {
  return (
    <Col span={4}>
      <Card className="mb-3">
        <img
          style={{ width: '100%' }}
          src={item?.links?.mission_patch_small}
          alt="launch image"
        />
        <h6 className="mt-3 text-center">{item?.rocket?.rocket_name}</h6>
        <h6
          style={{ cursor: 'pointer' }}
          onClick={() => {
            setSingleLaunch(item)
          }}
          className="p-1 text-center bg-primary pointer text-white"
        >
          Details
        </h6>
      </Card>
    </Col>
  )
}
CardView.propTypes = {
  item: PropTypes.object,
  setSingleLaunch: PropTypes.any,
}
export default CardView
