import { useSelector } from "react-redux/es/hooks/useSelector"
import './BookList.css'

const BookList = () => {
   const books = useSelector((state) => state.books)
   return (
      <div className='book-list app-block'>
         <h2>A Book list</h2>
         {books.length === 0
            ? <p>No Books Available</p>
            : <ul>{books.map((el, index) =>
               <li key={el.id}>
                  <div className="book-info">{++index}. {el.title} by <strong>{el.author}</strong> </div>
               </li>
            )}</ul>
         }
      </div>
   )
}

export default BookList
