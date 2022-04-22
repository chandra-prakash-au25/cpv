import '../style.css';
import React from 'react';
import {Link } from "react-router-dom";
const navbar =()=>{
  return (
    <div>
          <header>
        <nav>
            <div className="logo">
					    <Link  className="tech" to="/home">Tech Admin</Link>
				    </div>
            <label for="drop" className="toggle">Menu</label>
            <input type="checkbox" id="drop" />
            <ul className="menu">
					
					    <li><Link to="orders">Orders</Link></li>
					    <li><Link to="bids">Bids</Link></li>
					    <li><Link to="delete">DeleteOrder</Link></li>
		

            </ul>
          
        </nav>
    </header>


    </div>
  );
}
export default navbar;