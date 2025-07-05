import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { deleteBook } from "@/redux/features/book/bookSlice";
import { useAppDispatch } from "@/redux/hooks";
import type { IBook } from "@/types";
import { Trash2 } from "lucide-react";

interface IProps {
    book: IBook;
    index: number;
}

export default function BookList({ book, index }: IProps) {

    const dispatch = useAppDispatch();

    return (<>

        <tbody>
            {/* row 1 */}
            <tr className="grid grid-cols-8 place-items-center text-center border-b">
                <th>{index + 1}</th>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td
                    className={cn({
                        "text-green-500": book.genre === "non-fiction",
                        "text-yellow-500": book.genre === "fiction",
                        "text-indigo-500": book.genre === "science",
                        "text-red-500": book.genre === "history",
                        "text-orange-500": book.genre === "biography",
                        "text-blue-500": book.genre === "fantasy",
                    })}
                >{book.genre}</td>
                <td>{book.isbn}</td>
                <td
                    className={cn({
                        "text-green-500": book.copies >= 5,
                        "text-red-500": book.copies < 5,
                    })}
                >{book.copies}</td>
                <td
                    className={cn({
                        "text-green-500": book.availability === true,
                        "text-red-500": book.availability === false,
                    })}
                >{book.availability ? "Yes" : "No"}</td>
                <td className="flex gap-3 items-center">
                    <Button
                        onClick={() => dispatch(deleteBook(book._id))}
                        variant="link"
                        className="p-0 text-red-500"
                    >
                        <Trash2 />
                    </Button>
                    <Checkbox />
                </td>
            </tr>
        </tbody>

    </>
    );
}