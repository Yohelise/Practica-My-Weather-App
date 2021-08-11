import sum from '../asset/sun.png'
import './estilo.css'

function ComponentWeek(){

    return(

        <div className="container-week">
            <h4>Week</h4>
            <button className=" btn-gnral btn-celcius">ºC</button>
            <button className=" btn-gnral btn-Farighein">ºF</button>
            

               {/* Contenendor de las card */} 
            <div  className="container-Card-Week">
            <div className= "container-sun">
                <p>Sun</p>
                <img className="img-sun" src={sum} alt="sun" />
                <p>15º <span className="spam-styl">-3</span> </p>
            </div >
            <div className= "container-sun">
                <p>Mon</p>
                <img className="img-sun" src={sum} alt="sun" />
                <p>12º <span className="spam-styl">-7º</span> </p>
            </div>
            <div className= "container-sun">
                <p>Tue</p>
                <img className="img-sun" src={sum} alt="sun" />
                <p>9º <span className="spam-styl">-7º</span> </p>
            </div>

            <div className= "container-sun">
                <p>Wed</p>
                <img className="img-sun" src={sum} alt="sun" />
                <p>8º <span className="spam-styl">-1º</span> </p>
            </div >
            <div className= "container-sun">
                <p>Thu</p>
                <img className="img-sun" src={sum} alt="sun" />
                <p>5º <span className="spam-styl">-2º</span> </p>
            </div>
            <div className= "container-sun">
                <p>Fri</p>
                <img className="img-sun" src={sum} alt="sun" />
                <p>4º <span className="spam-styl">-4º</span> </p>
            </div>

            <div className= "container-sun">
                <p>Sat</p>
                <img className="img-sun" src={sum} alt="sun" />
                <p>3º <span className="spam-styl">-3º</span> </p>
            </div>

            </div>
        </div>        
    );
}
export default ComponentWeek;