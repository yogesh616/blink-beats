import React from 'react'
import { useNavigate } from 'react-router'

function Top() {
    const navigate = useNavigate()
  return (
    <div className=' max-w-1-2 flex items-center justify-end  '>
       <ul className='  flex items-center justify-between'>
      <li>
                <a
                  onClick={() => navigate('/')}
                  className="block py-2 px-3 text-gray-900 rounded hover:text-orange-300 transition duration-300 cursor-pointer text-medium font-semibold"
                >
                  Spotlight
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:text-orange-300 transition duration-300 cursor-pointer text-medium font-semibold"
                >
                  Cart
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:text-orange-300 transition duration-300 cursor-pointer text-medium font-semibold"
                >
                  Studio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:text-orange-300 transition duration-300 cursor-pointer text-medium font-semibold"
                >
                  Help
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:text-orange-300 transition duration-300 cursor-pointer text-medium font-semibold"
                >
                  Join Us
                </a>
              </li>
      </ul>
    </div>
  )
}

export default Top
