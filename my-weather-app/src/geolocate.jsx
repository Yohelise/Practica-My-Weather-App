


/**
 * THIS FILE IS NOT BEING USED YET
 */



import keyJson from './api-key.json'


const getGeographicPosition = () => {

    let ans = ''
    let part = 'minutely,hourly,alerts'//this is to exclude info on the response

    const success = (data) => {

    }

    const error = () => {
        alert("We can't proceed without your geographic position.")
    }

    navigator.geolocation.getCurrentPosition(success, error);
}

export default getGeographicPosition();


