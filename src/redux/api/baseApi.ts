import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { IBook } from "@/types";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://l2-a3-library-management-k53m.vercel.app/api",
  }),
  tagTypes: ["Book", "Borrow"],
  endpoints: (builder) => ({
    getBooks: builder.query<{ data: IBook[] }, void>({
      query: () => "/books",
      providesTags: ["Book"],
    }),
    createBook: builder.mutation<IBook, Partial<IBook>>({
      query: (newBook) => ({
        url: "/books",
        method: "POST",
        body: newBook,
      }),
      invalidatesTags: ["Book"],
    }),
    // 
    deleteBook: builder.mutation<{ success: boolean; message: string }, string>({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Book"],
    }),
    // 
    updateBook: builder.mutation<IBook, { id: string; updatedData: Partial<IBook> }>({
      query: ({ id, updatedData }) => ({
        url: `/books/${id}`,
        method: 'PATCH',
        body: updatedData,
      }),
      invalidatesTags: ['Book'],
    }),
    // 
    // Borrow Book
    borrowBook: builder.mutation({
      query: (borrowData) => ({
        url: "/borrow",
        method: "POST",
        body: borrowData,
      }),
      invalidatesTags: ["Borrow", "Book"],
    }),

    // Borrow Summary
    getBorrowSummary: builder.query({
      query: () => "/borrow",
      providesTags: ["Borrow"],
    }),

    // 
  }),
});

export const { useGetBooksQuery, useCreateBookMutation, useUpdateBookMutation, useDeleteBookMutation, useBorrowBookMutation, useGetBorrowSummaryQuery } = baseApi;
