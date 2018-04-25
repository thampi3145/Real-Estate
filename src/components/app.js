import React, { Component } from 'react';
import Header from './header';
import Slideshowhome from './slideshowhome';
import Footer from './footer';

export default class App extends Component {
  render() {
      
    return (
      <div className="container">
      
      <Header />
      <Slideshowhome />
      <Footer />
     </div>
  );
};
}
