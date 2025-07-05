

// import './App.css'
import { Outlet } from 'react-router';
import Navbar from './components/layout/Navbar';
// import { Button } from './components/ui/button'
// import { borrowBook, returnBook } from './redux/features/book/bookSlice';

// import { useAppDispatch, useAppSelector } from './redux/hooks';

function App() {

  // const dispatch = useAppDispatch();
  // const { book } = useAppSelector((state) => state.books);
  // console.log(book)

  // const handleBorrowBook = () => {
  //   dispatch(borrowBook())
  // };
  // const handleReturnBook = () => {
  //   dispatch(returnBook())
  // };

  return (
    <>
      <div className=''>
        <Navbar></Navbar>
        <div className='max-w-screen mx-auto items-center p-5'>
          <Outlet></Outlet>
        </div>
        {/* <div className='p-6 bg-indigo-400'>
          <h1></h1>
          <Button onClick={handleBorrowBook}>Borrow Book</Button>
          <span className='m-5'>{book}</span>
          <Button onClick={handleReturnBook}>Return Book</Button>
        </div> */}
      </div>
    </>
  )
}

export default App
