import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Hero = () => {
  return (
    <div><section className="text-gray-600 pb-20">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        Unlocking the Secrets to 
          <br className="hidden lg:inline-block" />
            Effective Web Design
        </h1>
        <p className="mb-8 leading-relaxed">
        Discover the principles and strategies behind creating visually stunning and user-friendly websites. From color theory to responsive layouts, this guide by Jane Doe will inspire you to elevate your web design skills.
        </p>
        <div className="flex justify-center">
          <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
           <Link href={'/https://www.linkedin.com/in/khadijamughal19'}>LinkedIn</Link>
          </button>
          <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
          <Link href={'/https://github.com/khadija-faisal'}>Github</Link>
          </button>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2  w-5/6">
        <Image
        className='rounded-xl'
        alt='heroimage'
        src={'/hero.jpg'}
        width={720}
        height={600}
         />
      </div>
    </div>
  </section>
  </div>
  )
}

export default Hero