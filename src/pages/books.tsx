import { AddBookModal } from "@/components/module/books/AddBookModal";
import BookList from "@/components/module/books/BookList";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetBooksQuery } from "@/redux/api/baseApi";
import { updateFilter } from "@/redux/features/book/bookSlice";
import type { IBook } from "@/types";

export default function Books() {

    

    const { data, isLoading, isError } = useGetBooksQuery(undefined, {
        
    });
    const books = data?.data;

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error loading books.</p>;

    return (
        <div className="mx-auto max-w-7xl px-5 mt-20" >
            <div className="flex justify-end items-center gap-5">
                {/* <h1 className="text-red-600">This is books component</h1> */}
                <Tabs defaultValue="All">
                    <TabsList>
                        <TabsTrigger onClick={() => (updateFilter("All"))} value="All">All</TabsTrigger>
                        <TabsTrigger onClick={() => (updateFilter("Fiction"))} value="Fiction">Fiction</TabsTrigger>
                        <TabsTrigger onClick={() => (updateFilter("Non-Fiction"))} value="Non-Fiction">Non-Fiction</TabsTrigger>
                    </TabsList>
                </Tabs>
                <AddBookModal></AddBookModal>
            </div>
            {/* TABLE */}
            <table className="table table-zebra w-full">
                {/* Table head */}
                <thead>
                    <tr className="grid grid-cols-8 place-items-center text-center border-b">
                        <th>Index</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Genre</th>
                        <th>ISBN</th>
                        <th>Copies</th>
                        <th>Availability</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                {
                    !isLoading && books?.map((book: IBook, index: number) => <BookList key={book._id} book={book} index={index}></BookList>)
                }
            </table>
        </div>
    );
}