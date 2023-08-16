import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import './navbar.css';

//navigation bar
function NavBar(){

    const [isActive, setActive] = useState();
    let toggle = () => {
        setActive(!isActive);
        console.log('clicked' + isActive);
       }
    

  
    return (
        <React.Fragment>
            
            <div className={isActive === true ? "active" : "navbar"}>
                <div className="logo">
                    <h1>The Hub</h1>
                </div>
                    
                <button className="menubtn" onClick={toggle} >Menu</button>
                
                <div className= 'navigation'>

                    <NavLink to="/">Home</NavLink>
                    <NavLink to="about">About</NavLink>
                    <NavLink to="services">Services</NavLink>
                </div>
            
            </div>
          
        </React.Fragment>
    );
}

export default NavBar;
