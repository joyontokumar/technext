import {
  AutoComplete,
  Select
} from 'antd'
import 'antd/dist/antd.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { FetchLaunches } from './redux/launches/action'
const { Option } = Select
const App = ({data}) => {
  const [getName, setName] = useState(undefined)
  const [getUpcoming, setUpcoming] = useState(undefined)
  const [getStatus, setStatus] = useState(undefined)
  const dispatch = useDispatch()
// onchange upcoming event
const handleChangeUpcoming = (value) => {
  setUpcoming(value)
}
// onchange status event
const handleChangeStatus = (value) => {
  setStatus(value)
}
  useEffect(async() => {
   const data =  await dispatch(FetchLaunches(getName, getUpcoming,getStatus ))
   return data
  }, [getName, getUpcoming, getStatus])
return(
  <div className="card-view-area pt-5 pb-5">
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
            <AutoComplete
              style={{width:'300px'}}
                placeholder="Search by rocket name..."
                onSearch={(val) => setName(val)}>
            </AutoComplete>
          </div>
          <div className="col-lg-2">
              <div className="search-box-shadow status-search">
                <Select
                  placeholder="Is it upcoming?"
                  onChange={handleChangeUpcoming}
                >
                  <Option value="true">YES</Option>
                  <Option value="false">NO</Option>
                </Select>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="search-box-shadow status-search">
                <Select
                  placeholder="Launch Status"
                  onChange={handleChangeStatus}
                >
                  <Option value="true">Success</Option>
                  <Option value="false">Failure</Option>
                </Select>
              </div>
            </div>
      </div>
    <div className="row">
      {data?.arr?.map((item, index)=>(
        <div className="col-lg-4" key={index}>
          <div className="card">
              <div className="card-body">
                <h5 className="card-title">{item?.mission_name}</h5>
                <p className="card-text">{item?.details}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
             </div>
            </div>
        </div>
      ))}
      </div>
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