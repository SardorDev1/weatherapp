import React from 'react';
import '../assets/style.css'
import { useState,useEffect} from 'react';
import { Fetch } from '../API/Fetch';
import "aos/dist/aos.css";
import AOS from 'aos';
const Section = () => {
    const [query, setQuery] = useState("")
    const [weather, setWeather] = useState({});


useEffect(() => {
    AOS.init();
})

    const search = async (e) => {
        if (e.key === 'Enter') {
            const data = await Fetch(query).catch(() => {
        alert(`Cannot get "${query}" 404 Error`)
                window.open("/error")
            
            })
            setWeather(data);
            setQuery();
            console.log(data);

        }

    }
    function Remove(){
setWeather({})
setQuery("")
    }
    return (

        <>


            <div className="container" >


                <div className="row">

                    <div className="col-lg-12 mt-5">
                        <input value={query} onChange={(e) => setQuery(e.target.value)} onKeyPress={search} className='input  mx-auto mt-5' type="text" placeholder='Write your Country' />

                    </div>


                </div>
                {weather.main && (
                    <div  data-aos-duration="1500" data-aos="fade-up" className="card">
                       <span onClick={(e) => Remove()} className='remove'>X</span>
                        <div className="details">
                            <h2 className="city-name" >
                                <span>{weather.name}</span>
                                <sup>{weather.sys.country}  </sup>
                            </h2>
                        </div>
                        <div className="info">
                            <img className='logo_weather' src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="Error Icon" />

                        </div>
                        <div className="weather">
                            <h2>
                                {Math.round(weather.main.temp)}
                                <sup>&deg;C</sup>
                            </h2>
                            <p>{weather.weather[0].description}</p>
                        </div>
                    </div>
                )}
            </div>

        </>
    );
};



export default Section;