import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../constants';

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'Home', href: '#home' },
    { title: 'About', href: '#about' },
    { title: 'Services', href: '#services' },
    { title: 'Price', href: '#price' },
    { title: 'Contact Us', href: '#contact' },
  ];

  return (
    <nav
      id="header"
      className={`fixed w-full z-50 top-0 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6">
        <div className="flex items-center">
          <a
            className={`toggleColour no-underline hover:no-underline font-bold text-2xl lg:text-4xl flex items-center gap-2 transition-colors duration-300 ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}
            href="/"
          >
            <svg
              className="h-8 fill-current inline"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 224.633 224.633"
            >
              <path d="M203.843,133.498c0,50.252-40.883,91.135-91.135,91.135c-48.08,0-87.578-37.427-90.903-84.675l-4.834,0.047c-0.024,0-0.049,0-0.073,0c-2.865,0-5.481-1.632-6.74-4.21c-1.269-2.6-0.93-5.698,0.873-7.961l12.004-15.076c1.407-1.767,3.535-2.806,5.794-2.828c2.241-0.042,4.406,0.975,5.848,2.714l12.298,14.838c1.847,2.228,2.247,5.318,1.028,7.943c-1.218,2.624-3.836,4.314-6.729,4.342l-4.417,0.043c3.222,39.036,35.999,69.823,75.852,69.823c41.98,0,76.135-34.154,76.135-76.135c0-4.142,3.357-7.5,7.5-7.5S203.843,129.356,203.843,133.498z M214.476,88.838c-1.259-2.578-3.875-4.21-6.74-4.21c-0.024,0-0.049,0-0.073,0l-4.834,0.047C199.503,37.427,160.004,0,111.924,0C61.672,0,20.789,40.883,20.789,91.135c0,4.142,3.357,7.5,7.5,7.5s7.5-3.358,7.5-7.5C35.789,49.154,69.944,15,111.924,15c39.854,0,72.631,30.786,75.853,69.823l-4.417,0.043c-2.894,0.028-5.512,1.718-6.729,4.342c-1.219,2.625-0.818,5.715,1.028,7.943l12.297,14.838c1.426,1.72,3.543,2.714,5.774,2.714c0.024,0,0.049,0,0.073,0c2.259-0.022,4.387-1.061,5.794-2.828l12.005-15.076C215.405,94.536,215.745,91.438,214.476,88.838z M163.376,108.305c-1.143,2.841-3.896,4.703-6.959,4.703h-1.368v39.009c0,4.142-3.357,7.5-7.5,7.5H76.604c-4.143,0-7.5-3.358-7.5-7.5v-39.009h-1.368c-3.063,0-5.816-1.861-6.959-4.703c-1.142-2.841-0.442-6.091,1.768-8.21l44.341-42.521c2.902-2.782,7.48-2.782,10.383,0l44.341,42.521C163.819,102.214,164.518,105.464,163.376,108.305z M104.327,117.518v16.56h15.5v-16.56H104.327z" />
            </svg>
            UTILE
          </a>
        </div>

        <div className="block lg:hidden pr-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`flex items-center p-1 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}
          >
            <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div
          className={`w-full flex-grow lg:flex lg:items-center lg:w-auto mt-2 lg:mt-0 z-20 transition-all duration-300 ${
            isMenuOpen ? 'block bg-white text-black p-4' : 'hidden'
          } lg:bg-transparent ${isScrolled ? 'lg:text-gray-800' : 'lg:text-white'}`}
        >
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            {navLinks.map((link) => (
              <li key={link.title} className="mr-3">
                <a
                  className="inline-block py-2 px-4 no-underline hover:underline transition-colors duration-300"
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.title}
                </a>
              </li>
            ))}
            <li className="mr-3">
              <button
                onClick={() => {
                  navigate(ROUTES.LOGIN);
                  setIsMenuOpen(false);
                }}
                className={`inline-block py-2 px-6 font-bold rounded mt-4 lg:mt-0 shadow focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out ${
                  isScrolled ? 'bg-black text-white' : 'bg-white text-gray-800'
                }`}
              >
                Login
              </button>
            </li>
          </ul>
          <button
            className={`mx-auto lg:mx-0 font-bold rounded-full mt-4 lg:mt-0 py-3 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out ${
              isScrolled ? 'bg-black text-white' : 'bg-white text-gray-800'
            }`}
          >
            Sign Up
          </button>
        </div>
      </div>
      <hr className={`border-b border-gray-100 opacity-25 my-0 py-0 ${isScrolled ? 'hidden' : 'block'}`} />
    </nav>
  );
};
