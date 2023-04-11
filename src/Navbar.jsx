import { Link, useLocation } from "react-router-dom"

export default function Navbar() {
  const location = useLocation();
  return (
    <div className="absolute mx-0 left-0 right-0 bottom-0 flex justify-center bg-transparent z-50
                                md:bottom-12">
      <div id="navbar" className="w-full flex justify-around px-3.5 py-2.5
                      md:w-80 md:rounded-full">
        {[{title:'home',
           path:'/',
           img:'https://cdn-icons-png.flaticon.com/512/845/845022.png'},
          {title:'about',
           path:'/about',
           img:'https://cdn-icons-png.flaticon.com/512/1077/1077063.png'},
          {title:'projects',
           path:'/projects',
           img:'https://cdn-icons-png.flaticon.com/512/686/686104.png'},
          {title:'contact',
           path:'/contact',
           img:'https://cdn-icons-png.flaticon.com/512/2767/2767188.png'}].map(item =>
            <Link to={item.path}>
              <div className={`h-12 w-12 grid place-items-center rounded-full hover:invert xs:h-16 xs:w-16
                              ${location.pathname === item.path ? 'bg-gradient-to-r from-green-700 to-yellow-600 invert shadow-ineer shadow-gray-600' : ''}`}>
                <img src={item.img} alt={item.title} width='36' height='36'/>
              </div>
            </Link>)}
      </div>
    </div>
  )
}
