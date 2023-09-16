// import { useEffect } from "react";
// import React, { useState } from 'react';
import PropTypes from 'prop-types'; 
import { FaBookmark } from 'react-icons/fa';
const Blog = ({blog,handleAddToBookmark,handleMarkAsRead}) => {
    // const [blogs,setBlogs] = useState([]);
    // useEffect(()=>{
    //     fetch('blogs.json').then(res=>res.json()).then(data=>setBlogs(data))
    // },[])
    const {title,cover,author_img,author,reading_time,posted_date,hashtags} = blog;

    return (
        <div className='mb-20 m-8'>
            <img className='w-full' src={cover} alt={`Cover Picture of ${title}`} ></img>
            <div className='flex justify-between'>
            <div className='flex'>
                <img className='w-14' src={author_img} alt="author img" />
                <div className='ml-6'>
                    <h3 className="text-2xl">{author}</h3>
                    <p>{posted_date}</p>
                </div>
            </div> 
            <div>
                <span>{reading_time} min read</span>
                <button onClick={() => handleAddToBookmark(blog)} className='ml-2 text-2xl'>
                    <FaBookmark></FaBookmark>
                </button>
            </div>
            </div>
           <h2 className="text-xl">{title}</h2>
           <p>
           {
            hashtags.map((hash,idx) => <span key={idx}><a>#{hash}</a></span>)
           }
           </p>
           <button 
           onClick ={()=>handleMarkAsRead(reading_time)}
           className='text-purple-800 font-bold underline'>Mark as Read</button>
           
        </div>
    )
}
Blog.propTypes= {
    blog : PropTypes.object.isRequired,
  
}
export default Blog;