import './App.css';
import BigWeatherCard from './Big-weather-card';
import ComponentWeek from './ComoponentWeek'
import MainViewLower from './pages/main-view-lower';
function App() {
  return (
    <div className="main_container">
      <BigWeatherCard className='left_panel'></BigWeatherCard>
      <div className='right_panel'>
        <ComponentWeek className='right_panel_upper_view'></ComponentWeek>
        <MainViewLower className='right_panel_lower_view'></MainViewLower>

      </div>
    </div>


  );
}


export default App;
