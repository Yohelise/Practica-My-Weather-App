import MediumWeatherCard from '../../components/medium-weather-card'
import './style.css'

function MainViewLower() {

    //TEMPORARY PROPS VALUES, WILL COME FROM API IN THE FUTURE

    let testTitle = 'Test';
    let testValue1 = '5 km/h'
    let testValue2 = '5'
    let testSecondValue = '5:42 pm'
    let testMsg = 'Hola 😊'

    return (
        <div className='main__container'>
            <h4>Today's Highlights</h4>
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