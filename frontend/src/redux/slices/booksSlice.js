import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { createBookWithID } from "../../utils/createBookWithID";
import { setError } from "./errorSlice";

const initialState = {
   books: [],
   isLOadingViaAPI: false
}

export const fetchBook = createAsyncThunk(
   'books/fetchBook',
   async (url, thunkAPI) => {
      try {
         const res = await axios.get(url)
         return res.data
      } catch (error) {
         thunkAPI.dispatch(setError(error.message))
         throw error
      }

   }
)

const booksSlice = createSlice({
   name: 'books',
   initialState,
   reducers: {
      addBook: (state, action) => {
         state.books.push(action.payload)
      },
      deleteBook: (state, action) => {
         return {...state, books: state.books.filter((el) => el.id !== action.payload)}
      },
      toggleFavorite: (state, action) => {
         state.books.forEach((el) => {
            if (el.id === action.payload) {
               el.isFavorite = !el.isFavorite
            }
         })
      }
   },
   extraReducers: {
      [fetchBook.pending]: (state) => {
         state.isLoadingViaAPI = true
      },
      [fetchBook.fulfilled]: (state, action) => {
         state.isLoadingViaAPI = false
         if (action.payload.title && action.payload.author) {
            state.books.push(createBookWithID(action.payload, ('API')))
         }
      },
      [fetchBook.rejected]: (state) => {
         state.isLoadingViaAPI = false
      }
   }
})

export const thunkFunction = async (dispatch) => {
      try {
         const res = await axios.get('http://localhost:4000/random-book')
         if (res?.data?.author && res?.data?.title) {
            dispatch(addBook(createBookWithID(res.data, 'API')))
         }
      } catch (error) {
         console.log('Error fetching book', error)
      }
}

   
export const selectBooks = (state) => state.books.books
export const selectIsLoadingViaAPI = (state) => state.books.isLoadingViaAPI
   
export const { addBook, deleteBook, toggleFavorite } = booksSlice.actions
   
export default booksSlice.reducer
