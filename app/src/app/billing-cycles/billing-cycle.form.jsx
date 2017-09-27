import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {reduxForm, Field} from 'redux-form';

import labelAndInput from '../common/form/label-and-input';
import {init} from './billing-cycle.actions';

class BillingCycleForm extends Component {
    render() {
        const {handleSubmit} = this.props;
        return (
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name="name" component={labelAndInput} label="Nome" cols="12 4"
                           placeholder="Informe o nome"/>
                    <Field name="month" component={labelAndInput} label="Mês" type="number" cols="12 4"
                           placeholder="Informe o mês"/>
                    <Field name="year" component={labelAndInput} label="Ano" type="number" cols="12 4"
                           placeholder="Informe o ano"/>
                </div>
                <div className="box-footer">
                    <button className='btn btn-primary'>Submit</button>
                    <button type="button" className='btn btn-default' onClick={this.props.init}>
                        Cancelar
                    </button>
                </div>
            </form>
        )
    }
}

BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm);
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch);
export default connect(null, mapDispatchToProps)(BillingCycleForm);