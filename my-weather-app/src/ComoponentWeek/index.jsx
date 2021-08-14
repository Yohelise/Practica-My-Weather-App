import sum from '../asset/sun.png'
import './estilo.css'
import SmallWeatherCard from '../components/small-weather-card';

function ComponentWeek() {
    /**
     * SMALLWEATHERCARD ---PROPS:
     * 
     * day -> week day for the card
     * src -> path to weather image
     * maxTemp -> max temperature for that day
     * minTemp -> min temperature for that day
     */

    let testDay = 'Mon'
    let testSrc = sum;
    let testMax = '15º'
    let testMin = '-2º'

    return (

        <div className="container-week">
            <p className="title-week">Week</p>
            <button className=" btn-gnral btn-celcius">ºC</button>
            <button className=" btn-gnral btn-Farighein">ºF</button>


            {/* Contenendor de las card */}
            <div className="container-Card-Week">

                {/*UNA CARD POR CADA DIA DE LA SEMANA*/}
                {/*EN VERSIONES POSTERIORES SE GENERAN LAS 7 EN UN SOLO BUCLE*/}

                <SmallWeatherCard day={testDay} src={testSrc} maxTemp={testMax} minTemp={testMin}></SmallWeatherCard>

                <SmallWeatherCard day={testDay} src={testSrc} maxTemp={testMax} minTemp={testMin}></SmallWeatherCard>

                <SmallWeatherCard day={testDay} src={testSrc} maxTemp={testMax} minTemp={testMin}></SmallWeatherCard>

                <SmallWeatherCard day={testDay} src={testSrc} maxTemp={testMax} minTemp={testMin}></SmallWeatherCard>

                <SmallWeatherCard day={testDay} src={testSrc} maxTemp={testMax} minTemp={testMin}></SmallWeatherCard>

                <SmallWeatherCard day={testDay} src={testSrc} maxTemp={testMax} minTemp={testMin}></SmallWeatherCard>

                <SmallWeatherCard day={testDay} src={testSrc} maxTemp={testMax} minTemp={testMin}></SmallWeatherCard>
            </div>
        </div>
    );
}
export default ComponentWeek;