import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header'
import Tagline from './components/Tagline/Tagline';
import Weather from './components/Weather/Weather';
import Search from './components/Search/Search';
import Footer from './components/Footer/Footer'

function App() {
  const locationSearch = (query) => {
    console.log(query);
  }

  const initialWeather = () => {

  }

  useEffect(() => {
    initialWeather();
  }, []); 

  return (
    <div className='App'>
      <div className='content'>
        <Header />
        <Tagline />
        <Weather />
        <Search locationSearch={locationSearch}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
