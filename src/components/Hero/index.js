import React from 'react'
import './style.css'
import Card from '../UI/Card/index'
import Logo from '../Logo/index'
import Navbar from '../Navbar/index'

const Hero =(props)=>{
    return(
        <div className="hero">
            <Card>
                <Logo/>
                <Navbar/>
            </Card>
        </div>
    )
}

export default Hero