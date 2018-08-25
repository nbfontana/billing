import {toastr} from 'react-redux-toastr';
import axios from 'axios';
import constants from '../../constants';

export function login(values) {
  console.log(values);
  return submit(values, `${constants.AUTH_URL}/login`);
}

export function signup(values) {
  return submit(values, `${constants.AUTH_URL}/signup`);
}

function submit(values, url) {
  return dispatch => {
    axios.post(url, values).then((response) => {
      dispatch([{type: 'USER_FETCHED', payload: response.data}]);
    }).catch((error) => error.response.data.errors.forEach((e) => toastr.error('Erro: ', e)));
  }
}

export function logout() {
  return {type: 'TOKEN_VALIDATED', payload: false};
}

export function validateToken(token) {
  return dispatch => {
    if (token) {
      axios.post(`${constants.AUTH_URL}/validate-token`, {token}).then((res) => {
        dispatch({type: 'TOKEN_VALIDATED', payload: res.data.valid})
      }).catch(e => dispatch({type: 'TOKEN_VALIDATED', payload: false}));
    } else {
      dispatch({type: 'TOKEN_VALIDATED', payload: false})
    }
  }
}
