import { Code } from 'bright'
import Image from 'next/image'
import { fileIcons } from "@/app/extension"

export const mdxComponents = {
  img: ({ props }) => {
    return <Image {...props} />
  },
  blockquote: ({children, ...props}) => {
    return <blockquote className='bg-[#0d1117] my-5 p-5 rounded' {...props}>{children}</blockquote>
  },
  h1: ({ children, ...props}) => {
    return <h1 {...props} className='text-3xl md:text-4xl text-accent pb-1 font-bold'>{children}</h1>
  },
  h2: ({ children, ...props}) => {
    return <h2 {...props} className='text-2xl text-accent pt-5 pb-1 font-bold'>{children}</h2>
  },
  p: ({ children, ...props}) => {
    return <p {...props} className='text-lg my-1.5'>{children}</p>
  },
  li: ({ children, ...props}) => {
    return <li {...props} className='text-lg my-1.5'>-{children}</li>
  },
  strong: ({ children, ...props}) => {
    return <strong {...props} className='text-accent'>{children}</strong>
  },
  pre: ({ children, ...props }) => {
    return (
      <Code
        theme='github-dark'
        lineNumbers='true'
        extensions={[fileIcons]}
        {...props}
      >
        {children}
      </Code>
    )
  },
  a: ({ children, ...props}) => {
    return <a {...props} target='_blank' className='underline decoration-accent inline-block hover:scale-105 transition ease-linear'>{children}</a>
  },
}
