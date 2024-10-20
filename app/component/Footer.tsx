import React from 'react'
import Image from 'next/image'
import Insta from "../../public/Icons/instagram.webp"
import Facebook from "../../public/Icons/facebook.webp"
import Youtube from "../../public/Icons/youtube.png"

export default function Footer(){
  return (
    <div className='bg-yellow-600 h-40'>
        <h1 className='ml-36 font-bold saira text-3xl mt-10 p-5'> CONNECT WITH US</h1>
        <section className='flex justify-between items-center ml-40'>
            <ul className='flex gap'>
            <Image src={Insta} alt="Insta Image" width={40} height={40} className='mt-5 flex'/>
            <Image src={Facebook} alt="Fb Image" width={40} height={40} className='ml-10 mt-5'/>
            <Image src={Youtube} alt="Youtube Image" width={40} height={40} className='ml-10 mt-5'/>
            </ul>
            <p className='mr-96 saira'>COPYRIGHT © 2024 PAKEDU</p>
        </section>
    </div>
  )
}


