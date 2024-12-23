import React, { useEffect, useState } from 'react'
import axios from 'axios'

const WeatherData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const response = await axios.get('https://localhost:7005/WeatherForecast');
        setData(response.data);
      } 
      catch (error) {
        console.error('Ошибка при получении данных о погоде:', error);
      }
    };

    getWeatherData();
  }, []);

  return (
    <div>
      <h2>Данные о погоде</h2>
      <table border={1} align='center'>
        <thead>
          <tr>
            <th>Date</th>
            <th>Temp. (C)</th>
            <th>Temp. (F)</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.temperatureC}</td>
              <td>{item.temperatureF}</td>
              <td>{item.summary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WeatherData;