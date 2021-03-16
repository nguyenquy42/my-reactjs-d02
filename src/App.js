import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Home from './pages/home';
import Footer from './components/footer';

class App extends Component {
    render() {

        return (
            <div className="app container-fluid">
                <div className="header-top text-center">
                    <Header />
                </div>
                <div className="home-main">
                    <Home />
                </div>
                <div className="footer-bottom text-center">
                    <Footer />
                </div>
            </div>
        );
    }
}
export default App;