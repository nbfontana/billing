import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {reduxForm, Field, formValueSelector} from 'redux-form';
import {init} from './billing-cycle.actions';

import LabelAndInput from 'components/form/label-and-input';
import ItemList from './itemList';
import Summary from './summary';

class BillingCycleForm extends Component {

  calculateSummary() {
    const sum = (t, v) => t + v;
    return {
      sumOfCredits: this.props.credits.map(c => +c.value || 0).reduce(sum),
      sumOfDebts: this.props.debts.map(d => +d.value || 0).reduce(sum),
    }
  }

  render() {
    const {handleSubmit, readOnly, submitClass, submitLabel, credits, debts} = this.props;
    const {sumOfCredits, sumOfDebts} = this.calculateSummary();

    return (
      <form role="form" onSubmit={handleSubmit}>
        <div className="box-body">
          <Field name="name" component={LabelAndInput} label="Nome" cols="12 4"
                 placeholder="Informe o nome" readOnly={readOnly}/>
          <Field name="month" component={LabelAndInput} label="Mês" type="number" cols="12 4"
                 placeholder="Informe o mês" readOnly={readOnly}/>
          <Field name="year" component={LabelAndInput} label="Ano" type="number" cols="12 4"
                 placeholder="Informe o ano" readOnly={readOnly}/>
          <Summary credit={sumOfCredits} debt={sumOfDebts}/>
          <ItemList legend='Créditos' field='credits' list={credits} cols='12 6' readOnly={readOnly}/>
          <ItemList legend='Débitos' field='debts' list={debts} cols='12 6' showStatus={true}
                    readOnly={readOnly}/>
        </div>
        <div className="box-footer">
          <div className="col-md-2">
            <button className={`form-control  btn btn-${submitClass}`}>{submitLabel}</button>
          </div>
          <div className="col-md-2">
            <button type="button" className='form-control btn btn-default' onClick={this.props.init}>
              Cancelar
            </button>
          </div>
        </div>
      </form>
    )
  }
}

BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm);

const selector = formValueSelector('billingCycleForm');
const mapStateToProps = state => ({
  credits: selector(state, 'credits'),
  debts: selector(state, 'debts')
});
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm);
