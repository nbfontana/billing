import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {reducer as toastrReducer} from 'react-redux-toastr'

import DashboardReducer from '../app/dashboard-redux/dashboard.reducer';
import TabReducer from './common/tab/tab.reducer';
import BillingCyclesReducer from './billing-cycles/billing-cycle.reducer';
import AuthReducer from './auth/auth.reducer';

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    billingCycle: BillingCyclesReducer,
    form: formReducer,
    toastr: toastrReducer,
    auth: AuthReducer
});

export default rootReducer;