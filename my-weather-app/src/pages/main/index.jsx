import BigWeatherCard from "../../Big-weather-card";
import ComponentWeek from "../../ComoponentWeek";
import './style.css'

const MainPage = () => {
    return (
        <div className="main_container">

            <BigWeatherCard className='left_panel'></BigWeatherCard>

            <ComponentWeek className='right_panel'></ComponentWeek>

        </div>
    )
}

export default MainPage;
