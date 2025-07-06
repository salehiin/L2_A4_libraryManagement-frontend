
import BorrowBookModal from "@/components/module/borrow/BorrowBookModal";
import { useGetBooksQuery } from "@/redux/api/baseApi";
import { Link } from "react-router-dom";

export default function Home() {
  const { data, isLoading, isError } = useGetBooksQuery();
  const books = data?.data || [];

  return (
    <div className="space-y-12 px-6 py-8 max-w-5xl mx-auto">
      {/* Row 1: Hero */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Welcome to Minimal Library 📚</h1>
        <p className="text-gray-600 text-lg">
          Explore, Borrow, Read — All in One Place
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <Link to="/books">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Browse Books
            </button>
          </Link>
          <Link to="/borrow-summary">
            <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
              View Borrow Summary
            </button>
          </Link>
        </div>
      </section>

      {/* Row 2: Featured Books */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-pink-700">📖 Featured Books</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-black">
          {books.slice(0, 6).map((book, index) => {
            const { title, author, _id } = book;
            return (
              <div
                key={_id || index}
                className="p-4 border rounded-md shadow-sm bg-white flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-semibold text-lg">{title}</h3>
                  <p className="text-sm text-gray-500">
                    Author: {author || "Unknown"}
                  </p>
                </div>
                <div className="flex justify-between gap-2 mt-4">
                  <Link to={`/books/${_id}`}>
                    <button className="text-sm px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">
                      Details
                    </button>
                  </Link>
                  <BorrowBookModal book={book} />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Row 3: About Section */}
      <section className="bg-gray-100 p-6 rounded-md text-center">
        <h2 className="text-xl font-semibold mb-2 text-pink-900">📚 About the Library</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Minimal Library is your gateway to a world of knowledge. Our goal is
          to make borrowing and reading books easier, faster, and smarter.
        </p>
      </section>

      {/* Row 4: Footer */}
      <footer className="text-center text-sm text-gray-500 border-t pt-4">
        <p>&copy; {new Date().getFullYear()} Minimal Library. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <Link to="/">Home</Link>
          <Link to="/books">Books</Link>
          <Link to="/borrow-summary">Summary</Link>
          <Link to="/">Contact</Link>
        </div>
      </footer>
    </div>
  );
}
