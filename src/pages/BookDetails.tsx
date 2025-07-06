
import BorrowBookModal from "@/components/module/borrow/BorrowBookModal";
import { useGetSingleBookQuery } from "@/redux/api/baseApi";
import { ArrowBigLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";


export default function BookDetails() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    
    const { data: book, isLoading, isError } = useGetSingleBookQuery(id || "");
    
    
    if (!id) return <p>Invalid book ID.</p>;
    if (isLoading) return <p className="text-center">Loading...</p>;
    if (isError || !book) return <p className="text-center text-red-500">Failed to load book details.</p>;
   

    // console.log("Book object:", book);

    return (
        <div className="max-w-xl flex flex-col gap-4 mx-auto p-4 shadow-md border rounded-md text-pink-500">
            <h1 className="text-2xl font-bold mb-4">{book.title}</h1>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Genre:</strong> {book.genre ? book.genre.replace("_", " ") : "N/A"}</p>
            <p><strong>ISBN:</strong> {book.isbn}</p>
            <p><strong>Description:</strong> {book.description}</p>
            <p><strong>Copies:</strong> {book.copies}</p>
            <p><strong>Available:</strong> {book.available ? "Yes" : "No"}</p>
            <p className="text-sm text-gray-500 mt-2">Added on: {book.createdAt ? new Date(book.createdAt).toLocaleDateString("en-US") : "N/A"}</p>
            
            <div className="flex gap-4 mt-6">
                <button
                    onClick={() => navigate(-1)}
                    className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                >
                <ArrowBigLeft className=""></ArrowBigLeft>
                </button>

                <BorrowBookModal book={book} />
            </div>
        </div>
    );
}
