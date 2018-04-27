import React, { Component } from 'react';

const navigation = () => {
  return (
    <div className="main-nav-wrap container">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-collapse">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <div className="logo">
          <div className="logo-image">
            <a href="index.html" title="NooTheme CitiLights"></a>
          </div>
        </div>
      </div>
      <div className="calling-info">
        <div className="calling-content">
          <i className="fa fa-mobile"></i>
          <div className="calling-desc">
            CALL  US  NOW<br />
            <span><a href="tel:(+01)-793-7938">(+01)-793-7938</a></span>
          </div>
        </div>
      </div>
      <div className="main-navigation">
        <nav className="collapse navbar-collapse" id="main-collapse" role="navigation">
          <ul className="nav navbar-nav">
            <li className="dropdown active">
              <a href="index.html">Home&nbsp;<span className="caret"></span></a>
              <ul className="dropdown-menu">
                <li><a href="home-map-vertical.html">Home Map Vertical</a></li>
                <li><a href="home-map-horizontal.html">Home Map Horizontal</a></li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#">Properties&nbsp;<span className="caret"></span></a>
              <ul className="dropdown-menu">
                <li className="dropdown-submenu">
                  <a href="#">List</a>
                  <ul className="dropdown-menu">
                    <li><a href="list-with-sidebar.html">With Sidebar</a></li>
                    <li><a href="list-no-sidebar.html">No Sidebar</a></li>
                  </ul>
                </li>
                <li className="dropdown-submenu">
                  <a href="#">Grid</a>
                  <ul className="dropdown-menu">
                    <li><a href="grid-with-sidebar.html">With Sidebar</a></li>
                    <li><a href="grid-no-sidebar.html">No Sidebar</a></li>
                  </ul>
                </li>
                <li><a href="property-details.html">Property details</a></li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#">Features&nbsp;<span className="caret"></span></a>
              <ul className="dropdown-menu dropdown-menu-right">
                <li className="dropdown-submenu">
                  <a href="#">Blog</a>
                  <ul className="dropdown-menu dropdown-menu-right">
                    <li><a href="blog.html">Blog</a></li>
                    <li><a href="default-blog-left-sidebar.html">Default Blog Left Sidebar</a></li>
                    <li><a href="default-blog-right-sidebar.html">Default Blog Right Sidebar</a></li>
                  </ul>
                </li>
                <li className="dropdown-submenu">
                  <a href="#">Shortcodes</a>
                  <ul className="dropdown-menu dropdown-menu-right">
                    <li><a href="shortcodes.html">Shortcodes</a></li>
                    <li><a href="citilights-shortcode.html">Citilights Shortcode</a></li>
                    <li><a href="pricing-table.html">Pricing Table</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#">Agents&nbsp;<span className="caret"></span></a>
              <ul className="dropdown-menu">
                <li><a href="agents-listing.html">Agents Listing</a></li>
                <li><a href="agents-detail.html">Agents Detail</a></li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#">Submit&nbsp;<span className="caret"></span></a>
              <ul className="dropdown-menu dropdown-menu-right">
                <li><a href="my-profile.html">My Profile</a></li>
                <li><a href="my-properties.html">My Properties</a></li>
                <li><a href="submit-proprety.html">Submit Proprety</a></li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="contact.html">Contact&nbsp;<span className="caret"></span></a>
              <ul className="dropdown-menu dropdown-menu-right">
                <li><a href="contact1.html">Contact 1</a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default navigation;
