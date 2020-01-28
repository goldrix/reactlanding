import React, {useState} from 'react'
import './style.css'
import {NavLink} from 'react-router-dom'

const Navbar =(props)=>{    


const[search, setSearch] = useState(false);

   
    
    const submitSearch = (e) =>{
        e.preventDefault();
        alert('Works');
    }

    const openSearch = () => {
        setSearch(true);
    }
    
    const searchClass = search? 'searchinput active':'searchinput';
    
    
    return(
        <div className="navbar">
            <ul className="navbarMenu">
                <li><NavLink to="/">Home</NavLink></li>    
                <li><NavLink to="about-us">About us</NavLink></li>    
                <li><NavLink to="contact-us">Contact-us</NavLink></li>    
                
            </ul>
            <div className="search">
                <form onSubmit={submitSearch}>
                    <input type="text" className={searchClass} placeholder="Search" />
                    <img onClick={openSearch} className="searchicon" src={require('../../assets/search.svg')} alt="Search"/>

                </form>
                
            </div>
        </div>
    )
}

export default Navbar