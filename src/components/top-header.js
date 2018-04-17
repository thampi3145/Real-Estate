import React, { Component } from 'react';


const topheader = () => {
  return (
      <div className="top-header">
        <div className="container">
          <div className="top-header-inner">
            <ul className="social-top">
              <li><a href="#" title="Facebook" target="_blank"><i className="fa fa-facebook"></i></a></li>
              <li><a href="#" title="Twitter" target="_blank"><i className="fa fa-twitter"></i></a></li>
              <li><a href="#" title="Pinterest" target="_blank"><i className="fa fa-pinterest"></i></a></li>
              <li><a href="#" title="RSS" target="_blank"><i className="fa fa-rss"></i></a></li>
            </ul>

            <div className="top-header-content">
              <div className="emailto content-item">
                <a href="mailto:info@citilights.com"><i className="fa fa-envelope-o"></i>&nbsp;Email:info@citilights.com</a>
              </div>
              <div className="register content-item">
                <a href="login-register.html"><i className="fa fa-key"></i>&nbsp;Register</a>
              </div>
              <div className="login content-item">
                <a href="login-register.html"><i className="fa fa-sign-in"></i>&nbsp;Login</a>
              </div>
              <div className="header-search">
                <label for="input-header-search"><i className="fa fa-search"></i></label>
                <input type="text" id="input-header-search" placeholder="Search" />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default topheader;
