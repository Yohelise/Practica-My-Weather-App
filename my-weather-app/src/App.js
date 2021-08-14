import './App.css';
import { useEffect } from 'react'
import keyJson from './api-key.json' //in order to use API KEY use 'keyJson.APIkey'
import MainPage from './pages/main'

//---------------------------API CALLS TESTING----------------------------------
//-------------------------DELETE ON PRODUCTION---------------------------------

let APIkey = keyJson.APIkey;
let city = 'santa cruz de tenerife';

function setPosition(data) {

  let position = [];

  position.push(data.coord.lat);
  position.push(data.coord.lon);

  return position;

}

const useGetGeoPosition = () => {
  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`)
      .then(result => { return result.json() })
      .then(data => {




      })

  }, [])
}
//--------------------------------------END------------------------------------------

function App() {

  return (

    <MainPage></MainPage>

  );
}


export default App;
