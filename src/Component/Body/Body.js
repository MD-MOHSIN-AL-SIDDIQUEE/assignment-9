import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Rectangal1 from '../../resources/Image/Rectangle 1.png'
import Sreemongal from '../../resources/Image/Sreemongol.png'
import Sundarban from '../../resources/Image/sundorbon.png'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import './Body.css'
import { Link } from 'react-router-dom';


const Body = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
        <div >
     <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item  >
         <div className="row">
        <div className="col-7">
            <Carousel.Caption>
            <h2>Cox's bazar</h2>
            <p>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
            <Link to="/bookingCoxBazar"><button className="bookingButton">Booking <ArrowForwardIcon/> </button></Link>
            
            </Carousel.Caption>
          </div>
         <div  className="col-5">
            <img
                className="d-block  hight"
                src={Rectangal1}
                alt="CoxBazar"
                />
           </div>
          </div> 
      </Carousel.Item>
      <Carousel.Item>
          <div className="row">
            <div className="col-7">
                <Carousel.Caption>
                <h2>SreeMangal</h2>
                <p>Sreemangal is situated in Moulvibazar district in sylhet division. Sreemangal is an Upazila. It is famous for tea garden. Rain all time occurs here. Nature has adorned sreemangal with green tress. Its natural scenery is very charming. It soothes one’s eyes. Birds are twittering always here....</p>
                <Link to="/bookingSreeMangal"><button className="bookingButton">Booking <ArrowForwardIcon/> </button></Link>
                </Carousel.Caption>

             </div>
             <div className="col-5">
                <img
                className="d-block hight"
                src={ Sreemongal}
                alt="Sreemongal"
                />
            </div>
          </div>
      </Carousel.Item>
 
      <Carousel.Item>
      <div className="row">
          <div className="col-7">
          <Carousel.Caption>
          <h2>Sundarbans</h2>
          <p>
          The Sundarbans are the largest littoral mangrove belt in the world, stretching 80 km (50 mi) into the Bangladeshi and Indian hinterland from the coast. The Sundarbans has been declared a UNESCO World Heritage Site
          </p>
          <Link to="/bookingSundarBan"><button className="bookingButton">Booking <ArrowForwardIcon/> </button></Link>
        </Carousel.Caption>
          </div>
          <div className="col-5">
          <img
          className="d-block  hight"
          src={Sundarban}
          alt="sundarban"
        />
          </div>
          </div>     
      </Carousel.Item>
    </Carousel>
  );
            
        </div>
    );
};

export default Body;