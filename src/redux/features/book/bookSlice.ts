

import type { RootState } from '@/redux/store';
import type { IBook } from '@/types';
import { createSlice, type PayloadAction, nanoid } from '@reduxjs/toolkit'
// import { v4 as uuidv4 } from "uuid";
// import { title } from 'process';
// import type { RootState } from '../store'
// Title, Author, Genre, ISBN, Copies, Availability, and Actions

interface InitialState {
  books: IBook[];
  filter: "All" | "FICTION" | "Non-Fiction"
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
      availability: true

    },
    // {
    //   _id: 'adfghjk',
    //   title: 'Deepwork',
    //   author: 'Cal Neport',
    //   genre: 'Fiction',
    //   isbn: '9781455563869',
    //   copies: 4,
    //   availability: true

    // },
  ],
  filter: "all",
}

type DraftBook = Pick<IBook, "title" | "author" | "genre" | "isbn" | "copies" | "availability">;

const createBook = (bookData: DraftBook): IBook => {
  return { _id: nanoid(), ...bookData};
};

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<DraftBook>) => {

      // const _id = uuidv4();

      // const bookData = {
      //   ...action.payload,
      //   _id,
      //   isAvailable: false
      // }
      const bookData = createBook(action.payload)
      state.books.push(bookData);
    },
    // returnBook: (state) => {
    //   state.book = state.book - 1;
    // },
    deleteBook: (state, action: PayloadAction<string>) => {
      state.books = state.books.filter((book) => book._id !== action.payload );
    },
    updateFilter: (state, action: PayloadAction<"all" | "fiction" | "non-fiction">) => {
      state.filter = action.payload;
    }
  },

})

// export const { borrowBook, returnBook } = bookSlice.actions;

export const selectBooks = (state: RootState) => {

  const filter = state.bookManage.filter;

  if(filter === "fiction"){
    return state.bookManage.books.filter(book => book.genre === "fiction");
  }else if(filter === "non-fiction"){
    return state.bookManage.books.filter(book => book.genre === "non-fiction");
  }else{
    return state.bookManage.books;
  }

  return state.bookManage.books;
}

export const selectFilter = (state: RootState) => {
  return state.bookManage.filter;
}

export const { addBook, deleteBook, updateFilter } = bookSlice.actions;

export default bookSlice.reducer;