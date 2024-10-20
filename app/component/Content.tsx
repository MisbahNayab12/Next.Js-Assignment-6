import React from 'react'
import Image from 'next/image'
import Learner from "../../public/empowering learner image.jpg"
import { Button } from "../../components/ui/button"


export default function Content(){
  return (
    <div className='flex justify-center items-center p-5'>
        <section className='flex gap-5'>
        <Image src={Learner} alt="image" width={550} height={347} className='ml-36 mt-32 mb-32' />
        <div className='ml-10'>
            <h1 className='text-2xl font-bold mb-2 mt-32 mr-36'> EMPOWERING LEARNERS </h1>
            <p className='mr-24 saira text-xl leading-7 mb-10 mt-5'> Our goal is to empower students by providing them with the tools, resources, and encouragement they need to thrive in their educational paths.</p>
            <p className='mr-24 saira text-xl leading-7'>With interactive lessons, engaging activities, and a supportive learning environment, we help students build confidence in their abilities and spark curiosity in a variety of subjects.</p>
            <Button type="submit" className="hover:bg-pink-400 bg-rose-600 font-semibold saira text-base mt-10">READ MORE</Button>
        </div>
        </section>
    </div>
  )
}


