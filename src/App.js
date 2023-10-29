import React, { useEffect, useState } from 'react';
import './App.css';
import background from './images/thunder.jpg';
import axios from 'axios';
import MainSection from './Components/mainSection';

const App = () => {


  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const fetchData = async () => {

    const apiKey = "0a551e5ea51b9babbcad9b24623faf5d";

    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`
      );
      setWeatherData(res.data);
      setSubmitted(true);
      console.log(res.data);
    } catch (error) {
      console.log('Error fetching the data');
    }
  }


  return (

        <div className='app'>
          <div className='center-container'>
            <div className='Search'>
              <input type='text' placeholder='Enter a city...' value={location} onChange={(e) => setLocation(e.target.value)} className='SearchBar' />
              <button type='submit' className='Searchbtn' onClick={() => fetchData()}>Submit</button>
            </div>
          

            {submitted ? (
              location ? (
                <div className="center-div">
                  <MainSection place={location} data={weatherData}/>
                </div>
              ) : (
                <p className='text-red-400'></p>
              )
            ) : null}

          
          </div>
        </div> 
  );
};

export default App;
