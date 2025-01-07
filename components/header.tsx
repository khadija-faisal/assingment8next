import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div><header className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <Link href={'/'} className="flex title-font font-semibold items-center text-gray-900 mb-4 md:mb-0">
        <span className="ml-3  text-xl">My Blogs
        </span>
      </Link>
      <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
        <Link href="/about"  className="mr-5 hover:text-indigo-500 ">About</Link>
        <Link href="/blog" className="mr-5 hover:text-indigo-500">Blogs</Link>
        <Link href="/" className="mr-5 hover:text-indigo-500">Home</Link>
    
      </nav>
      <button className="inline-flex items-center bg-indigo-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 hover:text-gray-600 rounded text-base mt-4 md:mt-0">
       <Link href={'/'}>Contact</Link>
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </header>
  </div>
  )
}

export default Header