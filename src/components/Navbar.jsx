import React, { useState } from 'react';
import { Link } from 'react-scroll';
import Button from './Button';

const Navbar = () => {
    let [open, setOpen] = useState(false);
    return (
        <nav className='shadow-md w-full fixed top-0 left-0 z-[2]'>
            <div className='md:flex items-center justify-between bg-slate-800 py-4 md:px-10 px-7 dark:bg-gray-800'>
                <div className='font-semibold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-200 transition-all duration-500 ease-in '>
                    <span className='text-white text-center'>
                        <ion-icon name="logo-xbox" class="hover:animate-spin"></ion-icon>
                        <ion-icon name="logo-playstation" class="hover:animate-spin"></ion-icon>
                        <ion-icon name="logo-steam" class="hover:animate-spin"></ion-icon>
                        <ion-icon name="logo-google-playstore" class="hover:animate-spin"></ion-icon>
                        <h1>AfnanSiregar</h1>
                    </span>
                    <Button></Button>
                </div>
                <div onClick={() => setOpen(!open)} className='text-3xl text-white absolute right-8 top-9 cursor-pointer md:hidden'>
                    <ion-icon name={open ? 'close-outline' : 'menu'}></ion-icon>
                </div>

                <ul className={`md:flex md:items-center md:pb-0 absolute md:static dark:text-gray-300 text-white dark:bg-gray-800 bg-slate-800 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-75 ease-in ${open ? 'top-20 opacity-100' : 'top-[-490px] md:opacity-100 opacity-0'}`}>
                    <li className='md:ml-8 text-xl md:my-0 my-7'>
                        <Link to="hero" onClick={() => setOpen(!open)} className='text-gray hover:text-gray-400 duration-500' spy={true} smooth={true} offset={-90} duration={500}>HOME
                            <ion-icon name="home" class="animate-bounce"></ion-icon>
                        </Link>
                    </li>

                    <li className='md:ml-8 text-xl md:my-0 my-7'>
                        <Link to="services" onClick={() => setOpen(!open)} className='text-gray hover:text-gray-400 duration-500' spy={true} smooth={true} offset={-90} duration={500}>SERVICES
                            <ion-icon name="logo-ionic" class="animate-bounce"></ion-icon>
                        </Link>
                    </li>
                    <li className='md:ml-8 text-xl md:my-0 my-7'>
                        <Link to="works" onClick={() => setOpen(!open)} className='text-gray hover:text-gray-400 duration-500' spy={true} smooth={true} offset={-90} duration={500}>WORKS
                            <ion-icon name="logo-react" class="animate-bounce"></ion-icon>
                        </Link>
                    </li>
                    <li className='md:ml-8 text-xl md:my-0 my-7'>
                        <Link to="about" onClick={() => setOpen(!open)} className='text-gray hover:text-gray-400 duration-500' spy={true} smooth={true} offset={-90} duration={500}>ABOUT
                            <ion-icon name="game-controller" class="animate-bounce"></ion-icon>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar