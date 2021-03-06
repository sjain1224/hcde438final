import React, { Component } from 'react';
import Header from './components/header';
import About from './components/about';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Footer from './components/footer';
import './App.css'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Portfolio />
        <About />
        <Contact />
        <Footer />
      </div>
    );
  }
  
}

export default App;
