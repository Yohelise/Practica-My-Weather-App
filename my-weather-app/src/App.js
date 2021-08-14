import './App.css';
import BigWeatherCard from './Big-weather-card';
import ComponentWeek from './ComoponentWeek'
import MainViewLower from './pages/main-view-lower';
function App() {
  return (
    <div className="main_container">

      <BigWeatherCard className='left_panel'></BigWeatherCard>

      <ComponentWeek className='right_panel'></ComponentWeek>

    </div>


  );
}


export default App;
