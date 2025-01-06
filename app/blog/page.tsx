import React from 'react'
import Image from 'next/image'
import {client} from '@/sanity/lib/client'
import Link from 'next/link'

export interface Blogpost {
  title: string ,
  description: string,
  slug: string,
  Image: string,
  publishedAt: number
}
const async BlogPage = () => {
 const postQuery = `*[_type == "post"]{
  title,"slug":slug.current,"Image":mainImage.asset->url,publishedAt,body}'
  

  return (
    <div>BlogPage</div>
  )
}

export default BlogPage