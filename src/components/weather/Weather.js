import { setState, useEffect } from "react"

export default function Weather() {
    // const [weather, setWeather] = setState([]);
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
                'sunrise': new Date(info.sunrise[i]).toTimeString(),
                'sunset': new Date(info.sunset[i]).toTimeString()
            });
        }
        return output;
    }

    useEffect(() => {
        fetch(weatherUrl).then(response => response.json()).then(result => processWeatherData(result)).then(data => console.log(data));
    }, []);

    return (
        <div></div>
    );
}