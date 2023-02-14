import './WeatherContainer.css';
import { useEffect, useState } from "react";
import Weather from '../components/weather/Weather'

export default function WeatherContainer() {
    const [weatherState, setWeatherState] = useState([]);
    const weatherUrl = 'https://api.open-meteo.com/v1/forecast?latitude=49.25&longitude=-123.12&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=America%2FLos_Angeles';

    function processWeatherData(data) {
        const info = data.daily;
        const output = [];
        const days = info.time.length;
        for (let i = 0; i < days; i++) {
            output.push({
                'date': info.time[i],
                'weatherCode': info.weathercode[i],
                'maxTemp': info.temperature_2m_max[i],
                'minTemp': info.temperature_2m_min[i],
                'sunrise': info.sunrise[i],
                'sunset': info.sunset[i]
            });
        }
        return output;
    }

    useEffect(() => {
        fetch(weatherUrl).then(response => response.json()).then(result => processWeatherData(result)).then(data => setWeatherState(data));
    }, []);

    return (
        <div className='weatherContainer'>
            <div className='weatherHeader'>
                <h3>Looking to get a ride in?</h3>
                <p>Check the weather forecast below and make sure you dress for the weather.
                    Ride safely!</p>
            </div>
            <div className='weatherGrid'>
                {weatherState.map(day => <Weather key={day.date} weather={day} />)}
            </div>
        </div>
    );
}