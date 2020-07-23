import React from 'react'
import {Link} from "react-router-dom";

function Navbar(){
    return (
        <div className='navbar'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About me</Link>
        {/* <Link to='/'>Project</Link> */}
        </div>
    )
}

export default Navbar;