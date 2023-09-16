import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/blogs/blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
function App() {
  const [bookmarks,setBookmarks] = useState([]);
  const [readingTime,setReadingTime] = useState(0);
  const handleAddToBookmark = blog =>{
    //console.log(blog)
    const newBookmarks = [...bookmarks,blog];
    setBookmarks(newBookmarks);
  }
  const handleMarkAsRead = time =>{
    // console.log('marking as read',time);
    const newReadingTime = readingTime+time;
    setReadingTime(newReadingTime);
  }
  return (
    <>
     <Header></Header>
     <div className='md:flex'>
     <Blogs handleAddToBookmark ={handleAddToBookmark} handleMarkAsRead  = {handleMarkAsRead}></Blogs>
     <Bookmarks bookmarks={bookmarks} readingTime={readingTime} ></Bookmarks>
     </div>
      
      
    </>
  )
}

export default App
