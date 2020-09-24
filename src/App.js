import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home';
import NoMatch from './Component/NoMatch/NoMatch';
import SignUp from './Component/SignUp/SignUp';
import BookingCoxBazar from './Component/BookingCoxBazar/BookingCoxBazar';
import BookingSreeMangal from './Component/BookingSreeMangal/BookingSreeMangal';
import BookingSundarBan from './Component/BookingSundarBan/BookingSundarBan';
import Login from './Component/Login/Login';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import CoxbazarHotel from './Component/CoxbazarHotel/CoxbazarHotel';
import SundarbanHotel from './Component/SundarbanHotel/SundarbanHotel';
import SreeMangalHotel from './Component/SreeMangalHotel/SreeMangalHotel';

export const userContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser] = useState({});
 
  return (
   <userContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <Router>
        <Switch>
        <Route path="/home">
        <Home></Home>
        </Route>
        <Route path="/login">
        <Login></Login>
        </Route>
        <Route path="/bookingCoxBazar">
       <BookingCoxBazar></BookingCoxBazar>
        </Route>
        <Route path="/bookingSreeMangal">
       <BookingSreeMangal></BookingSreeMangal>
        </Route>
        <Route path="/bookingSundarBan">
       <BookingSundarBan></BookingSundarBan>
        </Route>
        <PrivateRoute path="/booking/coxbazarHotel">
        <CoxbazarHotel></CoxbazarHotel>
        </PrivateRoute>
        <PrivateRoute path="/booking/sundarbanHotel">
        <SundarbanHotel></SundarbanHotel>
        </PrivateRoute>
        <PrivateRoute path="/booking/SreeMangalHotel">
        <SreeMangalHotel></SreeMangalHotel>
        </PrivateRoute>
        <Route path="/sign up">
        <SignUp></SignUp>
        </Route>
        <Route exact path="/">
          <Home></Home>
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
      </userContext.Provider>
     
  );
}

export default App;
