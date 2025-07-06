// import { useGetBorrowSummaryQuery } from "@/redux/api/baseApi";

import { useGetBorrowSummaryQuery } from "@/redux/api/baseApi";

export default function BorrowSummary() {
    const { data, isLoading, isError } = useGetBorrowSummaryQuery(undefined);

    if (isLoading) return <p className="text-center">Loading...</p>;
    if (isError) return <p className="text-center text-red-500">Failed to load summary.</p>;

    return (
        <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">Borrow Summary</h2>
            <table className="table-auto w-full border">
                <thead className="bg-gray-100">
                    <tr className="grid grid-cols-3 place-items-center font-semibold text-black">
                        <th>Book Title</th>
                        <th>ISBN</th>
                        <th>Total Quantity Borrowed</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.data?.map((entry: any, index: number) => (
                        <tr key={index} className="grid grid-cols-3 place-items-center border-b py-2">
                            <td className="text-pink-500">{entry.book.title}</td>
                            <td className="text-pink-500">{entry.book.isbn}</td>
                            <td className="text-pink-500">{entry.totalQuantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
