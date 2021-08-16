import './style.css'



function MediumWeatherCard(props) {


    /**
     * COMPONENT PROPS:
     * title={testTitle} value={testValue} secondaryValue={testSecondValue} msg={testMsg}
     * title -> gray letter main card title
     * value ->  shown value
     * secondaryValue -> in case of a 2 values cards it'll contain the second msg, needs to be checked
     * msg -> the small msg on bottom of some cards, again need to be ckeched or sent as an empty string
     */

    return (
        <div className='container'>
            <h4 className='card__title'>{props.title}</h4>
            {/* <p className='card__value'>{props.value}</p> */}
            {props.title === 'UV Index' ? <p className='card__value'>{props.value}</p> : ''}
            {props.title === 'Wind Status' ? <p className='wind-status'>{props.value} <span className='units'> {props.units === 'metric' ? 'm/s' : 'km/h'} </span></p> : ''}
            {props.title === 'Sunrise & Sunset' ? <p className="sun-values">{props.value} </p> : ''}
            {props.secondaryValue === '' ? '' : <p className='sun-values'>{props.secondaryValue} </p>}
            {props.title === 'Humidity' ? <p className="humidity">{props.value} <span className='units'> <sup className="sup-humidity">%</sup> </span></p> : ''}
            {props.title === 'Visibility' ? <p className="visibility">{props.value} <span className='units'> Km </span></p> : ''}
            {props.msg === '' ? <br></br> : <p className='card__msg'>{props.msg}</p>}


        </div>
    )
}

export default MediumWeatherCard;