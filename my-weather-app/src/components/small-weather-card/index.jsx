import './style.css'
/**
 * SMALLWEATHERCARD ---PROPS:
 * 
 * dayInfo={props.dailyInfoObject[0]}  <-  object with all the info of the day
 */





function SmallWeatherCard(props) {

    const date = new Date(props.dayInfo.dt * 1000);

    const icon = props.dayInfo.weather[0].icon


    return (
        <div className='small_card'>
            <p className='card_day'>{date.toLocaleString('en-us', { weekday: 'short' })}</p>
            <img className='card_img' src={`https://openweathermap.org/img/wn/${icon}@4x.png`} alt="sun" />
            <p className='card_text'>{props.dayInfo.temp.max}<span className='min_temp'>{props.dayInfo.temp.min}</span> </p>
        </div >
    )
}

export default SmallWeatherCard;

