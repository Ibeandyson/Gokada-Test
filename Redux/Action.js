import {DATA_REQUEST, DATA_REQUEST_SUCCESS, DATA_REQUEST_FAIL} from './Types';
import axios from "axios"



export const fetchData = () =>   {
  return (dispatch) =>  {
    dispatch({ type: DATA_REQUEST });
    try {
      axios.get("https://jobs.github.com/positions.json?description=ruby&page=1")
      .then((res) => {
          dispatch({type: DATA_REQUEST_SUCCESS, payload: res.data })
        }).catch(err=>{
          dispatch({type:  DATA_REQUEST_FAIL, payload: err })
        })
      } catch (err) {
      dispatch({type:  DATA_REQUEST_FAIL, payload: err })
      console.log("bad", err);
    }
  };
};
