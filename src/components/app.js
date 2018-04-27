import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import Slideshowhome from './slideshowhome';

export default class App extends Component {
  render() {
      
    return (
      <div className="home page-fullwidth ">
      <div className="site">
        <Header />
        <Slideshowhome />
        <Footer />
        </div>
     </div>
  );
};
}
