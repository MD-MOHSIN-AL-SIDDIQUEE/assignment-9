import React from 'react';
import Navbar from '../Navbar/Navbar';
import './BookingSundarBan.css';
import CardTravelIcon from '@material-ui/icons/CardTravel';
import {  useHistory } from 'react-router-dom';

const BookingSundarBan = () => {
  const history = useHistory()
  const handleSubmitButton=()=>{
      history.push("/booking/sundarbanHotel")
  }
    return (
        <div className="backgroundSundarban ">
        <Navbar></Navbar>
          <div className="container">
           <div className="row  ">
             <div className="col-md-6">
               <h1 className="headingText">SundarBan</h1>
               <p  className="bodyText">The Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal. It spans from the Hooghly River in India's state of West Bengal to the Baleswar River in Bangladesh. It comprises closed and open mangrove forests, agriculturally used land, mudflats and barren land, and is intersected by multiple tidal streams and channels.</p>
           </div> 
         <div className="col-md-6 bookingPage">
           <form onSubmit={ handleSubmitButton}>
             <h2>origin</h2>
             <input className="form-control" type="text"required/>
             <br/>
            <h2>Destination</h2>
             <input className="form-control" value="Sundarban"type="text"required/>
             <br/>
             <div className="row">
               <div className="col-6 inputWithIcon">
                 <h2>Form</h2>
                 <input className="form-control" type="text"required/>
               <div className="icon">
                    <CardTravelIcon/>
                </div>
             </div>
            
             <div className="col-6 inputWithIcon">
                <h2>To</h2>
                <input className="form-control "type="text" required></input>
                <div className="icon">
                    <CardTravelIcon/>
                </div>
            
               </div>
             </div>
               <button type="submit"className="btn btn-warning">Start Booking</button>
             
         </form>
        </div>
       </div>
   </div>
   
    </div>
   
);
    
};

export default BookingSundarBan;