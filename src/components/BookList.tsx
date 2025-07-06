import { cn } from '@/lib/utils';
import { useDeleteBookMutation } from '@/redux/api/baseApi';
import type { IBook } from '@/types';
import toast from 'react-hot-toast';
import UpdateBookModal from './module/books/UpdateBookModal';
import { Button } from './ui/button';
import { Trash2 } from 'lucide-react';
import BorrowBookModal from './module/borrow/BorrowBookModal';

interface IProps {
    book: IBook;
    index: number;
}

export default function BookList({ book, index }: IProps) {

    const [deleteBook] = useDeleteBookMutation();

    const handleDelete = async () => {
        if (confirm(`Are you sure you want to delete "${book.title}"?`)) {
            try {
                await deleteBook(book._id).unwrap();
                toast.success("Book deleted successfully!");
            } catch (error) {
                console.error("Failed to delete:", error);
                toast.error("Failed to delete book.");
            }
        }
    };

    return (
        // <tbody>
        <tr className="grid grid-cols-8 place-items-center text-center border-b p-4">
            <td>{index + 1}</td>
            <td className='text-pink-500'>{book?.title}</td>
            <td className='text-blue-700'>{book?.author}</td>
            <td
                className={cn({
                    "text-green-500": book.genre === "NON_FICTION",
                    "text-yellow-500": book.genre === "FICTION",
                    "text-indigo-500": book.genre === "SCIENCE",
                    "text-red-500": book.genre === "HISTORY",
                    "text-orange-500": book.genre === "BIOGRAPHY",
                    "text-blue-500": book.genre === "FANTASY",
                })}
            >{book?.genre.replace("_", " ")}</td>
            <td className='text-green-900'>{book?.isbn}</td>
            <td
                className={cn({
                    "text-green-500": book.copies >= 5,
                    "text-yellow-500": book.copies > 0 && book.copies < 5,
                    "text-red-500": book.copies === 0,
                })}
            >{book?.copies}</td>
            <td
                className={cn({
                    "text-green-500": book.copies > 0,
                    "text-red-500": book.copies === 0
                })}
            >{book?.copies > 0 ? 'Yes' : 'No'}</td>
            {/* <td>{book?.description.length > 30 ? book?.description.slice(0, 15) + "..." : 'Review not available'}</td> */}
            <td className='flex gap-2'>
                <BorrowBookModal book={book}></BorrowBookModal>
                <UpdateBookModal book={book} />
                <Button
                    type="button"
                    onClick={handleDelete}
                    className="text-red-500 hover:underline"
                >
                    <Trash2></Trash2>
                </Button>
            </td>
        </tr>
        // </tbody>
    );
}


