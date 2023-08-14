import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';

const Navbar = () => {
    return (
        <div>
            <form>
                <ul className='Link'>
                    
                <Link to="/dashboard"><li>Dashboard</li></Link>
                <Link to="/aboutus"><li>Aboutus</li></Link>
                <Link to="/contactus" ><li>Contactus</li></Link>
                <Link to="/Home"><li>Home</li></Link>
                </ul>
            </form>
        </div>
    );
}

export default Navbar;
