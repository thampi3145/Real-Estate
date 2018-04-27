import React, { Component } from 'react';
import Topheader from './top-header';
import Navigation from './navigation';

const header = () => {
  return (
    <header className="noo-header">
      <Topheader />
      <Navigation />
    </header>
  );
};

export default header;



