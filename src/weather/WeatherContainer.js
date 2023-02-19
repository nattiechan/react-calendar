import './WeatherContainer.css';
import { useEffect, useState } from "react";
import Weather from './Weather'

export default function WeatherContainer() {
    const [weatherState, setWeatherState] = useState([]);

    useEffect(() => {
        fetch('/weather').then(response => response.json()).then(data => setWeatherState(data));
    }, []);

    return (
        <section className='weatherContainer'>
            <header className='weatherHeader'>
                <h3>Looking to get a ride in?</h3>
                <p>Check the weather forecast below and make sure you dress for the weather.
                    Ride safely!</p>
            </header>
            <div className='weatherGrid'>
                {weatherState.map(day => <Weather key={day.date} weather={day} />)}
            </div>
        </section>
    );
}