'use client'

import Link from 'next/link'
import {usePathname} from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="fixed mx-0 w-full bottom-0 flex justify-center bg-transparent z-50
                                md:bottom-12">
      <div id="navbar" className="w-full flex justify-around px-3.5 py-2.5
                      md:w-[380px] md:rounded-full">
        {[{title:'home',
           path:'/',
           img:'https://cdn-icons-png.flaticon.com/512/1077/1077063.png'},
          {title:'about',
           path:'/about',
           img:'https://cdn-icons-png.flaticon.com/512/1979/1979383.png'},
          {title:'projects',
           path:'/projects',
           img:'https://cdn-icons-png.flaticon.com/512/686/686104.png'},
          {title:'blog',
           path:'/blog',
           img:'https://cdn-icons-png.flaticon.com/128/2198/2198360.png'},
          {title:'contact',
           path:'/contact',
           img:'https://cdn-icons-png.flaticon.com/512/2767/2767188.png'}].map(item =>
            <Link href={item.path}>
              <div className={`h-14 w-14 grid place-items-center rounded-full hover:invert xs:h-16 xs:w-16
                              ${pathname.startsWith(item.path) && item.title !== 'home' || pathname === item.path ? 'bg-gradient-to-r from-green-700 to-yellow-600 invert shadow-inner shadow-gray-600' : ''}`}>
                <img src={item.img} alt={item.title} width='36' height='36'/>
              </div>
            </Link>)}
      </div>
    </nav>
  )
}
