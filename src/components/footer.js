import React, { Component } from 'react';

const footer = () => {
  return (
    <footer className="footer">
        <div className="footer-nav">
        <div className="container">
            <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-3 footer-nav-col">
                <div className="ft-about-us">
                    <h4 className="ft-col-title">CitiLights</h4>
                    <div className="text-block">
                        <p>CitiLights brings wide range of choice, steadily updated property list and market trend for you to figure out your right decision.</p>
                        <p>You are now at right place for your real estate research.</p>
                    </div>
                </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-3 footer-nav-col">
                <div className="ft-featured-properties">
                <h4 className="ft-col-title">Featued Property</h4>
                <div className="featured-property">
                    <ul>
                    <li>
                        <div className="featured-image">
                        <a href="property-details.html"><img src="images/property/property1.jpg" alt="" /></a>
                        </div>
                        <div className="featured-decs">
                        <span className="featured-status"><a href="#"></a></span>
                        <h4 className="featured-title"><a href="property-details.html" title="Fresno, CA93722">Fresno, CA93722</a></h4>
                        </div>
                    </li>
                    <li>
                        <div className="featured-image">
                        <a href="property-details.html"><img src="images/property/property1.jpg" alt="" /></a>
                        </div>
                        <div className="featured-decs">
                        <span className="featured-status"><a href="#">For Rent</a></span>
                        <h4 className="featured-title"><a href="property-details.html" title="AVA High Line">AVA High Line</a></h4>
                        </div>
                    </li>
                    </ul>
                </div>
                </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-3 footer-nav-col">
                <div className="ft-useful-links">
                <h4 className="ft-col-title">Useful links</h4>
                <nav className="useful-links-menu" role="navigation">
                    <ul>
                    <li className="menu-item"><a href="#">Terms of Use</a></li>
                    <li className="menu-item"><a href="#">Privacy Policy</a></li>
                    <li className="menu-item"><a href="#">Contact Support</a></li>
                    <li className="menu-item"><a href="#">Knowledgebase</a></li>
                    <li className="menu-item"><a href="#">Careers</a></li>
                    <li className="menu-item"><a href="#">FAQs</a></li>
                    </ul>
                </nav>
                </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-3 footer-nav-col">
                <div className="ft-contact-info">
                <h4 className="ft-col-title">Contact info</h4>
                    <ul className="detail-contact-info">
                    <li><i className="fa fa-map-marker"></i>&nbsp;376 Baker Street, New York</li>
                    <li><i className="fa fa-phone"></i>&nbsp;(+01)-486-2857</li>
                    <li><i className="fa fa-envelope-o"></i>&nbsp;<a href="mailto:info@citilights.com">info@citilights.com</a></li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
        </div>

        <div className="copyright">
        <div className="container">
            <div className="row">
            <div className="col-xs-12 col-sm-6 text-block">
                &copy; 2014 CitiLights. All Rights Reserved.
                <br />
                <span>Designed by <a title="Visit Nootheme.com!" href="http://www.nootheme.com/" target="_blank">NooTheme.com</a>.</span>
                <br />
            </div>
            <div className="col-xs-12 col-sm-6 logo-block">
                <div className="logo-image">
                <a href="index.html"><img src="images/logo/logo-footer.png" alt="CitiLights" /></a>
                </div>
            </div>
            </div>          
        </div>
        
        <div id="back-to-top" className="back-to-top">
            <i className="fa fa-angle-up"></i>
        </div>
        </div>
    </footer>
  );
};

export default footer;