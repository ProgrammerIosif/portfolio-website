import { Link, useLocation } from "react-router-dom"

export default function Navbar() {
  const location = useLocation();
  return (
    <div className="absolute mx-0 left-0 right-0 bottom-0 flex justify-center bg-transparent
                                xs:bottom-12">
      <div id="navbar" className="w-full flex justify-around px-3.5 py-2.5
                      xs:w-80 xs:rounded-full">
        {[{title:'home',
           img:'https://cdn-icons-png.flaticon.com/512/845/845022.png'},
          {title:'about',
           img:'https://cdn-icons-png.flaticon.com/512/1077/1077063.png'},
          {title:'projects',
           img:'https://cdn-icons-png.flaticon.com/512/686/686104.png'},
          {title:'contact',
           img:'https://cdn-icons-png.flaticon.com/512/2767/2767188.png'}].map(item =>
            <Link to={item.title}>
              <div className={`h-16 w-16 grid place-items-center rounded-full hover:invert
                              ${location.pathname === '/' + item.title ? 'bg-gradient-to-r from-green-700 to-yellow-600 invert shadow-ineer shadow-gray-600' : ''}`}>
                <img src={item.img} alt={item.title} width='36' height='36'/>
              </div>
            </Link>)}
      </div>
    </div>
  )
}
