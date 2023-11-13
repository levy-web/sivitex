'use client'
import Link from 'next/link'
import { useState } from 'react';
import { usePathname } from 'next/navigation'
/* eslint-disable-next-line */
export interface HeaderProps {}

export const Header = () => {
    const [menu, setMenu] = useState<boolean>(false);
    const pathname = usePathname()

    const toggleMenu = () => {
        setMenu(!menu)
    }

  return (

    <nav className="bg-white fixed w-screen border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
            </Link>
            <button data-collapse-toggle="navbar-multi-level" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
            <div className="hidden mx-auto w-full md:block md:w-auto" id="navbar-multi-level">
                <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <Link href="/home" className={`py-2 px-3 rounded ${pathname === '/home' ? 'text-white bg-gray-900' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'}`}>Home</Link>
                    </li>
                    <li>
                        <Link href="/shop" className={`py-2 px-3 rounded ${pathname === '/shop' ? 'text-white bg-gray-900' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'}`}>Shop</Link>
                    </li>
                    <li onClick={toggleMenu} className='flex'>
                        <Link href="/categories" className={`py-2 px-3 rounded ${pathname === '/categories' ? 'text-white bg-gray-900' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'}`}>Categories</Link>
                        <img className='h-6 w-6 cursor-pointer' src='/down-arrow.png' alt=''/>
                    </li>
                    <li>
                        <Link href="/contact" className={`py-2 px-3 rounded ${pathname === '/contact' ? 'text-white bg-gray-900' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'}`}>Contact</Link>
                    </li>
                </ul>
            </div>
            <div className='flex'>
                <img className='h-6 w-6 cursor-pointer' src='/shopping-cart.png' alt=''/>
                <span className='text-xs'>0</span>
            </div>
        </div>
    </nav>


  );
}

export default Header;
