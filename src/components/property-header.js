import React, { Component } from 'react';

const propertyheader = () => {
    return (
        <div className="properties-header">
            <h1 className="page-title">Properties</h1>
            <div className="properties-toolbar">
                <a href="grid-with-sidebar.html" data-toggle="tooltip" data-placement="bottom" title="Grid"><i className="fa fa-th-large"></i></a>
                <a className="selected" href="list-with-sidebar.html" data-toggle="tooltip" data-placement="bottom" title="List"><i className="fa fa-list"></i></a>
                <form className="properties-ordering" method="get">
                    <div className="properties-ordering-label">Sorted by</div>
                    <div className="form-group properties-ordering-select">
                        <div className="label-select">
                            <select className="form-control">
                                <option>Date</option>
                                <option>Bath</option>
                                <option>Bed</option>
                                <option>Area</option>
                                <option>Name</option>
                            </select>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default propertyheader;