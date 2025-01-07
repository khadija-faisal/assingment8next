import React from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import Link from "next/link";

export interface blogpost {
  title: string;
  body: string;
  author: string;
  slug?: string;
  image: string;
  publishedAt: number;
}
async function BlogPage() {
  const postQuery = `*[_type == "post"]{
  title,author,"slug":slug.current,"image":mainImage.asset->url,publishedAt,body}`;

  const data = await client.fetch(postQuery);
  
  return (
    <section className="text-gray-600 flex flex-col items-center justify-center body-font">
      <h1 className="text-3xl font-medium  text-gray-900 mb-4">
        Blog Posts
      </h1>
      <div className=" grid grid-cols-1 w-[70%] sm:w-[95%] 2xl:w-[80%] items-center sm:grid-cols-2 lg:grid-cols-3   ">
        {data.map((post: blogpost, index: number) => (
          <div key={index} className="flex xl:w-[390px] item-center justify-center m-4">
            <div className=" ">
              <Link href={`/blog/${post.slug}`}>
              <div className="h-full  bg-gray-100 bg-opacity-75 flex justify-center  flex-col  gap-2  rounded-lg overflow-hidden ">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={280}
                />
                <div className="py-4">
                <h1 className="title-font line-clamp-1 px-8 sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  {post.title}
                </h1>
                <div className='text-sm px-8 text-gray-500"'>
                  <span> Author : {post.author}</span>
                </div>
                <p className="leading-relaxed px-8 text-sm text-gray-500">
                  {new Date(post.publishedAt).toLocaleDateString()}
                </p>
                <p className="leading-relaxed px-8 line-clamp-2 mb-3">{post.body}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-indigo-500 px-8 inline-flex items-center"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </Link>
                </div>
              </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BlogPage;
