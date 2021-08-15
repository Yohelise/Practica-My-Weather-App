import MediumWeatherCard from '../../components/medium-weather-card'
import './style.css'

function MainViewLower(props) {

    //TEMPORARY PROPS VALUES, WILL COME FROM API IN THE FUTURE

    let testTitle = 'Test';
    let testValue1 = '5 km/h'
    let testValue2 = '5'
    let testSecondValue = '5:42 pm'
    let testMsg = 'Hola 😊'

    //receives props.highligths wich

    console.log(typeof props.highlights)

    return (
        <div className='main__container'>
            <p className='main_text'>Today's Highlights</p>
            <div className='cards__container'>
                <MediumWeatherCard title={testTitle} value={testValue2} ></MediumWeatherCard>
                <MediumWeatherCard title={testTitle} value={testValue1} ></MediumWeatherCard>
                <MediumWeatherCard title={testTitle} value={testValue1} secondaryValue={testSecondValue} ></MediumWeatherCard>
                <MediumWeatherCard title={testTitle} value={testValue1} msg={testMsg}></MediumWeatherCard>
                <MediumWeatherCard title={testTitle} value={testValue1} msg={testMsg}></MediumWeatherCard>
            </div>
        </div>

    )
}

export default MainViewLower;