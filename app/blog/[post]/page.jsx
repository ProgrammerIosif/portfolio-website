import { MDXRemote } from 'next-mdx-remote/rsc'

import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import remarkToc from 'remark-toc'
import { mdxComponents } from './MDComponents'
import matter from 'gray-matter'
import Link from 'next/link'
import PageTransition from '@/app/PageTransition'

export async function getPost(post) {
  const postContent = await fetch(`https://raw.githubusercontent.com/ProgrammerIosif/blog/main/${post}.md`, {cache: 'no-store'}).then((content) => content.text())
  const { data, content } = matter(postContent)
  return {data, slug: post, body: content }
}

export default async function Post({params}) {
  const content = await getPost(params.post)
  return (
    <>
      <PageTransition/>
      <div className='select-text text-primary pt-4 px-4 w-full overflow-x-auto'>
        <div className='max-w-4xl mx-auto code pb-24 md:pb-32'>
          <MDXRemote

            source={content.data.date + content.body}
            options={{
              mdxOptions: {
                remarkPlugins: [
                  remarkGfm,
                  remarkToc,
                ],
                rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
              },
            }}
            components={mdxComponents}
          />
          <Link href="/blog" className='block mt-4 w-max text-accent border border-accent rounded px-2 py-0.5 hover:bg-accent hover:text-black transition'>{'<'} BACK</Link>
        </div>
      </div>
    </>
  )
}
