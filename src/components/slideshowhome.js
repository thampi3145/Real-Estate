import React, { Component } from 'react';
import Navigation from './navigation';
import Searchbox from './searchbox';


const slideshowhome = () => {
  return (
     <div className="noo-wrapper">
      <section id="slideshow-home" className="wrap noo-slideshow slideshow-home">
        <div className="property-slider">
          <div id="noo-slider-1" className="noo-slider noo-property-slide-wrap">
            <ul className="sliders">
              <li className="slide-item noo-property-slide">
                <img src="images/slideshow/bg-slide1.jpg" className="attachment-property-slider" alt="" />
                <div className="slide-caption">
                  <div className="slide-caption-info">
                    <h3><a href="property-details.html">Fresno, CA93722</a>
                      <small>6001 W Alluvial Ave</small>
                    </h3>
                    <div className="info-summary">
                      <div className="size">
                        <span>2400 sqft</span>
                      </div>
                      <div className="bathrooms">
                        <span>3</span>
                      </div>
                      <div className="bedrooms">
                        <span>4</span>
                      </div>
                      <div className="property-price">
                        <span>
                          <span className="amount">&#36;309,000</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="slide-caption-action"><a href="property-details.html">More Details</a>
                  </div>
                </div>
              </li>
              <li className="slide-item noo-property-slide">
                <img src="images/slideshow/bg-slide1.jpg" className="attachment-property-slider" alt="" />
                <div className="slide-caption">
                  <div className="slide-caption-info">
                    <h3><a href="property-details.html">Oakland, NJ94605</a>
                      <small>8727 Thermal St</small>
                    </h3>
                    <div className="info-summary">
                      <div className="size">
                        <span>2,568 sqft</span>
                      </div>
                      <div className="bathrooms">
                        <span>2</span>
                      </div>
                      <div className="bedrooms">
                        <span>4</span>
                      </div>
                      <div className="property-price">
                        <span>
                          <span className="amount">&#36;335,000</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="slide-caption-action"><a href="property-details.html">More Details</a>
                  </div>
                </div>
              </li>
              <li className="slide-item noo-property-slide">
                <img src="images/slideshow/bg-slide1.jpg" className="attachment-property-slider" alt="" />
                <div className="slide-caption">
                  <div className="slide-caption-info">
                    <h3><a href="property-details.html">Visalia, NJ 93277</a>
                      <small>3211 S Parkwood Ct</small>
                    </h3>
                    <div className="info-summary">
                      <div className="size">
                        <span>1913 sqft</span>
                      </div>
                      <div className="bathrooms">
                        <span>2</span>
                      </div>
                      <div className="bedrooms">
                        <span>4</span>
                      </div>
                      <div className="property-price">
                        <span>
                          <span className="amount">&#36;154,500</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="slide-caption-action"><a href="property-details.html">More Details</a>
                  </div>
                </div>
              </li>
            </ul>
            <div className="clearfix"></div>
            <div id="noo-slider-1-pagination" className="slider-indicators indicators-center-bottom"></div>
            <a id="noo-slider-1-prev" className="slider-control prev-btn" role="button" href="#">
              <span className="slider-icon-prev"></span>
            </a>
            <a id="noo-slider-1-next" className="slider-control next-btn" role="button" href="#">
              <span className="slider-icon-next"></span>
            </a>
          </div>
        </div>
      </section>
      <Searchbox />
  </div> 
  );
};

export default slideshowhome;
