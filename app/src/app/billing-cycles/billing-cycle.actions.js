import axios from 'axios';
import {toastr} from 'react-redux-toastr';
import {reset as resetForm, initialize} from 'redux-form';
import {showTabs, selectTab} from "../common/tab/tab.actions";

const BASE_URL = 'http://localhost:3003/api';

const INITIAL_VALUES = {};

export function getList() {
    const request = axios.get(`${BASE_URL}/billing-cycles`);
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function create(values) {
    return dispatch => {
        axios.post(`${BASE_URL}/billing-cycles`, values).then(() => {
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

export function init() {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('billingCycleForm', INITIAL_VALUES),
    ]
}