import React, { Component } from 'react';


const searchbox = () => {
  return (
      <section id="search-box" className="wrap search-box">
        <div className="gsearch">
          <div className="container">
            <div className="gsearch-info">
              <h4 className="gsearch-info-title">Find Your Place</h4>
              <div className="gsearch-info-content">Instantly find your desired place from your own idea of location, at any price <br/> and other elements just by starting your search now</div>
            </div>
            <div className="gsearch-wrap">
              <form className="gsearchform" method="get" role="search">
                <div className="gsearch-content">
                  <div className="gsearch-field">
                    <div className="form-group glocation">
                      <div className="label-select">
                        <select className="form-control">
                          <option>All Locations</option>
                          <option>New Jersey</option>
                          <option>New York</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group gsub-location">
                      <div className="label-select">
                        <select className="form-control">
                          <option>All Sub-locations</option>
                          <option>Central New York</option>
                          <option>GreenVille</option>
                          <option>Long Island</option>
                          <option>New York City</option>
                          <option>West Side</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group gstatus">
                      <div className="label-select">
                        <select className="form-control">
                        <option>All Status</option>
                        <option>Open house</option>
                        <option>Rent</option>
                        <option>Sale</option>
                        <option>Sold</option>
                      </select>
                      </div>
                    </div>

                    <div className="form-group gtype">
                      <div className="label-select">
                        <select className="form-control">
                          <option>All Type </option>
                          <option>Apartment</option>
                          <option>Co-op</option>
                          <option>Condo</option>
                          <option>Single Family Home</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group gbed">
                      <div className="label-select">
                        <select className="form-control">
                          <option>No. of Bedrooms</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group gbath">
                      <div className="label-select">
                        <select className="form-control">
                          <option>No. of Bathrooms</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group gprice">
                      <span className="gprice-label">Price</span>
                      <div className="gslider-range gprice-slider-range"></div>
                      <span className="gslider-range-value gprice-slider-range-value-min"></span>
                      <span className="gslider-range-value gprice-slider-range-value-max"></span>
                    </div>

                    <div className="form-group garea">
                      <span className="garea-label">Area</span>
                      <div className="gslider-range garea-slider-range"></div>
                      <span className="gslider-range-value garea-slider-range-value-min"></span>
                      <span className="gslider-range-value garea-slider-range-value-max"></span>
                    </div>
                  </div>

                  <div className="gsearch-action">
                    <div className="gsubmit">
                      <a className="btn btn-deault" href="#">Search Property</a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
  );
};

export default searchbox;
