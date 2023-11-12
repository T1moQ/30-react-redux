import { useState } from 'react'
import './BookForm.css'


const BookForm = () => {
   const [title, setTitle] = useState('')
   const [author, setAuthor] = useState('')

   const submitHandler = (event) => {
      event.preventDefault()

      if (title && author) {
         // dicpatch
         setTitle('')
         setAuthor('')
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
         </form>
      </div>
   )
}

export default BookForm
