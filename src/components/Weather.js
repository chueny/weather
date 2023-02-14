import {useState, useEffect } from 'react';

const url = "https://api.openweathermap.org/data/2.5/weather?q={city}&appid={df30b708b88ffefd6d16641249bc3a30}"

export default function Weather() {
const [city, setCity] = useState("");

    useEffect(()=> {
        getWeather();
    }, []);

    async function getWeather(){    
        const res = await fetch(url);
        const json = await res.json();

        setCity(json.city)

    


    }

    return (
        <div>
           
        </div>
    )
};
