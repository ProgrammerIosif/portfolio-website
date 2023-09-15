'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import PageTransition from "../PageTransition"
import matter from "gray-matter"

export default function Blog() {
  const [posts, setPosts] = useState([])
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(`https://api.github.com/repos/programmeriosif/blog/contents`)
      .then(response => response.json())
      .then(async data => {
        const promises = data.map(async file => {
          const postContent = await fetch(`https://raw.githubusercontent.com/ProgrammerIosif/blog/main/${file.name}`).then((content) => content.text())
          const { data, content } = matter(postContent)
          return {data, slug: file.name.replace(/\.[^/.]+$/, ''), body: content }
        })
        const posts = await Promise.all(promises).then(data => data)
        setPosts(posts)
        setLoading(false)
      })
  }, [])

  if (isLoading) return
  return (
    <>
      <PageTransition/>
      <div id="blog" className='text-primary overflow-auto w-full h-full xl:flex xl:items-center'>
        <div className="mx-auto max-w-4xl px-10 pb-20 md:pb-32">
          <h1 className="text-5xl uppercase text-center font-semibold text-accent my-4 md:my-10
                         xs:text-7xl
                         md:col-span-2 xl:col-span-3">Blog</h1>
          <ul>
            {posts.map(post =>
              <li className="group transition-all hover:scale-105 duration-500 hover:bg-accent border border-accent rounded my-5">
                <Link href={"/blog/"+post.slug}>
                  <div className="p-4 md:p-6">
                    <h2 className="text-2xl md:text-3xl text-accent group-hover:text-black font-semibold my-1">{post.data.title}</h2>
                    <h3 className="text-lg md:text-xl group-hover:text-black">{post.data.subtitle}</h3>
                    <p className="text-right group-hover:text-black">{post.data.date}</p>
                  </div>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  )
}
