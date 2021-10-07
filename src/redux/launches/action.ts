//  launches
import { LAUNCHES_LOADING, LAUNCHES_SUCCESS } from './types'
export const FetchLaunches = (
  getName: string,
  getUpcoming: string,
  getStatus: boolean,
  getYear: string
) => {
  return (dispatch) => {
    dispatch({
      type: LAUNCHES_LOADING,
    })
    fetch(
      `https://api.spacexdata.com/v3/launches` +
        (getName ? `?rocket_name=${getName}` : ``) +
        (getUpcoming ? `?upcoming=${getUpcoming}` : ``) +
        (getStatus ? `?launch_success=${getStatus}` : ``) +
        (getYear ? `?launch_year=${getYear}` : ``),
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: LAUNCHES_SUCCESS, payload: data })
      })
      .catch((err) => console.error(err))
  }
}
