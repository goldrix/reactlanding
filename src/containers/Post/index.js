import React from 'react'
import './style.css'
import BlogPost from '../../components/BlogPost/index'
import SideBar from '../../components/Sidebar/index'

const Post = (props) => {
    return(
        <div>
            <section className="conatiner">
                        <BlogPost/>    
                        <SideBar/>


            </section>
        </div>
    )
}

export default Post