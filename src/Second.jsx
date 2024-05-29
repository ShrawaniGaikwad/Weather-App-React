import { useState } from 'react';
import './Second.css';
import axios from 'axios';
import { Oval } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';

// Import Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faCloud, faCloudRain, faSnowflake, faSmog } from '@fortawesome/free-solid-svg-icons';

const apiurl = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = 'f00c38e0279b7bc85480c3fe775d518c';

function Second() {
    const navigate = useNavigate();
    const [location, setLocation] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchWeather = () => {
        setLoading(true);
        axios.get(`${apiurl}?q=${location}&appid=${apiKey}&units=metric`)
            .then(response => {
                setWeatherData(response.data);
                setLoading(false);
                setError(false); // Reset error state on successful fetch
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                setLoading(false);
                setWeatherData(null);
                setError(true); // Set error state when unable to fetch weather data
            });
    };

    const handleSearch = () => {
        if (location) {
            fetchWeather();
        }
    };

    const fun = () => {
        navigate('/');
    }

    // Function to render weather icon based on weather condition
    const renderWeatherIcon = () => {
        if (!weatherData || !weatherData.weather || weatherData.weather.length === 0) return null;

        const weatherIcon = weatherData.weather[0].icon;
        switch (weatherIcon) {
            case '01d':
            case '01n':
                return <FontAwesomeIcon icon={faSun} style={{ color: '#F9A825' }} />;
            case '02d':
            case '02n':
            case '03d':
            case '03n':
                return <FontAwesomeIcon icon={faCloud} style={{ color: '#607D8B' }} />;
            case '04d':
            case '04n':
                return <FontAwesomeIcon icon={faCloudRain} style={{ color: '#64B5F6' }} />;
            case '09d':
            case '09n':
            case '10d':
            case '10n':
                return <FontAwesomeIcon icon={faCloudRain} style={{ color: '#1976D2' }} />;
            case '11d':
            case '11n':
                return <FontAwesomeIcon icon={faSmog} style={{ color: '#FF9800' }} />;
            case '13d':
            case '13n':
                return <FontAwesomeIcon icon={faSnowflake} style={{ color: '#FFFFFF' }} />;
            case '50d':
            case '50n':
                return <FontAwesomeIcon icon={faSmog} style={{ color: '#FF9800' }} />;
            default:
                return null;
        }
    };

    return (
        <>
        <div style={{textAlign:'center',marginTop:100,color:'#0e0069'}}>
            <h1>Enter a Appropriate Location to get the weather forecast</h1>
        </div>
        <div className="container">
            <h1>Weather App</h1>
            <input
                type="text"
                placeholder="Enter a city"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                
            />
            
            <button onClick={handleSearch}>Search</button>
            {loading ? (
                <div className="loading-spinner">
                    <Oval color="#00BFFF" height={40} width={40} />
                </div>
            ) : error ? (
                <div className="error-message">
                   <p style={{color:'red'}}> Invalid location. Please try again.
                   </p>
                </div>
            ) : (
                weatherData && (
                    <div className='container2'>
                    <div className="weather-info">
                        <h2>{weatherData.name}</h2>
                        <p className="date-time">{new Date().toLocaleString()}</p>
                        <p>{Math.round(weatherData.main.temp)}°C</p>
                        <h1>{weatherData.weather[0].description}</h1>
                        {renderWeatherIcon()}
                    </div>
                    </div>
                )
            )}
           
        </div>
        <div style={{textAlign:'center',marginTop:50}}>
        <button  onClick={fun}>Back</button>
        </div>
    
         </>
    );
}

export default Second;
