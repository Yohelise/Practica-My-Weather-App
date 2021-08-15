import './style.css'
/**
 * SMALLWEATHERCARD ---PROPS:
 * 
 * dayInfo={props.dailyInfoObject[0]}  <-  object with all the info of the day
 */





function SmallWeatherCard(props) {

    if (props.dayInfo !== undefined) { //this if is only used to avoid a glitch that was bothering me!
        //for some reason on some loads it would break the app if not checked this way
        const date = new Date(props.dayInfo.dt * 1000);

        const icon = props.dayInfo.weather[0].icon


        return (
            <div className='small_card'>
                <p className='card_day'>{date.toLocaleString('en-us', { weekday: 'short' })}</p>
                <img className='card_img' src={`https://openweathermap.org/img/wn/${icon}@4x.png`} alt="sun" />
                <p className='card_text'>{Math.round(props.dayInfo.temp.max)}º   <span className='min_temp'>{Math.round(props.dayInfo.temp.min)}º</span> </p>
            </div >
        )
    } else {
        return (
            <div className='small_card'>
                <p className='card_day'>Mon</p>
                <img className='card_img' src='https://openweathermap.org/img/wn/02d@4x.png' alt="sun" />
                <p className='card_text'>10º   <span className='min_temp'>-2º</span> </p>
            </div >
        )
    }


}

export default SmallWeatherCard;

