import axios from 'axios';
import {toastr} from 'react-redux-toastr';
import {initialize} from 'redux-form';
import {selectTab, showTabs} from "components/tab/tab.actions";

const BASE_URL = 'http://localhost:3003/api';
const INITIAL_VALUES = {
  credits: [{}],
  debts: [{}]
};

export function getList() {
  const request = axios.get(`${BASE_URL}/billing-cycles`);
  return {
    type: 'BILLING_CYCLES_FETCHED',
    payload: request
  }
}

export function create(values) {
  return submit(values, 'post');
}

export function update(values) {
  return submit(values, 'put');
}

export function remove(values) {
  return submit(values, 'delete');
}

function submit(values, method) {
  return dispatch => {
    const id = values._id ? values._id : '';

    axios[method](`${BASE_URL}/billing-cycles/${id}`, values).then(() => {
      toastr.success('Success', 'Deu certo!');
      dispatch(init());
    }).catch(e => {
      e.response.data.errors.forEach(erro => toastr.error('Erro', erro));
    });
  };
}

export function showUpdate(billingClycle) {
  return [
    showTabs('tabUpdate'),
    selectTab('tabUpdate'),
    initialize('billingCycleForm', billingClycle)
  ]
}

export function showDelete(billingClycle) {
  return [
    showTabs('tabDelete'),
    selectTab('tabDelete'),
    initialize('billingCycleForm', billingClycle)
  ]
}

export function init() {
  return [
    showTabs('tabList', 'tabCreate'),
    selectTab('tabList'),
    getList(),
    initialize('billingCycleForm', INITIAL_VALUES),
  ]
}
