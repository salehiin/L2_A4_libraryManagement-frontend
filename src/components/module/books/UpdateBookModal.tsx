

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useState } from "react";
import toast from "react-hot-toast";
import type { IBook } from "@/types";
import { useUpdateBookMutation } from "@/redux/api/baseApi";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
// import { Form } from "@/components/ui/form"
import { Input } from "@/components/ui/input";


interface IFormInput {
  title: string;
  author: string;
  genre: IBook["genre"];
  isbn: string;
  copies: number;
  available: "true" | "false";
  description: string;
}

interface UpdateBookModalProps {
  book: IBook;
}

export default function UpdateBookModal({ book }: UpdateBookModalProps) {
  const [open, setOpen] = useState(false);
  const [updateBook] = useUpdateBookMutation();

  const form = useForm<IFormInput>({
    defaultValues: {
      title: book.title,
      author: book.author,
      genre: book.genre,
      isbn: book.isbn,
      copies: book.copies,
      available: book.available ? "true" : "false",
      description: book.description,
    },
  });

  const onSubmit = async (data: IFormInput) => {
  const formattedData = {
    ...data,
    available: data.available === "true", // convert string to boolean
  };

  try {
    await updateBook({ id: book._id, updatedData: formattedData }).unwrap();
    toast.success("Book updated successfully!");
    setOpen(false);
  } catch {
    toast.error("Failed to update book.");
  }
};


  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          Update
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update Book</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Similar FormFields as AddBookModal */}
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="author"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Author</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="genre"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Genre</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select genre" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="FICTION">Fiction</SelectItem>
                      <SelectItem value="NON_FICTION">Non-Fiction</SelectItem>
                      <SelectItem value="SCIENCE">Science</SelectItem>
                      <SelectItem value="HISTORY">History</SelectItem>
                      <SelectItem value="BIOGRAPHY">Biography</SelectItem>
                      <SelectItem value="FANTASY">Fantasy</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="isbn"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ISBN</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="copies"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Copies</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="available"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Available</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select availability" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="true">Yes</SelectItem>
                      <SelectItem value="false">No</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Update Book
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
