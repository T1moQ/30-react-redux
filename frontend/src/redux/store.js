import { configureStore } from '@reduxjs/toolkit'
import filterReducer from './slices/filterSlice.js'
import booksReducer from './slices/booksSlice.js'

const store = configureStore({
   reducer: {
      books: booksReducer,
      filter: filterReducer,
   }
})

export default store