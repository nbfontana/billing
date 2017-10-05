import React from 'react';

import Navbar from './navbar';

export default props => (
  <header className="main-header">
    <a href="" className="logo">
      <span className="logo-mini"><b> M</b></span>
      <span className="logo-lg">
                <i className="fa fa-money"> Money</i>
            </span>
    </a>
    <nav className="navbar navbar-static-top">
      <a className="sidebar-toggle" data-toggle="offcanvas"/>
      <Navbar/>
    </nav>
  </header>
)
