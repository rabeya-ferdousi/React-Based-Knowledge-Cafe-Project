import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks,readingTime}) => {
 

    return (
        <div className="md:1/3 bg-gray-400 ml-4 mt-2 pt-4">
            <div>
                <h3 className="text-xl">Reading Time : {readingTime}</h3>
            </div>
           <h2 className="text-xl">Bookmarked Blogs : {bookmarks.length}</h2>
           {
            bookmarks.map((bookmark,idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
           }
        </div>
    )
}

export default Bookmarks;