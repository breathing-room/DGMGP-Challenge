import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Weather from './components/Weather/Weather';
import Search from './components/Search/Search';
import Spinner from './components/Spinner/Spinner';
import getCityByCoords from './utils/getCity';
import getWeather from './utils/getWeather';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      city: '',
      lat: 0,
      lng: 0,
      currentDay: '',
      forecast: []
    }
  }

  componentDidMount() {
    this.getCurrentLocationData();
  }

  // Use HTML5 Geolocation API to get user's current coordinates
  getCurrentLocationData() {
    navigator.geolocation.getCurrentPosition((position) => {
      // Call helper function to retrieve city via Google's reverse geocoding API
      getCityByCoords(position.coords.latitude, position.coords.longitude)
        .then((response) => {
          // Set state with data
          this.setState({
              city: response.data,
              lat: position.coords.latitude,
              lng: position.coords.longitude
          }
          )
        })
        .then(() => {
            getWeather(this.state.city)
              .then((response) => {
                this.setState({
                  currentDay: response.data[0],
                  forecast: response.data.slice(1),
                  isLoaded:true
                },
                  this.setState({
                    isLoaded: true
                  })
                )
            })
            .catch(err => console.log(err));
        })
    });
  }

  getNewLocationData(newLocation) {
    this.setState({
      isLoaded: false
    })
      getWeather(newLocation)
      .then(
          (response) => {
            console.log(response);
          this.setState({
              currentDay: response.data[0],
              forecast: response.data.slice(1)
          },
            this.setState({
              isLoaded: true
            })
          )
        },
      )
      .catch(err => { 
        console.log(err);
        this.setState({
          error: true
        })
      });
  };


  handleLocationSearch = (query) => {
    const newLocation = query.split(" ").map((word) => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
    this.setState({
          city: newLocation
    }, 
      this.getNewLocationData(newLocation)
    );
  }

  render() {
    const { error, isLoaded, city, currentDay, forecast } = this.state;
    if (error) {
      return (
        <div className='App'>
          <Header />
          <div className='content'>
            <div style={{padding: '20px'}}>Error: {error.message}</div>;
          </div>
        </div>
        
        )
    } 
    else if (!isLoaded) {
      return (
        <div className='App'>
          <Header />
          <div className='content'>
          <Spinner />
        </div>
      </div>
        )
    } 
    else {
      return (
            <div className='App'>
              <Header />
              <div className='content'>
                <Search handleLocationSearch={this.handleLocationSearch}/>
                <Weather city={city} currentDay={currentDay} forecast={forecast}/>
              </div>
            </div>
          );
      }
    }
  }
  

export default App;
