'use client'
import { log } from 'console';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import  { AiFillBug } from 'react-icons/ai';
import classnames from 'classnames';

const Navbar = () => {

  const links = [
    {label: 'DashBoard', href : '/'},
    {label: 'Issues' ,href: '/issues'}
  ];

  const currentPath = usePathname();
  console.log(currentPath);

  return (
    <nav className='flex mb-5 space-x-6 border-b px-5 h-14 items-center'>
        <Link href="/" className='flex'><AiFillBug /></Link>
        <ul className='flex px-5 space-x-6'>
          {links.map((link)=> 
          <Link 
            key = {link.href} 
            href={link.href}
            className={classnames({
              'text-zinc-900':currentPath===link.href,
              'hover:text-zinc-800 text-lg font-semibold transition-colors text-zinc-500': true,
            })} 
            >{link.label}</Link>)}
        </ul>
    </nav>
  )
}

export default Navbar