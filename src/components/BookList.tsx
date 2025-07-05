import { cn } from '@/lib/utils';
import { useDeleteBookMutation } from '@/redux/api/baseApi';
import type { IBook } from '@/types';
import toast from 'react-hot-toast';
import UpdateBookModal from './module/books/UpdateBookModal';
import { Button } from './ui/button';

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
        <tr className="grid grid-cols-9 place-items-center text-center border-b">
            <td>{index + 1}</td>
            <td>{book?.title}</td>
            <td>{book?.author}</td>
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
            <td>{book?.isbn}</td>
            <td
                className={cn({
                    "text-green-500": book.copies >= 5,
                    "text-red-500": book.copies < 5,
                })}
            >{book?.copies}</td>
            <td
                className={cn({
                    "text-green-500": book.available === true,
                    "text-red-500": book.available === false,
                })}
            >{book?.available ? 'Yes' : 'No'}</td>
            <td>{book?.description ? book?.description : 'Review not available'}</td>
            <td className='flex gap-2'>
                <UpdateBookModal book={book} />
                <Button
                    type="button"
                    onClick={handleDelete}
                    className="text-red-500 hover:underline"
                >
                    Delete
                </Button>
            </td>
        </tr>
        // </tbody>
    );
}


