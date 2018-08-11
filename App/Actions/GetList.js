import axios from 'axios';
const url = 'https://private-c31a5-task27.apiary-mock.com/videos';
import {SUCCESS,FAILED} from './types';

export const getVideoList = () => {
  return (dispatch) => {
    axios.get(url)
    .then(data => success(dispatch, data))
    .catch(() => fail(dispatch));
  }
};

const success = (dispatch,data) => {
  dispatch({
    type: SUCCESS,
    payload: data
  })
}

const fail = (dispatch) => {
  dispatch({
  type: FAILED
})
