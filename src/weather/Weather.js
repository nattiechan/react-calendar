import './Weather.css';

export default function Weather(props) {
    const weather = props.weather;
    return (
        <div className='weather'>
            <span>{weather.date} ({weather.dow})</span>
            <span>{weather.forecast}</span>
            <span>High: {weather.maxTemp} C</span>
            <span>Low: {weather.minTemp} C</span>
            <span>Sunrise: {weather.sunrise}</span>
            <span>Sunset: {weather.sunset}</span>
        </div>
    )
}