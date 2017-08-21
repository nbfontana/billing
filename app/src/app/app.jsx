import React from 'react';
import '../common/template/dependencies';

import Header from '../common/template/header';
import Sidebar from '../common/template/sidebar';

export default props => (
    <div className="wrapper">
        <Header/>
        <Sidebar/>
    </div>
)