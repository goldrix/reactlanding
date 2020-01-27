import React from 'react'
import './style.css'

const Navbar =(props)=>{
    return(
        <div className="navbar">
            <ul className="navbarMenu">
                <li><a hreaf="#">About me</a></li>    
                <li><a hreaf="#">About me</a></li>    
                <li><a hreaf="#">About me</a></li>    
                
            </ul>
            <div className="search">
                <input type="text" placeholder="Search"/>
                <img src={require('../../assets/search.svg')} alt="Search"/>
                
            </div>
        </div>
    )
}

export default Navbar