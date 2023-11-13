import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBin2Fill } from "react-icons/ri";
import './BookList.css'
import { deleteBook } from "../../redux/books/actionCreators";

const BookList = () => {
   const books = useSelector((state) => state.books)
   const dispatch = useDispatch()

   const deleteHandler = (id) => {
      console.log(deleteBook(id))
      dispatch(deleteBook(id))
   }

   return (
      <div className='book-list app-block'>
         <h2>A Book list</h2>
         {books.length === 0
            ? <p>No Books Available</p>
            : <ul>{books.map((el, index) =>
               <li key={el.id}>
                  <div className="book-info">{++index}. {el.title} by <strong>{el.author}</strong> </div>
                  <div className="book-actions" onClick={() => deleteHandler(el.id)}><RiDeleteBin2Fill /></div>
               </li>
            )}</ul>
         }
      </div>
   )
}

export default BookList
