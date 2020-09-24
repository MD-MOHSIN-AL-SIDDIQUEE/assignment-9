import React from 'react';
import Navbar from '../Navbar/Navbar';
import './BookingCoxBazar.css';
import CardTravelIcon from '@material-ui/icons/CardTravel';
import { Link, useHistory } from 'react-router-dom';


const BookingCoxBazar = () => {
    const history = useHistory()
    const handleSubmitButton=()=>{
        history.push("/booking/coxbazarHotel")
    }
    return (
        <div className="background ">
            <Navbar></Navbar>
            <div className="container">
            <div className="row  ">
            <div className="col-md-6">
            <h1 className="headingText">Cox's bazar</h1>
            <p  className="bodyText">Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.</p>
            </div> 
         <div className="col-md-6 bookingPage">
             <form onSubmit={ handleSubmitButton}>
                 <h2>origin</h2>
                 <input className="form-control" type="text" required/>
                 <br/>
                <h2>Destination</h2>
                 <input className="form-control" value="Coxbazar"type="text"required/>
                 <br/>
                 <div className="row">

                 <div className="col-6 inputWithIcon">
                 <h2>Form</h2>
                 <input className="form-control" placeholder="dd/mn/yy" type="text"required/>
                 <div className="icon">
                        <CardTravelIcon/>
                    </div>
                 </div>
                
                 <div className="col-6 inputWithIcon">
                 <h2>To</h2>
                    <input className="form-control "placeholder="dd/mn/yy"type="text" required></input>
                    <div className="icon">
                        <CardTravelIcon/>
                    </div>

                 </div>
                 </div>
              <button className="btn btn-warning">Start Booking</button> 
             </form>
            </div>
           </div>
       </div>
       
        </div>
       
    );
};

export default BookingCoxBazar;