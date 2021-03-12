import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Home from './pages/home';
import Footer from './components/footer';

class App extends Component {
  render() {

    return (
      <div className="app">
        <div className="header-top">
          <Header />
        </div>
        <div className="home-main">
          <Home />
        </div>
        <div className="footer-bottom">
          <Footer />
        </div>
      </div>
    );
  }

}

export default App;
