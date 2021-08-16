import BigWeatherCard from "../../Big-weather-card";
import React from 'react';
import ComponentWeek from "../../ComoponentWeek";
import './style.css'
import { useEffect, useState } from 'react'
import keyJson from '../../api-key.json' //in order to use API KEY use 'keyJson.APIkey'
import Skeleton from '@material-ui/lab/Skeleton';


let part = 'minutely,hourly,alerts'//this is to exclude info on the response


//Variables needed for the left lateral panel
// let imgMeteo = '';
// let tempActual = '';
// let dia = '';
// let hora = '';
// let description = '';
// let lluviaProb = '';
//-------------------------------------------------

const MainPage = () => {

    //--------------------------------- STATE VARIABLES-------------------------------
    const [cityState, setCityState] = useState({
        city: ''
    })
    const [loading, setLoading] = useState({
        state: true
    })

    const [units, setUnits] = useState({
        unit: 'metric'
    })
    const [flag, setFlag] = useState({
        value: true
    })



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
            //info for daily small cards
            dailyInfoObject: info.daily,
            //infor for today's highlights
            highlights: info.current

        });
        setLoading({ state: false })
    }
    //----------------------------END OF STATE VARBIABLES----------------------------


    const useGetPosition = (city, flag) => {

        useEffect(() => {


            if (flag.value === true || cityState.city === '') {

                const success = (pos) => {

                    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${pos.coords.latitude}&lon=${pos.coords.latitude}&exclude=${part}&appid=${keyJson.APIkey}&units=${units.unit}`)
                        .then(answer => { return answer.json() })
                        .then(info => {

                            if (info !== undefined) updateState(info);

                        })
                    setFlag({ value: false });
                }

                const error = () => {
                    alert("We can't proceed without your geographic position.")
                }

                navigator.geolocation.getCurrentPosition(success, error);



            } else {

                fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${keyJson.APIkey}`)
                    .then(result => {
                        return result.json()
                    })
                    .then(data => {

                        if (data.coord !== undefined) {
                            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&exclude=${part}&appid=${keyJson.APIkey}&units=${units.unit}`)
                                .then(answer => { return answer.json() })
                                .then(info => {

                                    if (info !== undefined) updateState(info);

                                })
                        } else {
                            alert("You should enter a real city. In any language...")
                        }
                    })

            }
        }, [cityState, units])

    }


    useGetPosition(cityState.city, flag); // flag state variable is used to identify initial render




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

            {loading.state ? <div className='left_panel'><Skeleton animation="wave" variant="rect" width={300} height={733} style={{ borderRadius: '36px 0 0 36px' }} /></div> : <BigWeatherCard className='left_panel' imgMeteo={state.imgMeteo} tempActual={state.tempActual} day={state.dia} time={state.hora} description={state.description} rainProb={state.lluviaProb} units={units.unit} cityName={(city) => setCityState({ city: city })} ></BigWeatherCard>}

            {loading.state ? <div className='right_panel'><Skeleton animation="wave" variant="rect" width={800} height={733} style={{ borderRadius: '0 36px 36px 0' }} /></div> : <ComponentWeek className='right_panel' dailyInfo={state.dailyInfoObject} highlights={state.highlights} updateUnit={(unit) => { setUnits({ unit: unit }) }} units={units.unit}></ComponentWeek>}

        </div>
    )
    //cityName={(city) => setState({ city: city })}
}

export default MainPage;
