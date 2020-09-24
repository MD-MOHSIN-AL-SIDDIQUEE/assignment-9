import React from 'react';
import Navbar from '../Navbar/Navbar';
import './CoxbazarHotel.css';
import GoogleMapReact from 'google-map-react';

const CoxbazarHotel = () => {
    const data=[{id:1,image:"https://i.ibb.co/8gx2p9h/Rectangle-26.png",name:" Light bright airy stylish apt & safe peaceful stay",catagory:"coxBazar"},{id:2,image:"https://i.ibb.co/SxTRc2V/Rectangle-27.png",catagory:"coxBazar",name:"Apartment in Lost Panaroma"},{id:3,image:"https://i.ibb.co/bKQ52cR/Rectangle-28.png",catagory:"coxBazar",name:"AR Lounge & Pool (r&r + b&b)"}]
    const defaultProps = {
      center: {
        lat: 21.427229,
        lng: 92.005806
      },
      zoom: 11
    };
    return (
      <div>
        <Navbar></Navbar>
        <div className="container">
        <div className="row ">
           <div className="col-md-6">
           <h3 className="hotelCondition">252 stays Apr 13-17 3 guests</h3>
           <h1 className="hotelAddress">Stay in Cox’s Bazar</h1>
                {
                data.map(item =><Hotel image={item.image} key={item.id} name={item.name} ></Hotel>  )
                }
           </div>
           <div className="col-md-6">
           <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBwKJ_xnej0P69mI02VHlF83ijXR34lsGc" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
        </GoogleMapReact>
      </div>
           </div>
        </div>
        </div>
    
      </div>
      
    );
};

export default CoxbazarHotel;

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