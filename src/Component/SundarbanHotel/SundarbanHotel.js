import React from 'react';
import GoogleMap from '../GoogleMap/GoogleMap';
import Navbar from '../Navbar/Navbar';
import './SundarbanHotel.css';

const SundarbanHotel = () => {
    const data=[{id:1,image:"https://i.ibb.co/8gx2p9h/Rectangle-26.png",name:" Light bright airy stylish apt & safe peaceful stay",catagory:"sundarban"},{id:2,image:"https://i.ibb.co/SxTRc2V/Rectangle-27.png",catagory:"sundarban",name:"Apartment in Lost Panaroma"},{id:3,image:"https://i.ibb.co/bKQ52cR/Rectangle-28.png",catagory:"sundarban",name:"AR Lounge & Pool (r&r + b&b)"}]
   
    return (
      <div>
        <Navbar></Navbar>
        <div className="container">
        <div className="row ">
           <div className="col-md-6">
           <h3 className="hotelCondition">252 stays Apr 13-17 3 guests</h3>
           <h1 className="hotelAddress">Stay in Sundarban</h1>
                {
                data.map(item =><Hotel image={item.image} key={item.id} name={item.name} ></Hotel>  )
                }
           </div>
           <div className="col-md-6">
            <GoogleMap latitude="22.000990"longitude="88.679893"></GoogleMap>
           </div>
        </div>
        </div>
    
      </div>
      
    );
};

export default SundarbanHotel;

function Hotel(props){
    console.log(props.image)
    return(
      <div className="row">
          <div className="col-md-6 hotelImage">
          <img src={props.image} alt=""/>
          </div>
          <div className="col-md-6 hotelFeatures">
            <h1 className="hotelName">{props.name}</h1>
            <p>4 guests   2 bedrooms   2 beds   2 baths</p>
            <p>Wif Air conditioning Kitchen</p>
            <p>Cancellation fexibility availiable</p>
          </div>
      </div>  
    )
}