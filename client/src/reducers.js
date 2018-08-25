import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {reducer as toastrReducer} from 'react-redux-toastr'

import DashboardReducer from 'containers/dashboard-redux/dashboard.reducer';
import TabReducer from 'components/tab/tab.reducer';
import BillingCyclesReducer from 'containers/billing-cycles/billing-cycle.reducer';
import AuthReducer from 'containers/auth/auth.reducer';

const rootReducer = combineReducers({
  dashboard: DashboardReducer,
  tab: TabReducer,
  billingCycle: BillingCyclesReducer,
  form: formReducer,
  toastr: toastrReducer,
  auth: AuthReducer
});

export default rootReducer;
