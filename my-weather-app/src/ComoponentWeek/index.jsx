import sum from '../asset/sun.png'
import './estilo.css'
import SmallWeatherCard from '../components/small-weather-card';
import MainViewLower from '../pages/main-view-lower';


function ComponentWeek(props) {
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
                <button className=" btn-gnral btn-celcius">ºC</button>
                <button className=" btn-gnral btn-Farighein">ºF</button>



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
                <MainViewLower className='right_panel_lower_view' highlightsInfo={props.highlights}></MainViewLower>
            </div>
        );

    } else {
        return (
            <div className="container-week">
                <p className="title-week">Week</p>
                <button className=" btn-gnral btn-celcius">ºC</button>
                <button className=" btn-gnral btn-Farighein">ºF</button>



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