import './App.css';
import BigWeatherCard from './Big-weather-card';
import ComponentWeek from './ComoponentWeek'

function App() {
  return (
    <div className="main_container">

      <BigWeatherCard className='left_panel'></BigWeatherCard>

      <ComponentWeek className='right_panel'></ComponentWeek>

    </div>

    // this is a test MSG

  );
}


export default App;
