import { configureStore } from '@reduxjs/toolkit'
import filterReducer from './slices/filterSlice.js'
import booksReducer from './slices/booksSlice.js'
import errorReducer from './slices/errorSlice.js'

const store = configureStore({
   reducer: {
      books: booksReducer,
      filter: filterReducer,
      error: errorReducer
   }
})

export default store