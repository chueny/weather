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
        // console.log(city);
        //Lat and lon requires use of Google Map Longitude and Latitude
        // const lat = 44.9778;
        // const lon = 93.2650;
        const API = 'df30b708b88ffefd6d16641249bc3a30';

        const fetch_data = await fetch(
            //api below requires lon and lattitude. may need google map to do it. 
           // `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API}`
           `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`
        );
        
        
       const data = await fetch_data.json();
       console.log(data);
    //    console.log(data.weather[0].icon);
    //    console.log("description", data.weather[0].main);
    //    console.log(data.message);
       if (!data.message) {
        setData({
            temperature: data.main.temp,
            city: data.name,
            country: data.sys.country,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            error: undefined
           });
       } else {
        setData({
            error: "City not found"
        });
       }
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
