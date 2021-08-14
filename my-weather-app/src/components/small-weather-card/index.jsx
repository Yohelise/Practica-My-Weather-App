import './style.css'
/**
 * SMALLWEATHERCARD ---PROPS:
 * 
 * day -> week day for the card
 * src -> path to weather image
 * maxTemp -> max temperature for that day
 * minTemp -> min temperature for that day
 */


function SmallWeatherCard(props) {
    return (
        <div className='small_card'>
            <p className='card_day'>{props.day}</p>
            <img className='card_img' src={props.src} alt="sun" />
            <p className='card_text'>{props.maxTemp}<span className='min_temp'>{props.minTemp}</span> </p>
        </div >
    )
}

export default SmallWeatherCard;

