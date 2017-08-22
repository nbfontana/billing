import {combineReducers} from 'redux';

import DashboardReducer from '../app/dashboard-redux/dashboard.reducer';

const rootReducer = combineReducers({
    dashboard: DashboardReducer
});

export default rootReducer;