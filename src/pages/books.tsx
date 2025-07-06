



import { useGetBooksQuery } from "@/redux/api/baseApi";
import AddBookModal from "@/components/module/books/AddBookModal";
import BookList from "@/components/BookList";

export default function Books() {
  const { data, isLoading, isError } = useGetBooksQuery();
  const books = data?.data || [];

  console.log("Books data from API:", books);

  if (isLoading) return <p className="text-center">Loading...</p>;
  if (isError) return <p className="text-center text-red-500">Failed to fetch books.</p>;

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Book List</h2>
        <AddBookModal />
      </div>

      <table className="table-auto w-full border border-gray-200 rounded-md overflow-hidden">
        <thead className="bg-gray-100">
          <tr className="grid grid-cols-8 place-items-center text-sm font-semibold text-black">
            <th>Index</th>
            <th>Title</th>
            <th>Author</th>
            <th>Genre</th>
            <th>ISBN</th>
            <th>Copies</th>
            <th>Availability</th>
            {/* <th>Description</th> */}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books && books?.length > 0 ? (
            books?.map((book, index) => (
              <BookList key={book._id} book={book} index={index} />
            ))
          ) : (
            <tr className="grid grid-cols-8 place-items-center text-center p-5">
              <td colSpan={8} className="text-gray-500">
                No books found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
