import { nanoid } from "nanoid"

export const createBookWithID = (book) => {
   return {
      ...book,
      isFavorite: false,
      id: nanoid(6)
   }
}