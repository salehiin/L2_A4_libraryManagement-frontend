

import { Outlet } from 'react-router';
import Navbar from './components/layout/Navbar';

function App() {


  return (
    <>
      <div className=''>
        <Navbar></Navbar>
        <div className='max-w-screen mx-auto items-center p-5'>
          <Outlet></Outlet>
        </div>
      </div>
    </>
  )
}

export default App
