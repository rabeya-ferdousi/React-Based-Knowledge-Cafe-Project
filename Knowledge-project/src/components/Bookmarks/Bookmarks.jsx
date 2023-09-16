import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks}) => {
 

    return (
        <div className="md:1/3 bg-gray-400 ml-4 mt-2 pt-4">
           <h2 className="text-xl">Bookmarked Blogs : {bookmarks.length}</h2>
           {
            bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
           }
        </div>
    )
}

export default Bookmarks;