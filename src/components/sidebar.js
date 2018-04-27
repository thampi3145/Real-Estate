import React, { Component } from 'react';

const sidebar = () => {
    return (
        <div className="noo-sidebar noo-sidebar-right col-xs-12 col-md-4">
            <div className="noo-sidebar-inner">
            <div className="block-sidebar find-property">
                <h3 className="title-block-sidebar">Find Property</h3>
                <div className="gsearch">
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

            <div className="block-sidebar recent-property">
                <h3 className="title-block-sidebar">Recent Property</h3>
                <div className="featured-property">
                <ul>
                    <li>
                    <div className="featured-image">
                        <a href="property-details.html"><img src="images/property/property1.jpg" alt="" /></a>
                    </div>
                    <div className="featured-decs">
                        <span className="featured-status"><a href="#">For Sale</a></span>
                        <h4 className="featured-title"><a href="property-details.html" title="Visalia, NJ 93277">Visalia, NJ 93277</a></h4>
                    </div>
                    </li>
                    <li>
                    <div className="featured-image">
                        <a href="property-details.html"><img src="images/property/property1.jpg" alt="" /></a>
                    </div>
                    <div className="featured-decs">
                        <span className="featured-status"><a href="#">For Sale</a></span>
                        <h4 className="featured-title"><a href="property-details.html" title="Single Family Residential, NJ">Single Family Residential, NJ</a></h4>
                    </div>
                    </li>

                    <li>
                    <div className="featured-image">
                        <a href="property-details.html"><img src="images/property/property1.jpg" alt="" /></a>
                    </div>
                    <div className="featured-decs">
                        <span className="featured-status"><a href="#">For Rent</a></span>
                        <h4 className="featured-title"><a href="property-details.html" title="Peter Cooper Village">Peter Cooper Village</a></h4>
                    </div>
                    </li>
                </ul>
                </div>
            </div>
            </div>
        </div>
    );
};

export default sidebar;