import { configureStore } from '@reduxjs/toolkit'
import booksReducer from './books/reducer'
import filterReducer from './slices/filterSlice.js'

const store = configureStore({
   reducer: {
      books: booksReducer,
      filter: filterReducer,
   }
})

export default store