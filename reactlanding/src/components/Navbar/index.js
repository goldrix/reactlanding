import React, {useState} from 'react'
import './style.css'

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
                <li><a hreaf="#">About me</a></li>    
                <li><a hreaf="#">About me</a></li>    
                <li><a hreaf="#">About me</a></li>    
                
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