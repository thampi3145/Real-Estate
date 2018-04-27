import React, { Component } from 'react';

const ourservices = () => {
  return (
    <section id="our-sevices" className="wrap our-sevices">
      <div className="container">
        <div className="parallax">
          <div className="bg parallax-bg"></div>
          <div className="overlay"></div>
          <div className="our-sevices-content">
            <div className="row clearfix">
              <div className="col-xs-12 col-sm-4 our-sevices-col">
                <span className="service-icon">
                  <i className="fa fa-home"></i>
                </span>
                <hr className="noo-gap"/>
                <div className="text-block">
                  <h5>Hottest Property List</h5>
                  <p>Wherever you are and you want to go, we provide you extremely hot and continuously<br/>updated property list.</p>
                  <p><a className="icon-right" href="#">See latest list<i className="fa fa-arrow-circle-o-right"></i></a></p>
                </div>
              </div>

              <div className="col-xs-12 col-sm-4 our-sevices-col">
                <span  className="service-icon">
                  <i className="fa fa-thumbs-o-up"></i>
                </span>
                <hr className="noo-gap"/>
                <div className="text-block">
                  <h5>Best Price In Market</h5>
                  <p>Wherever you are and you want to go, we provide you extremely hot and continuously
                  <br/>updated property list.</p>
                  <p><a className="icon-right" href="#">See latest list<i className="fa fa-arrow-circle-o-right"></i></a>
                  </p>
                </div>
              </div>

              <div className="col-xs-12 col-sm-4 our-sevices-col">
                <span className="service-icon">
                  <i className="fa fa-star"></i>
                </span>
                <hr className="noo-gap"/>
                <div className="text-block">
                  <h5>Guaranteed Service</h5>
                  <p>Wherever you are and you want to go, we provide you extremely hot and continuously
                    <br/>updated property list.</p>
                  <p>
                    <a className="icon-right" href="#">See latest list<i className="fa fa-arrow-circle-o-right"></i></a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ourservices;