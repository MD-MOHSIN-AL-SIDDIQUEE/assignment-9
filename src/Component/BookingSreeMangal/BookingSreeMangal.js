import React from 'react';
import Navbar from '../Navbar/Navbar';
import './BookingSreeMangal.css';
import CardTravelIcon from '@material-ui/icons/CardTravel';
import {  useHistory } from 'react-router-dom';

const BookingSreeMangal = () => {
  const history = useHistory()
  const handleSubmitButton=()=>{
      history.push("/booking/SreeMangalHotel")
  }
    return (
        <div className="backgroundSreeMangal">
        <Navbar></Navbar>
          <div className="container">
           <div className="row  ">
             <div className="col-md-6">
               <h1 className="headingText">SreeMangal</h1>
               <p  className="bodyText">Sreemangal is situated in Moulvibazar district in sylhet division. Sreemangal is an Upazila. Madhobpur Lake is one of the main tourist attractions in the area,[3][4][5] and is home to the Great White-Bellied Heron, the only confirmed site in Bangladesh.[6] The Baikka beel is also a nearby body of water and home to the Large-billed reed warbler.[7] Sreemangal has been nicknamed the tea capital of Bangladesh, due to the number of tea gardens in the area, and is the place of origin of the Seven Color Tea.[2] The Bangladesh Tea Research Institute in Sreemangal has made a number of contributions in evolving and standardising the quality of tea, and introducing its research findings to the tea industry of Bangladesh</p>
           </div> 
         <div className="col-md-6 bookingPage">
           <form onSubmit={ handleSubmitButton}>
             <h2>origin</h2>
             <input className="form-control" type="text"/>
             <br/>
            <h2>Destination</h2>
             <input className="form-control" value="Sreemangal" type="text"/>
             <br/>
             <div className="row">
               <div className="col-6 inputWithIcon">
                 <h2>Form</h2>
                 <input className="form-control" type="text"/>
               <div className="icon">
                    <CardTravelIcon/>
                </div>
             </div>
            
             <div className="col-6 inputWithIcon">
                <h2>To</h2>
                <input className="form-control "type="text"></input>
                <div className="icon">
                    <CardTravelIcon/>
                </div>
            
               </div>
             </div>
              <button type="submit" className="btn btn-warning">Start Booking</button>
         </form>
        </div>
       </div>
   </div>
   
    </div>
   
);
    
};

export default BookingSreeMangal;