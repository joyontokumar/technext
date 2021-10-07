import {
  AutoComplete,

  Card, Col,
  Row, Select
} from 'antd'
import 'antd/dist/antd.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import Header from './components/Header'
import { FetchLaunches } from './redux/launches/action'
const { Option } = Select
const App = ({data}) => {
  const [getName, setName] = useState(undefined)
  const [getUpcoming, setUpcoming] = useState(undefined)
  const [getStatus, setStatus] = useState(undefined)
  const [getYear, setYear] = useState(undefined)
  const dispatch = useDispatch()
// onchange upcoming event
const handleChangeUpcoming = (value) => {
  setUpcoming(value)
}
// onchange status event
const handleChangeStatus = (value) => {
  setStatus(value)
}
//  ochange last year
const handleChangeYear = (value) => {
  setYear(value)
}
  useEffect(async() => {
   const data =  await dispatch(FetchLaunches(getName, getUpcoming,getStatus, getYear ))
   return data
  }, [getName, getUpcoming, getStatus, getYear])
    // reset all field data
    const reseAllFieldData = () => {
      window.location.reload()
      window.location.href = `${process.env.PUBLIC_URL}`
    }
return(
  <div className="launch-area">
      <div className="container">
        <Header/>
        <Row gutter={16} className="mt-2 mb-4">
          <Col span={6}>
              <AutoComplete
                style={{width:'300px'}}
                  placeholder="Search by rocket name..."
                  onSearch={(val) => setName(val)}>
              </AutoComplete>
            </Col>
          <Col span={6}>
                <div className="search-box-shadow status-search">
                  <Select
                  style={{width:'100%'}}
                    placeholder="Is it upcoming?"
                    onChange={handleChangeUpcoming}
                  >
                    <Option value="true">YES</Option>
                    <Option value="false">NO</Option>
                  </Select>
                </div>
              </Col>
          <Col span={6}>
                <div className="search-box-shadow status-search">
                  <Select
                  style={{width:'100%'}}
                    placeholder="Launch Status"
                    onChange={handleChangeStatus}
                  >
                    <Option value="true">Success</Option>
                    <Option value="false">Failure</Option>
                  </Select>
                </div>
              </Col>
          <Col span={4}>
                <div className="search-box-shadow status-search">
                  <Select
                  style={{width:'100%'}}
                    placeholder="Last Year"
                    onChange={handleChangeYear}
                  >
                    <Option value="2006"> 2006</Option>
                    <Option value="2007"> 2007</Option>
                    <Option value="2008"> 2008</Option>
                    <Option value="2009"> 2009</Option>
                    <Option value="2010"> 2010</Option>
                    <Option value="2011"> 2011</Option>
                    <Option value="2012"> 2012</Option>
                    <Option value="2013"> 2013</Option>
                    <Option value="2014"> 2014</Option>
                    <Option value="2015"> 2015</Option>
                    <Option value="2016"> 2016</Option>
                    <Option value="2017"> 2017</Option>
                    <Option value="2018"> 2018</Option>
                    <Option value="2019"> 2019</Option>
                    <Option value="2020"> 2020</Option>
                  </Select>
                </div>
          </Col>
          <Col span={2}>
          <button
                className="ant-btn ant-btn-primary w-100 bg-danger"
                onClick={reseAllFieldData}
              >
                Reset
              </button>
          </Col>
        </Row>
        <Row gutter={16}>
        {data?.arr?.map((item, index)=>(
        <Col span={4} key={index}>
          <Card>
          <img style={{width:'100%'}} src={item?.links?.mission_patch_small} alt='launch image'/>
            <h6 className="mt-3 text-center">{item?.mission_name}</h6>
            <h6 className="p-1 text-center bg-primary pointer text-white">Details</h6>
          </Card>
        </Col>
         ))}
      </Row>
      </div>
  </div>
)
}
App.propTypes = {
  data: PropTypes.object,
}
const mapStateTopProps = (state) => {
  return { data: state.authReducer }
}
export default connect(mapStateTopProps, null)(App)