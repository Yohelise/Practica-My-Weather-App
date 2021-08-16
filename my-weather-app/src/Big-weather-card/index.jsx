import React from "react";
import "./style.css";
import LocationSearchingIcon from "@material-ui/icons/LocationSearching";
import CloudQueueIcon from '@material-ui/icons/CloudQueue';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';


function BigWeatherCard(props) {

    const myRef = React.createRef();



    return (




        <div className="container-bwc">
            <div className="bwc-filter">
                <img
                    src="https://www.seekpng.com/png/full/71-712261_lens-clipart-magnifier-search-icon-png-grey.png"
                    alt=""
                    className="search-img"
                />

                <input ref={myRef} type="text" placeholder="Search for places..." className="search_area"></input>
                <LocationSearchingIcon className="location-icon" onClick={() => props.cityName(myRef.current.value)}></LocationSearchingIcon>

            </div>
            <img
                className="bwc-img" alt="sun and cloud"
                src={props.imgMeteo} />

            <div className="content-container">
                <div className="temp-date-container">
                    <h3 className="bwc-temp"> {props.tempActual}<sup>{props.units === 'celsius' ? 'ºC' : 'ºF'}</sup></h3>
                    <h5 className="bwc-date"> {props.day}, <span className="bwc-date time">{props.time}</span></h5>
                </div>

                <div className="bwc-sumary-container">
                    <CloudQueueIcon className="cloud-icon"></CloudQueueIcon>
                    <h6 className="bwc-sumary">{props.description}</h6>
                </div>

                <div className="bwc-rainProb-container">
                    <BeachAccessIcon className="cloud-icon"></BeachAccessIcon>
                    <h6 className="bwc-rainProb"> Rain {props.rainProb}</h6>
                </div>
            </div>

            <div className="right"></div>
        </div>

    )

}
// else {
//     return (


//         <div className="container-bwc">
//             <div className="bwc-filter">
//                 <img
//                     src="https://www.seekpng.com/png/full/71-712261_lens-clipart-magnifier-search-icon-png-grey.png"
//                     alt=""
//                     className="search-img"
//                 />
//                 <input type="text" placeholder="Search for places..." className="search_area"></input>
//                 <LocationSearchingIcon className="location-icon"></LocationSearchingIcon>
//             </div>
//             <img
//                 className="bwc-img" alt="sun and cloud"
//                 src='https://openweathermap.org/img/wn/02d@4x.png' />

//             <div className="content-container">
//                 <div className="temp-date-container">
//                     <h3 className="bwc-temp"> 12ºC</h3>
//                     <h5 className="bwc-date"> Mon, <span className="bwc-date time">21:36</span></h5>
//                 </div>

//                 <div className="bwc-sumary-container">
//                     <CloudQueueIcon className="cloud-icon"></CloudQueueIcon>
//                     <h6 className="bwc-sumary">Some clouds</h6>
//                 </div>

//                 <div className="bwc-rainProb-container">
//                     <CloudQueueIcon className="cloud-icon"></CloudQueueIcon>
//                     <h6 className="bwc-rainProb"> Rain 12%</h6>
//                 </div>
//             </div>

//             <div className="right"></div>
//         </div>
//     )
// }


// }

export default BigWeatherCard;