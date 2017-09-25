import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import labelAndInput from '../common/form/label-and-input';

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
                </div>
            </form>
        )
    }
}

export default reduxForm({form: 'billingCycleForm'})(BillingCycleForm);