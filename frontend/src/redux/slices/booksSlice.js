import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const booksSlice = createSlice({
   name: 'books',
   initialState,
   reducers: {
      addBook: (state, action) => {
         state.push(action.payload)
      },
      deleteBook: (state, action) => {
         return state.filter((el) => el.id !== action.payload)
      },
      toggleFavorite: (state, action) => {
         state.forEach((el) => {
            if (el.id === action.payload) {
               el.isFavorite = !el.isFavorite
            }
         })
      }
   }
})

export default booksSlice.reducer

export const selectBooks = (state) => state.books

export const { addBook, deleteBook, toggleFavorite } = booksSlice.actions

