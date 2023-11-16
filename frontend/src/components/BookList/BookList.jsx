import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBin2Fill, RiStarLine, RiStarFill } from "react-icons/ri";
import './BookList.css'
import { deleteBook, toggleFavorite } from "../../redux/books/actionCreators";
import { selectTitleFilter, selectAuthorFilter, selectOnlyFavoriteFilter } from "../../redux/slices/filterSlice";

const BookList = () => {
   const books = useSelector((state) => state.books)
   const titleFilter = useSelector(selectTitleFilter)
   const authorFilter = useSelector(selectAuthorFilter)
   const onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilter)
   const dispatch = useDispatch()

   const deleteHandler = (id) => {
      dispatch(deleteBook(id))
   }

   const toggleHandler = (id) => {
      dispatch(toggleFavorite(id))
   }

   const filteredBooks = books.filter((el) => {
      const matchesTitle = el.title.toLowerCase().includes(titleFilter.toLowerCase())
      const matchesAuthor = el.author.toLowerCase().includes(authorFilter.toLowerCase())
      const matchesFavorite = onlyFavoriteFilter ? el.isFavorite : true
      return matchesAuthor && matchesTitle && matchesFavorite
   })

   return (
      <div className='book-list app-block'>
         <h2>A Book list</h2>
         {books.length === 0
            ? <p>No Books Available</p>
            : <ul>{filteredBooks.map((el, index) =>
               <li key={el.id}>
                  <div className="book-info">
                     {++index}. {el.title} by <strong>{el.author}</strong>
                  </div>
                  <span onClick={() => toggleHandler(el.id)}>
                     {el.isFavorite === true ? <RiStarFill className="star-icon" /> : <RiStarLine className="star-icon" />}
                  </span>
                  <div className="book-actions" onClick={() => deleteHandler(el.id)}> <RiDeleteBin2Fill /></div>
               </li>
            )}</ul>
         }
      </div>
   )
}

export default BookList
