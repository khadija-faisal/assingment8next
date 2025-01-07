import { client } from "@/sanity/lib/client";
import { blogpost } from "../page";
import Image from "next/image";
import Link from "next/link";


export default async function Page({params}:{ params:{slug: string;}}) {
  const { slug } = params;
  const postQuery = `*[_type == "post" && slug.current == $slug]{
    title,author,"image":mainImage.asset->url,publishedAt,body
  }`;
  const data: blogpost[] = await client.fetch(postQuery,{ slug });

  const post = data[0];
  console.log(post);

  return (
    <div className="text-black">
      <main className="flex flex-col gap-10 items-center justify-center h-full px-10 lg:px-28 py-28">
        <div className="flex md:w-[80%] items-center gap-5">
          <span className="text-text2 font-bold">{post.author}</span>
          <span className="text-slate-600 font-medium">{new Date(post.publishedAt).toLocaleDateString()}</span>
        </div>
        <h1 className="text-text2 md:w-[80%] text-4xl font-raleway lg:text-6xl font-bold">{post.title}</h1>
        <Link href={"/blog"}>
          <Image src={post.image} alt="card_image" width={1232} height={608} className="rounded-xl" />
        </Link>
        <div className="md:w-[80%] flex flex-col gap-5 justify-center items-center">
          <p  className="text-text2 text-lg">{post.body}</p>
          <p className="text-text2 text-lg">{post.body}</p>
        </div>
      </main>
    </div>
  );
}