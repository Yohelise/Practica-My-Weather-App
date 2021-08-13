import React from "react";
import "./style.css";
import LocationSearchingIcon from "@material-ui/icons/LocationSearching";
import CloudQueueIcon from '@material-ui/icons/CloudQueue';


function BigWeatherCard() {

    return (
      
      
        <div className="container-bwc">
            <div className="bwc-filter">                
                <img
                    src="https://www.seekpng.com/png/full/71-712261_lens-clipart-magnifier-search-icon-png-grey.png"
                    alt=""
                    className="search-img"
                />
                <input type="text" placeholder="Search for places..." className= "search_area"></input>
                <LocationSearchingIcon className= "location-icon"></LocationSearchingIcon>
            </div>
            <img
                className="bwc-img" alt="sun and cloud"
                src="https://thumbs.dreamstime.com/b/outline-vector-weather-app-icon-meteorological-symbol-cloudy-rain-163950206.jpg" />
            
             <div className= "content-container"> 
             <div className = "temp-date-container">
            <h3 className="bwc-temp"> 12 ºC</h3>
            <h5 className="bwc-date"> Monday, <span className="bwc-date time">16:00</span></h5>
            </div>

            <div className="bwc-sumary-container">
            <CloudQueueIcon className= "cloud-icon"></CloudQueueIcon>
            <h6 className="bwc-sumary"> Mostly Cloudy</h6>
            </div>

            <div className="bwc-rainProb-container">
            <CloudQueueIcon className= "cloud-icon"></CloudQueueIcon>
            <h6 className="bwc-rainProb"> Rain -30%</h6>
            </div>
            </div>  
       
        <div className="right"></div>
        </div>      
        
    );
}

export default BigWeatherCard;