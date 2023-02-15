import './Weather.css';
import { wmoCode } from '../resources/wmoCode';

export default function Weather(props) {
    const weather = props.weather;
    // Since we are not using external libraries like moment.js
    // We need timestamp with timezone information to obtain day-of-week (DOW) correctly
    // Since only sunrise/sunset times are timestamps, we will use them to get DOW instead
    const dow = new Date(weather.sunrise).toLocaleDateString('en-US', { weekday: 'short' });
    const getTime = (timestamp) => new Date(timestamp).toLocaleTimeString('en-US');
    return (
        <div className='weather'>
            <span>{weather.date} ({dow})</span>
            <span>{wmoCode[weather.weatherCode]}</span>
            <span>High: {weather.maxTemp} C</span>
            <span>Low: {weather.minTemp} C</span>
            <span>Sunrise: {getTime(weather.sunrise)}</span>
            <span>Sunset: {getTime(weather.sunset)}</span>
        </div>
    )
}