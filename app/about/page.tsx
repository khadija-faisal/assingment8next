import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const About = () => {
  return (
    <div><section className="text-gray-600 body-font">
    <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
      <Image
        className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded-xl"
        alt="hero"
        src={'/about2.jpg'}
        height={720}
        width={600}
      />
      <div className="text-center lg:w-2/3 w-full">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        About This Blog
        </h1>
        <p className="mb-8 leading-relaxed">
        This blog is your go-to resource for staying updated on the latest trends, tips, and insights in web development and design. Authored by industry experts, our posts are crafted to inspire and educate developers, designers, and tech enthusiasts alike. Whether you&apos;re a seasoned professional or just starting your journey, you&apos;ll find valuable content tailored to your needs.
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
    </div>
  </section>
  </div>
  )
}

export default About