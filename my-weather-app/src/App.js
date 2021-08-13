import './App.css';
import BigWeatherCard from './Big-weather-card';
import ComponentWeek from './ComoponentWeek'
function App() {
  return (
    <div className="app_container">
    <div className= "total-container">
    <BigWeatherCard></BigWeatherCard>
    <div className="main-view"></div>
    <ComponentWeek></ComponentWeek>
    <div className="medium-weather-card"></div>
    </div>

  </div>
  );
}

export default App;
