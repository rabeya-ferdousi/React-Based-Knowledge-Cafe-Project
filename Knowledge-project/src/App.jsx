import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/blogs/blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
function App() {
  const [bookmarks,setBookmarks] = useState([]);
  const handleAddToBookmark = blog =>{
    console.log('bookmark adding soon')
  }
  return (
    <>
     <Header></Header>
     <div className='md:flex'>
     <Blogs handleAddToBookmark ={handleAddToBookmark}></Blogs>
     <Bookmarks></Bookmarks>
     </div>
      
      
    </>
  )
}

export default App
