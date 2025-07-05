

import type { RootState } from '@/redux/store';
import type { IBook } from '@/types';
import { createSlice, type PayloadAction, nanoid } from '@reduxjs/toolkit'


interface InitialState {
  books: IBook[];
  filter: "All" | "Fiction" | "Non-Fiction"
}

const initialState: InitialState = {
  books: [
    {
      _id: 'adfghj',
      title: 'Mindset',
      author: 'Carol S. Dweck',
      genre: 'non-fiction',
      isbn: '9783492972826',
      copies: 5,
      available: true

    },
    
  ],
  filter: "All",
}

type DraftBook = Pick<IBook, "title" | "author" | "genre" | "isbn" | "copies" | "available">; 
// type DraftBook = Omit<IBook, "_id">;

const createBook = (bookData: DraftBook): IBook => {
  return { _id: nanoid(), ...bookData};
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
      state.books = state.books.filter((book) => book._id !== action.payload );
    },
    // updateFilter: (state, action: PayloadAction<"all" | "fiction" | "non-fiction">) => {
    updateFilter: (state, action: PayloadAction<"All" | "Fiction" | "Non-Fiction">) => {
      state.filter = action.payload;
    }
  },

})

// selectors
export const selectBooks = (state: RootState) => {

  const filter = state.book.filter;

  if(filter === "Fiction"){
    return state.book.books.filter(book => book.genre.toLowerCase() === "fiction");
  }else if(filter === "Non-Fiction"){
    return state.book.books.filter(book => book.genre.toLowerCase() === "non-fiction");
  }else{
    return state.book.books;
  }

  // return state.bookManage.books;
}

export const selectFilter = (state: RootState) => {
  return state.book.filter;
}

export const { addBook, deleteBook, updateFilter } = bookSlice.actions;

export default bookSlice.reducer;