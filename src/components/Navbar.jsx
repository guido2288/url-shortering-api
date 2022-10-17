import logo from '../images/logo.svg';
import bars from '../images/icon-hamburger.svg';
import close from '../images/icon-close.svg'
import { useState } from 'react';


export const Navbar = () => {

  const [open, setOpen] = useState(false);

  const onOpen = () => {
    if (open === false) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }

  return (


    <nav className='relative flex p-8'>

      <div className='flex items-center space-x-6 '>
        {/* LOGO */}
        <div className='pt-2'>
          <img src={logo} alt='logo.svg' />
        </div>

        {/* Menu Items */}
        <ul className=' text-GrayishViolet space-x-6 hidden md:flex'>
          <li><a href='#' className='hover:text-VeryDarkViolet'>Features</a></li>
          <li><a href='#' className='hover:text-VeryDarkViolet'>Pricing</a></li>
          <li><a href='#' className='hover:text-VeryDarkViolet'>Resources</a></li>
        </ul>



        <div className='absolute top-9 right-8 space-x-4 hidden md:block'>


          <button className='text-GrayishViolet'>Login</button>

          <button className='bg-Cyan hover:bg-CyanLigth text-White rounded-full px-4 py-1 font-bold'>Sign Up</button>


        </div>

        {/* Hamburger Icon */}

        {
          open
            ? <img src={close} alt="icon-hamburger.svg" className='md:hidden absolute top-11 right-8 cursor-pointer' onClick={onOpen} />
            : <img src={bars} alt="icon-hamburger.svg" className='md:hidden absolute top-11 right-8 cursor-pointer'
              onClick={onOpen} />
        }




      </div>

      {/* Mobile Menu */}

      {open === true &&

        <ul className=' bg-Violet rounded-md px-4 text-lg py-10 space-y-4 text-center text-White font-bold flex flex-col  md:hidden absolute mx-auto left-0 right-0 top-24'>
          <li><a href='#' className='hover:underline'>Features</a></li>
          <li><a href='#' className='hover:underline'>Pricing</a></li>
          <li><a href='#' className='hover:underline'>Resources</a></li>
          <hr />
          <li><button className='text-White'>Login</button></li>
          <li><button className='bg-Cyan hover:bg-CyanLigth text-White rounded-full px-4 py-3 w-full font-bold'>Sign Up</button></li>
        </ul>


      }





    </nav>
  )
}
