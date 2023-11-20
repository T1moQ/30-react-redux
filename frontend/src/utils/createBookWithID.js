import { nanoid } from "nanoid"

export const createBookWithID = (book, source) => {
   return {
      ...book,
      source,
      isFavorite: false,
      id: nanoid(6)
   }
}