

import type { IBook } from '@/types';
import { createSlice, type PayloadAction, nanoid } from '@reduxjs/toolkit'


interface InitialState {
  books: IBook[];
  filter: "All" | "Fiction" | "Non-Fiction"
}

const initialState: InitialState = {
  books: [],
  filter: "All",
}

type DraftBook = Pick<IBook, "title" | "author" | "genre" | "isbn" | "copies" | "available"> & { description?: string; }


const createBook = (bookData: DraftBook): IBook => {
  return { _id: nanoid(), ...bookData, description: bookData.description || "No description", };
};

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<DraftBook>) => {
      const bookData = createBook(action.payload);
      state.books.push(bookData);
    },

    deleteBook: (state, action: PayloadAction<string>) => {
      state.books = state.books.filter((book) => book._id !== action.payload);
    },


  },

})



export const { addBook, deleteBook } = bookSlice.actions;

export default bookSlice.reducer;