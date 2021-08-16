
import './estilo.css'
import SmallWeatherCard from '../components/small-weather-card';
import MainViewLower from '../pages/main-view-lower';
import { useState } from 'react';


function ComponentWeek(props) {

    //fahrenheit
    //this 2 states are 
    let [buttonA, setButtonA] = useState({ class: "btn-gnral btn-celcius" });
    let [buttonB, setButtonB] = useState({ class: "btn-gnral btn-fahrenheit" });
    /**
     * SMALLWEATHERCARD ---PROPS:
     * 
     * day -> week day for the card
     * src -> path to weather image
     * maxTemp -> max temperature for that day
     * minTemp -> min temperature for that day
     */

    // THIS COMPONENT RECEIVES props.dailyInfoObject WHICH CONTAINS AN OBJECT WITH INFORMATION FOR THE NEXT 7 DAYS

    if (props.dailyInfo !== undefined) {
        return (

            <div className="container-week">


                <p className="title-week">Week</p>
                <button className={buttonA.class} onClick={() => {
                    if (buttonA.class === "btn-gnral btn-celcius") {
                        setButtonA({ class: "btn-gnral btn-fahrenheit" });
                        setButtonB({ class: "btn-gnral btn-celcius" });
                        props.updateUnit('imperial')
                    } else {
                        setButtonA({ class: "btn-gnral btn-celcius" });
                        setButtonB({ class: "btn-gnral btn-fahrenheit" });
                        props.updateUnit('metric')
                    }



                }}>ºC</button>
                <button className={buttonB.class} onClick={() => {
                    if (buttonB.class === "btn-gnral btn-fahrenheit") {
                        setButtonA({ class: "btn-gnral btn-fahrenheit" });
                        setButtonB({ class: "btn-gnral btn-celcius" });
                        props.updateUnit('imperial')
                    } else {
                        setButtonA({ class: "btn-gnral btn-celcius" });
                        setButtonB({ class: "btn-gnral btn-fahrenheit" });
                        props.updateUnit('metric')
                    }
                }}>ºF</button>




                {/* Contenendor de las card */}
                <div className="container-Card-Week">

                    {/*UNA CARD POR CADA DIA DE LA SEMANA*/}
                    {/*EN VERSIONES POSTERIORES SE GENERAN LAS 7 EN UN SOLO BUCLE  quizas no podamos hacerlo ya que en el primer render no existe la prop*/}

                    <SmallWeatherCard dayInfo={props.dailyInfo[1]}></SmallWeatherCard>

                    <SmallWeatherCard dayInfo={props.dailyInfo[2]}></SmallWeatherCard>

                    <SmallWeatherCard dayInfo={props.dailyInfo[3]}></SmallWeatherCard>

                    <SmallWeatherCard dayInfo={props.dailyInfo[4]}></SmallWeatherCard>

                    <SmallWeatherCard dayInfo={props.dailyInfo[5]}></SmallWeatherCard>

                    <SmallWeatherCard dayInfo={props.dailyInfo[6]}></SmallWeatherCard>

                    <SmallWeatherCard dayInfo={props.dailyInfo[7]}></SmallWeatherCard>
                </div>
                <MainViewLower className='right_panel_lower_view' highlightsInfo={props.highlights} units={props.units}></MainViewLower>
            </div>
        );

    } else {
        return (
            <div className="container-week">
                <p className="title-week">Week</p>
                <button className={buttonA} >ºC</button>
                <button className={buttonB}>ºF</button>



                {/* Contenendor de las card */}
                <div className="container-Card-Week">

                    {/*UNA CARD POR CADA DIA DE LA SEMANA*/}
                    {/*EN VERSIONES POSTERIORES SE GENERAN LAS 7 EN UN SOLO BUCLE  quizas no podamos hacerlo ya que en el primer render no existe la prop*/}

                    <SmallWeatherCard></SmallWeatherCard>

                    <SmallWeatherCard></SmallWeatherCard>

                    <SmallWeatherCard></SmallWeatherCard>

                    <SmallWeatherCard></SmallWeatherCard>

                    <SmallWeatherCard></SmallWeatherCard>

                    <SmallWeatherCard></SmallWeatherCard>

                    <SmallWeatherCard></SmallWeatherCard>
                </div>
                <MainViewLower className='right_panel_lower_view' highlightsInfo={props.highlights}></MainViewLower>
            </div>
        )
    }


}

export default ComponentWeek;