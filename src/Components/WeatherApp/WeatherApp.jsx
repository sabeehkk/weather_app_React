import React from 'react'
import './WeatherApp.css'
import { TbSearch } from "react-icons/tb";
import  humidity_icon from '../Assets/humidity.jpg'
import { GiWhirlwind } from "react-icons/gi";

import { FaCloudSunRain } from "react-icons/fa6";
import { WiHumidity } from "react-icons/wi";
 function WeatherApp() {
    let api_key ='56f54a7afc223c83f785e49750741896';
    const search =async()=>{
       const element =document.getElementsByClassName("cityInput")
       if(element[0].value===""){
        return 0
       }
       let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`
      let response= await fetch(url)
      let data=await response.json()
      console.log(data.wind.speed,'datass')
      let temp=document.getElementsByClassName('weather-temp')
      let location=document.getElementsByClassName('weather-location')
      let humidity=document.getElementsByClassName('humidity-percent')
      let speed =document.getElementsByClassName('wind-speed')
      temp[0].innerHTML=data.main.temp+"°c"
      location[0].innerHTML=data.name
      humidity[0].innerHTML=data.main.humidity+"%"
      speed[0].innerHTML=data.wind.speed+"km/h"
    }

  return (
    <div className='container'>
        <div className='top-bar'>
            <input type="text" className='cityInput' placeholder='search' />
            <div className='search_icon' onClick={()=>{search()}}>
                <TbSearch/>
            </div>
        </div>
        <div className='weather-image'>
            <FaCloudSunRain className='weather_icon'/>
        </div>
        <div className="weather-temp">34°c</div>
        <div className="weather-location">Areekode</div>
        <div className="data-container">
            <div className="element">
                <WiHumidity className='humidity_icon'/>
                <div className="data">
                    <div className="humidity-percent">64%</div>
                    <div className="text">Humidity</div>
                </div>
            </div>
            <div className="element">
               <GiWhirlwind className='wind_icon'/>
                <div className="data">
                    <div className="wind-speed">44 km/h</div>
                    <div className="text">Wind Speed</div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default WeatherApp