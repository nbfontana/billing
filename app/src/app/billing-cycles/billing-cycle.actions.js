import axios from 'axios';
import {toastr} from 'react-redux-toastr';
import {reset as resetForm} from 'redux-form';
import {showTabs, selectTab} from "../common/tab/tab.actions";

const BASE_URL = 'http://localhost:3003/api';

export function getList() {
    const request = axios.get(`${BASE_URL}/billing-cycles`);
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function create(values) {
    return dispatch => {
        axios.post(`${BASE_URL}/billing-cycles`, values).then(response => {
            toastr.success('Success', 'Deu certo!');
            dispatch([
                resetForm('billingCycleForm'), getList(),
                selectTab('tabList'), showTabs('tabList', 'tabCreate')
            ]);
        }).catch(e => {
            e.response.data.errors.forEach(erro => toastr.error('Erro', erro));
        });
    };
}