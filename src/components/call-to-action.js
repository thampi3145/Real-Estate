import React, { Component } from 'react';

const calltoaction = () => {
  return (
    <section id="call-to-action" className="wrap call-to-action">
      <div className="container">
        <div className="parallax">
          <div className="bg parallax-bg"></div>
          <div className="overlay"></div>
          <div className="call-to-action-content">
            <div className="row clearfix">
              <div className="col-xs-12 col-sm-6 item-col">
                <div className="text-block">
                  <h3>ONLY IN JULY</h3>
                  <p>Be the first to get our hottest unlisted property list!</p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 item-col">
                <div className="call-to-action-btn">
                  <a href="#" className="btn" role="button">GET IT NOW</a>
                </div>
              </div>
            </div>            
          </div>
        </div>
      </div>
    </section>
  );
};

export default calltoaction;