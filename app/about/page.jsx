'use client'

import PageTransition from "../PageTransition";

export default function About() {
  return (
    <>
      <PageTransition />
      <div id="about" className="h-[100vh] text-primary grid place-items-center max-w-[1400px] px-10 overflow-auto pt-5 md:max-lg:pb-20 w-full">
        <div className="grid gap-20 pb-24 lg:grid-cols-2">
          <div>
            <h1 className="text-accent text-5xl font-bold mb-2 lg:mb-6
                           xl:text-6xl">
              ABOUT ME
            </h1>
            <p className="text-xl indent-10">I am a passionate, hard-working entry-level <b>front-end web developer</b>. My aim is to make people's lives better & easier by creating beautiful and useful software. As a developer, I am constantly seeking new challenges and opportunities to <b>learn</b> and <b>grow</b>. I enjoy staying up to date with the latest industry trends and exploring emerging technologies. Overall, I am excited about the opportunity to apply my skills and contribute to a dynamic and innovative team. I am eager to take on new challenges and I am confident in my ability to create engaging applications.</p>
          </div>
          <div className="flex flex-col gap-5 xl:pr-2">
            <h2 className="text-5xl text-accent font-bold xl:text-6xl">SKILLS AND TOOLS</h2>
            <div className="flex flex-wrap gap-2 items-center text-accent">
              <h3 className="text-4xl font-semibold mr-2 xl:text-5xl">FRONT-END</h3>
                {[{name:'HTML',
                   img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'},
                  {name:'CSS',
                   img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'},
                  {name:'JavaScript',
                   img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg'},
                  {name:'TypeScript',
                   img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'},
                  {name:'ReactJS',
                   img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'},
                  {name:'NextJS',
                   img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'},
                  {name:'TailwindCSS',
                   img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg'},].map(item =>
                    <div className="flex items-center gap-2 p-2 bg-blue-300/10 rounded-lg border-b-2 border-r rounded-br-xl border-primary ">
                      <img src={item.img} alt="" height='36' width='36'/>
                      <h4 className="text-2xl">{item.name}</h4>
                    </div>)}
            </div>
            <div className="flex flex-wrap gap-2 items-center text-accent">
              <h3 className="text-3xl font-semibold mr-2 xl:text-5xl">OTHERS</h3>
                {[{name:'Prisma',
                   img:'https://imgs.search.brave.com/dvw9-RU7yC3STgN8xuwpOtznz8bUdeZJZzwP5VU2OL8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zZWVr/aWNvbi5jb20vZnJl/ZS1pY29uLWRvd25s/b2FkL3ByaXNtYV8x/LnN2Zw.svg'},
                  {name:'MongoDB',
                   img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'},
                  {name:'C++',
                   img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg'},
                  {name:'Python',
                   img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'},
                  {name:'NPM',
                   img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg'},
                  {name:'Git',
                   img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'},
                  {name:'GitHub',
                   img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'},
                  {name:'Vim',
                   img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg'}].map(item =>
                    <div className="flex items-center gap-2 p-2 bg-blue-300/10 rounded-lg border-b-2 border-r border-primary/80">
                      <img src={item.img} className="opacity-100" alt="" height='36' width='36'/>
                      <h4 className="text-2xl">{item.name}</h4>
                    </div>)}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
