import {combineReducers} from 'redux';

import DashboardReducer from '../app/dashboard/dashboard.reducer';

const rootReducer = combineReducers({
    dashboard: DashboardReducer
});

export default rootReducer;