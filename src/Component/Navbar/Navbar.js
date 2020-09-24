import React, { useContext } from 'react';
import logo from '../../resources/Logo.png'
import './Navbar.css'
import SearchIcon from '@material-ui/icons/Search';

import { userContext } from '../../App';

const Navbar = () => {
    const [loggedInUser,setLoggedInUser] = useContext(userContext)
    return (
       <nav className="navbar navbar-expand-lg navbar-light   justify-content-md-between  justify-content-center  flex-wrap container">
           <a className="navLogo"href="/home"><img src={logo} alt="Travel guru"></img></a>
           <form class="form-inline my-2 my-lg-0">
           <SearchIcon/>
            <input class="form-control mr-sm-2" type="search" placeholder="Search your destination" aria-label="Search"/>
            </form>
           <a  className="nav-item nav-link text-white"  href='/home'>News</a>
           <a  className="nav-item nav-link text-white"  href='/home'>Destination</a>
           <a  className="nav-item nav-link text-white"  href='/home'>Blog</a> 
           <a  className="nav-item nav-link text-white"  href='/home'>Contact</a> 
           {loggedInUser.name ? <a  className="nav-item nav-link "  href='/home'>{loggedInUser.name}</a>:"" } 
           <button onClick={()=>setLoggedInUser({})}type="button" class="btn btn-warning nav-item nav-link" href='/home'>Log out</button>
       </nav>
    );
};

export default Navbar;
