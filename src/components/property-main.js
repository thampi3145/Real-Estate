import React, { Component } from 'react';
import Propertyheader from './property-header';
import Propertycontent from './property-content';

const propertymain = () => {
    return (
        <div className="noo-content col-xs-12 col-md-8">
            <div className="recent-properties">
                <div className="properties list">
                    <Propertyheader />
                    <Propertycontent />
                </div>
            </div>
        </div>
    );
};

export default propertymain;