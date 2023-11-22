import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { createBookWithID } from "../../utils/createBookWithID";
import { setError } from "./errorSlice";

const initialState = []

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
   },
   extraReducers: (builder) => {
      builder.addCase(fetchBook.fulfilled, (state, action) => {
         if (action.payload.title && action.payload.author) {
            state.push(createBookWithID(action.payload, ('API')))
         }
      })
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

   
export const selectBooks = (state) => state.books
   
export const { addBook, deleteBook, toggleFavorite } = booksSlice.actions
   
export default booksSlice.reducer
