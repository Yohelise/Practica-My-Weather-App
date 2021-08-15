import BigWeatherCard from "../../Big-weather-card";
import React from 'react';
import ComponentWeek from "../../ComoponentWeek";
import './style.css'
import { useEffect, useState } from 'react'
import keyJson from '../../api-key.json' //in order to use API KEY use 'keyJson.APIkey'

let city = 'santa cruz de tenerife';//testing purposes
let part = 'minutely,hourly,alerts'//this is to exclude info on the response
// check https://openweathermap.org/current#data for open on units posible values and its meaning
let units = 'metric'

// String.prototype.capitalize = function () {
//     return this.charAt(0).toUpperCase() + this.slice(1);
//Variables needed for the left lateral panel
// let imgMeteo = '';
// let tempActual = '';
// let dia = '';
// let hora = '';
// let description = '';
// let lluviaProb = '';
//-------------------------------------------------

const MainPage = () => {


    const [state, setState] = useState({
        imgMeteo: '',
        tempActual: '',
        dia: '',
        hora: '',
        description: '',
        lluviaProb: '',
        units: '',
        //INFO FOR DAILY SMAL WEATHER CARDS. WE SEND THEM THE OBJECT WITH ALL DATA FOR 7 days
        dailyInfoObject: ''
    });
    const updateState = (info) => {
        const date = new Date(info.current.dt * 1000);


        setState({

            //info for lateral left view
            imgMeteo: `https://openweathermap.org/img/wn/${info.current.weather[0].icon}@4x.png`,
            tempActual: Math.round(info.current.temp),
            dia: date.toLocaleString('en-us', { weekday: 'short' }),
            hora: `${date.getHours()}:${date.getMinutes()}`,
            description: info.current.weather[0].description.charAt(0).toUpperCase() + info.current.weather[0].description.slice(1),
            lluviaProb: (parseInt(info.daily[0].pop) * 100) + '%',
            units: 'celsius',
            //info for daily small cards
            dailyInfoObject: info.daily,
            //infor for today's highlights
            highlights: info.current

        });
    }
    const useGetPosition = (city) => {

        useEffect(() => {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${keyJson.APIkey}`)
                .then(result => { return result.json() })
                .then(data => {

                    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&exclude=${part}&appid=${keyJson.APIkey}&units=${units}`)
                        .then(answer => { return answer.json() })
                        .then(info => {
                            console.log(info);
                            console.log('hola')
                            updateState(info);

                        })
                })
        }, [])
    }


    useGetPosition(city);

    // {    STATE STRUCTURE  ---> JUST FOR INFO  -->> PROPS EQUIVALENT
    //     imgMeteo: '',      ----------------------> props.imgMeteo                 
    //     tempActual: '',    ----------------------> props.tempActual
    //     dia: '',           ----------------------> props.day
    //     hora: '',          ----------------------> props.time
    //     description: '',   ----------------------> props.description
    //     lluviaProb: ''     ----------------------> props.rainProb
    //    units: ''         -----------------------> props.units
    // }


    return (
        <div className="main_container">

            <BigWeatherCard className='left_panel' imgMeteo={state.imgMeteo} tempActual={state.tempActual} day={state.dia} time={state.hora} description={state.description} rainProb={state.lluviaProb} units={state.units}></BigWeatherCard>

            <ComponentWeek className='right_panel' dailyInfo={state.dailyInfoObject} highlights={state.highlights}></ComponentWeek>

        </div>
    )
}

export default MainPage;
