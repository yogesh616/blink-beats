import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="mt-12">
     
      <nav className="bg-white  border-b border-gray-200">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto px-4 sm:px-6 lg:px-8">
          {/* Logo and Location */}
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="https://social-media-wb.netlify.app/images/newLogo.png"
              className="h-12 rounded-full"
              alt="Logo"
            />
            <a
              href="https://www.google.com/maps/search/Unit+1101+Prabhavee+Tech+Park,+Baner+Road,+Pune,+Maharashtra,+411045+INDIA"
              target="_blank"
              className="self-center text-2xl font-semibold whitespace-nowrap text-gray-800 dark:text-white flex items-center"
              rel="noopener noreferrer"
            >
              <i className="text-orange-300 fa-solid fa-location-dot"></i>
              <span className="text-orange-300 hidden md:inline">Location</span>
            </a>
          </div>

          {/* Navbar Menu for Desktop */}
          <div className="hidden md:flex items-center space-x-8">
           
            <div className="relative">
              <input
                type="text"
                id="simple-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 py-2 me-4"
                placeholder="Search ..."
                required
              />
              <svg
                className="absolute inset-y-0 start-0 w-4 h-4 text-gray-400 ps-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-user"></i>
                <span>Login</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-cart-shopping"></i>
                <span>Cart</span>
              </div>
            </div>
          </div>

          {/* Hamburger Menu for Mobile */}
          <button
            className="md:hidden inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-50 border-t border-gray-200">
            <ul className="flex flex-col p-4 space-y-2">
              <li>
                <div className="relative">
                  <input
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2"
                    placeholder="Search ..."
                    required
                  />
                  <svg
                    className="absolute inset-y-0 start-0 w-4 h-4 text-gray-400 ps-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-user"></i>
                  <span>Login</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-cart-shopping"></i>
                  <span>Cart</span>
                </div>
              </li>
             
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Header;
