import {combineReducers} from 'redux';

import DashboardReducer from '../app/dashboard-redux/dashboard.reducer';
import TabReducer from './common/tab/tab.reducer';
import BillingCyclesReducer from './billing-cycles/billing-cycle.reducer';

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    billingCycle: BillingCyclesReducer
});

export default rootReducer;