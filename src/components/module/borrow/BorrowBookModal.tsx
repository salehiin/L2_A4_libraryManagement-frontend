import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { useBorrowBookMutation } from "@/redux/api/baseApi";
import type { IBook } from "@/types";
import { ArrowDownToLine, BookOpenCheck } from "lucide-react";

interface IProps {
  book: IBook;
}

interface IBorrowForm {
  quantity: number;
  dueDate: string;
}

export default function BorrowBookModal({ book }: IProps) {
  const [open, setOpen] = useState(false);
  const [borrowBook] = useBorrowBookMutation();
  const navigate = useNavigate();
  const form = useForm<IBorrowForm>();

  const onSubmit = async (data: IBorrowForm) => {
  const quantity = Number(data.quantity);

  if (quantity > book.copies) {
    toast.error("Quantity cannot exceed available copies.");
    return;
  }

  const payload = {
    book: book._id, 
    quantity,
    dueDate: data.dueDate,
  };

  try {
    await borrowBook(payload).unwrap();
    toast.success("Book borrowed successfully!");
    setOpen(false);
    navigate("/borrow-summary");
  } catch {
    toast.error("Failed to borrow book.");
  }
};


  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
            {/* <BookOpenCheck></BookOpenCheck> */}
            <ArrowDownToLine></ArrowDownToLine>
            
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Borrow Book</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quantity</FormLabel>
                  <FormControl>
                    <Input type="number" min={1} max={book.copies} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="dueDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Due Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">Submit</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
