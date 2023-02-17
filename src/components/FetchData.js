import {useState, useEffect } from 'react';
import Headings from './Headings';
import Form from './Form';
import Weather from './Weather';


export default function FetchData() {
const [data, setData] = useState({});

    useEffect(()=> {
        getWeather();
    }, []);

    const getWeather = async (e) => {   
        e.preventDefault();
        const city = e.target.elements.city.value;
        console.log(city);
        //Lat and lon requires use of Google Map Longitude and Latitude
        // const lat = 44.9778;
        // const lon = 93.2650;
      

        const fetch_data = await fetch(
            //api below requires lon and lattitude. may need google map to do it. 
           // `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API}`
           `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`
        );
        
        
       const data = await fetch_data.json();
       console.log(data);
       

    


    }

    return (
        <div>
           <div className="wrapper">
        <div className="main">
            <div className="title-container">
              <Headings />
            </div>
            <div className="form_data-container">
              <Form getWeather={getWeather} />
              <Weather data={data} />
            </div>
          </div>
        </div>
        </div>
    )
};
