//  launches
import { LAUNCHES_SUCCESS } from './types'
export const FetchLaunches = (getName, getUpcoming, getStatus) => {
  return (dispatch) => {
    fetch(
      `https://api.spacexdata.com/v3/launches` +
        (getName ? `?rocket_name=${getName}` : ``) +
        (getUpcoming ? `?upcoming=${getUpcoming}` : ``) +
        (getStatus ? `?launch_success=${getStatus}` : ``),
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log('get all data', data)
        dispatch({ type: LAUNCHES_SUCCESS, payload: data })
      })
      .catch((err) => console.error(err))
  }
}
