import MediumWeatherCard from '../../components/medium-weather-card'
import './style.css'

function MainViewLower(props) {
    if (props.highlightsInfo !== undefined) {

        const sunrise = new Date(props.highlightsInfo.sunrise * 1000);
        const sunset = new Date(props.highlightsInfo.sunset * 1000);

        const sunriseTime = `${sunrise.getHours() > 10 ? sunrise.getHours() : '0' + sunrise.getHours()}:${sunrise.getMinutes() > 10 ? sunrise.getMinutes() : '0' + sunrise.getMinutes()}`
        const sunsetTime = `${sunset.getHours() > 10 ? sunset.getHours() : '0' + sunset.getHours()}:${sunset.getMinutes() > 10 ? sunset.getMinutes() : '0' + sunset.getMinutes()}`
        // let sunrise = ''
        // let sunset = ''
        const visibility = (parseInt(props.highlightsInfo.visibility) / 1000).toFixed(1);
        let humMsg = '';
        if (props.highlightsInfo.humidity <= 25) humMsg = 'Normal 🤙🏻';
        if (props.highlightsInfo.humidity > 25 && props.highlightsInfo.humidity <= 50) humMsg = 'Average 👍🏼';
        if (props.highlightsInfo.humidity > 50 && props.highlightsInfo.humidity <= 75) humMsg = 'High 💦';
        if (props.highlightsInfo.humidity > 75 && props.highlightsInfo.humidity <= 100) humMsg = 'Extreme 🥵';

        let visMsg = '';
        if (props.highlightsInfo.visibility <= 5000) visMsg = 'Restricted 😑';
        if (props.highlightsInfo.visibility > 5000 && props.highlightsInfo.visibility <= 10000) visMsg = 'Medium 🧐';
        if (props.highlightsInfo.visibility > 10000 && props.highlightsInfo.visibility <= 15000) visMsg = 'Good 👀';
        if (props.highlightsInfo.visibility > 15000) visMsg = 'Perfect ⭐️';



        //receives props.highlightsInfo wich

        console.log(props.highlightsInfo)

        return (
            <div className='main__container'>
                <p className='main_text'>Today's Highlights</p>
                <div className='cards__container'>
                    <MediumWeatherCard title='UV Index' value={props.highlightsInfo.uvi} ></MediumWeatherCard>
                    <MediumWeatherCard title='Wind Status' value={props.highlightsInfo.wind_speed} ></MediumWeatherCard>
                    <MediumWeatherCard title='Sunrise & Sunset' value={sunriseTime} secondaryValue={sunsetTime} ></MediumWeatherCard>
                    <MediumWeatherCard title='Humidity' value={props.highlightsInfo.humidity} msg={humMsg}></MediumWeatherCard>
                    <MediumWeatherCard title='Visibility' value={visibility} msg={visMsg}></MediumWeatherCard>
                </div>
            </div>

        )

    } else { // this will be shown of first render
        return (
            <div className='main__container'>
                <p className='main_text'>Today's Highlights</p>
                <div className='cards__container'>
                    <MediumWeatherCard title='UV Index' value='9.53' ></MediumWeatherCard>
                    <MediumWeatherCard title='Wind Status' value='5.9' ></MediumWeatherCard>
                    <MediumWeatherCard title='Sunrise & Sunset' value='07:43' secondaryValue='21:12' ></MediumWeatherCard>
                    <MediumWeatherCard title='Humidity' value='74%' msg='High 💦'></MediumWeatherCard>
                    <MediumWeatherCard title='Visibility' value='6.0 km' msg='Medium 🧐'></MediumWeatherCard>
                </div>
            </div>

        )
    }
    //TEMPORARY PROPS VALUES, WILL COME FROM API IN THE FUTURE


}

export default MainViewLower;