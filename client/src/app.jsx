import React from 'react';
import './components/template/dependencies';

import Header from 'components/template/header';
import Sidebar from 'components/template/sidebar';
import Footer from 'components/template/footer';
import Routes from 'routes';
import Messages from 'components/msg/messages';

export default props => (
  <div className="wrapper">
    <Header/>
    <Sidebar/>
    <div className="content-wrapper">
      <Routes/>
    </div>
    <Footer/>
    <Messages/>
  </div>
)
