import {combineReducers} from 'redux';

import DashboardReducer from '../app/dashboard-redux/dashboard.reducer';
import TabReducer from './common/tab/tab.reducer';

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer
});

export default rootReducer;