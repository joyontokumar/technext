import { Col, Row } from 'antd'
import PropTypes from 'prop-types'
import React, { ReactElement } from 'react'
const Details = ({ singleLaunch }): ReactElement => {
  return (
    <div className="product-inforamtion-area single-information-area-page brand-information-area">
      <Row gutter={16}>
        <Col span={24}>
          <div className="detail-info">
            <div className="single-info d-flex justify-content-between mb-3">
              <div className="info-heading">
                <span>Mission Name</span>
              </div>
              <div className="info-content w-50">
                <span>{singleLaunch?.mission_name}</span>
              </div>
            </div>
            <div className="single-info d-flex justify-content-between mb-3">
              <div className="info-heading">
                <span>Rocket Name</span>
              </div>
              <div className="info-content w-50">
                <span>{singleLaunch?.rocket?.rocket_name}</span>
              </div>
            </div>
            <div className="single-info d-flex justify-content-between mb-3">
              <div className="info-heading">
                <span>Rocket Type</span>
              </div>
              <div className="info-content w-50">
                <span>{singleLaunch?.rocket?.rocket_type}</span>
              </div>
            </div>
            <div className="single-info d-flex justify-content-between mb-3">
              <div className="info-heading">
                <span>Launch Site Name</span>
              </div>
              <div className="info-content w-50">
                <span>{singleLaunch?.launch_site?.site_name}</span>
              </div>
            </div>
            <div className="single-info d-flex justify-content-between mb-3">
              <div className="info-heading">
                <span>Flight Number</span>
              </div>
              <div className="info-content w-50">
                <span>{singleLaunch?.flight_number}</span>
              </div>
            </div>
            <div className="single-info d-flex justify-content-between mb-3">
              <div className="info-heading">
                <span>Launch Year</span>
              </div>
              <div className="info-content w-50">
                <span>{singleLaunch?.launch_year}</span>
              </div>
            </div>
            <div className="single-info d-flex justify-content-between mb-3">
              <div className="info-heading">
                <span>YouTube Link</span>
              </div>
              <div className="info-content w-50">
                <span>
                  <a href={singleLaunch?.links?.video_link}>
                    {singleLaunch?.links?.video_link}
                  </a>
                </span>
              </div>
            </div>
            <div className="single-info d-flex justify-content-between mb-3">
              <div className="info-heading">
                <span>YouTube Id</span>
              </div>
              <div className="info-content w-50">
                <span>{singleLaunch?.links?.youtube_id}</span>
              </div>
            </div>
            <div className="single-info d-flex justify-content-between mb-3">
              <div className="info-heading">
                <span>Details</span>
              </div>
              <div className="info-content w-50">
                <span>{singleLaunch?.details}</span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}
Details.propTypes = {
  singleLaunch: PropTypes.object,
}
export default Details
