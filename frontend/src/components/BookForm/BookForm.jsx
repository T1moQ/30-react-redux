import { useState } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { addBook } from '../../redux/slices/booksSlice'
import './BookForm.css'
import booksDB from '../../data/booksDB.json'
import { createBookWithID } from '../../utils/createBookWithID'


const BookForm = () => {
   const dispatch = useDispatch()

   const [title, setTitle] = useState('')
   const [author, setAuthor] = useState('')

   const submitHandler = (event) => {
      event.preventDefault()

      if (title && author) {
         const book = createBookWithID({ title, author }, 'manual')
         dispatch(addBook(book))
         setTitle('')
         setAuthor('')
      }
   }

   const addRandomBookHandler = () => {
      const randomIndex = Math.floor(Math.random() * booksDB.length)
      const randomBook = booksDB[randomIndex]

      const randomBookWithId = createBookWithID(randomBook, 'random')

      dispatch(addBook(randomBookWithId))
   }

   const addRandomBookViaAPIHandler = async () => {
      try {
         const res = await axios.get('http://localhost:4000/random-book')
         if (res?.data?.author && res?.data?.title) {
            dispatch(addBook(createBookWithID(res.data, 'API')))
         }
      } catch (error) {
         console.log('Error fetching book', error)
      }
   }

   return (
      <div className='book-form app-block'>
         <h2>A new Book</h2>
         <form onSubmit={submitHandler}>
            <div>
               <label htmlFor='title'>Title: </label>
               <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
               <label htmlFor='author'>Author: </label>
               <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
            </div>
            <button type='submit'>Add Book</button>
            <button type='button' onClick={addRandomBookHandler}>Add Random Book</button>
            <button type='button' onClick={addRandomBookViaAPIHandler}>Add Random via API</button>
         </form>
      </div>
   )
}

export default BookForm
