import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Tagline from './components/Tagline/Tagline';
import Weather from './components/Weather/Weather';
import Search from './components/Search/Search';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Tagline />
      <Weather />
      <Search />
      <Footer />
    </div>
  );
}

export default App;
