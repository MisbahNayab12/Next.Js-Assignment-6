import React from 'react'
import Link from 'next/link'
import { Button } from "../../components/ui/button"
import Image from 'next/image'
import Logo from "../../public/Icons/logo.jpg"

export default function Header() {
  return (
    <main className='h-screen w-screen'>
      <div className='h-full max-w-full bg-cover bg-no-repeat w-screen' style={{ backgroundImage: "url('/academic.jpg')" }}>
        <nav className='mt-1 flex justify-between items-center'>
          <Image src={Logo} alt="Logo" className='w-14 h-14 object-cover rounded-full ml-36 mt-5' />
          <p className='text-black font-semibold text-2xl mt-5 mr-auto ml-7 saira'>PAKEDU</p>
          <ul className='flex gap-9 list-none text-white mr-16 mt-5 items-center'>
            <li>
              <Link href="/" className=' hover:text-pink-400 saira text-base'>HOME</Link>
            </li>
            <li>
              <Link href="/games" className=' hover:text-pink-400 saira text-base'> ABOUT </Link>
            </li>
            <li>
              <Link href="/lessons" className=' hover:text-pink-400 saira text-base'> CONTACT </Link>
            </li>
            <li>
              <Link href="/contact" className=' hover:text-pink-400 saira text-base'> NEWS </Link>
            </li>

            <li><Button type="submit" className="hover:bg-pink-400 bg-red-700 font-semibold saira text-base">SIGN UP</Button></li>

          </ul>
        </nav>
        <h1 className='font-bold text-7xl mt-16 w-2/4 ml-36 leading-normal saira'> BRIGHT MINDS ACADEMY </h1>
      </div>
    </main>
  )
}


