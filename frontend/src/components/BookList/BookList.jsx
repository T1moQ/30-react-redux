import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBin2Fill, RiStarLine, RiStarFill } from "react-icons/ri";
import './BookList.css'
import { deleteBook, toggleFavorite, selectBooks } from "../../redux/slices/booksSlice";
import { selectTitleFilter, selectAuthorFilter, selectOnlyFavoriteFilter } from "../../redux/slices/filterSlice";

const BookList = () => {

   const books = useSelector(selectBooks)

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

   const highlightMatch = (text, filter) => {
      if (!filter) return text

      const regex = new RegExp(`(${filter})`, 'gi')

      return text.split(regex).map((substr, index) => {
         if (substr.toLowerCase() === filter.toLowerCase()) {
            return (
               <span key={index} className="highlight">{substr}</span>
            )
         }
         return substr
      })
   }

   return (
      <div className='book-list app-block'>
         <h2>A Book list</h2>
         {books.length === 0
            ? <p>No Books Available</p>
            : <ul>{filteredBooks.map((el, index) =>
               <li key={el.id}>
                  <div className="book-info">
                     {++index}. {highlightMatch(el.title, titleFilter)}{' '} by{' '}
                     <strong>{highlightMatch(el.author, authorFilter)}</strong> ({el.source})
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
