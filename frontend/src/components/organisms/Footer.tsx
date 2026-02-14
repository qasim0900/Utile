import React from 'react'
import { Link } from 'react-router-dom'
// import { ROUTES } from '../../constants'   // uncomment if you use route constants

export interface FooterProps {
  className?: string
}

export const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  return (
    <footer className={`bg-white text-gray-800 ${className}`}>
      <div className="container mx-auto px-6 md:px-8 lg:px-10 py-12 md:py-16">
        <div className="flex flex-col md:flex-row flex-wrap gap-10 md:gap-6 lg:gap-8">
          {/* Brand + Description */}
          <div className="flex-1 min-w-[220px] mb-6 md:mb-0">
            <Link
              to="/"
              className="inline-flex items-center text-3xl lg:text-4xl font-bold text-black hover:text-gray-900 transition-colors mb-5"
            >
              {/* You can replace with your actual logo SVG */}
              <span className="mr-2">
                <svg
                  className="h-9 w-9 fill-current"
                  viewBox="0 0 224.633 224.633"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Paste your SVG path here if you want to keep the original icon */}
                  <path
                    fill="#000001"
                    d="M203.843,133.498c0,50.252-40.883,91.135-91.135,91.135c-48.08,0-87.578-37.427-90.903-84.675l-4.834,0.047c-0.024,0-0.049,0-0.073,0c-2.865,0-5.481-1.632-6.74-4.21c-1.269-2.6-0.93-5.698,0.873-7.961l12.004-15.076c1.407-1.767,3.535-2.806,5.794-2.828c2.241-0.042,4.406,0.975,5.848,2.714l12.298,14.838c1.847,2.228,2.247,5.318,1.028,7.943c-1.218,2.624-3.836,4.314-6.729,4.342l-4.417,0.043c3.222,39.036,35.999,69.823,75.852,69.823c41.98,0,76.135-34.154,76.135-76.135c0-4.142,3.357-7.5,7.5-7.5S203.843,129.356,203.843,133.498z M214.476,88.838c-1.259-2.578-3.875-4.21-6.74-4.21c-0.024,0-0.049,0-0.073,0l-4.834,0.047C199.503,37.427,160.004,0,111.924,0C61.672,0,20.789,40.883,20.789,91.135c0,4.142,3.357,7.5,7.5,7.5s7.5-3.358,7.5-7.5C35.789,49.154,69.944,15,111.924,15c39.854,0,72.631,30.786,75.853,69.823l-4.417,0.043c-2.894,0.028-5.512,1.718-6.729,4.342c-1.219,2.625-0.818,5.715,1.028,7.943l12.297,14.838c1.426,1.72,3.543,2.714,5.774,2.714c0.024,0,0.049,0,0.073,0c2.259-0.022,4.387-1.061,5.794-2.828l12.005-15.076C215.405,94.536,215.745,91.438,214.476,88.838z M163.376,108.305c-1.143,2.841-3.896,4.703-6.959,4.703h-1.368v39.009c0,4.142-3.357,7.5-7.5,7.5H76.604c-4.143,0-7.5-3.358-7.5-7.5v-39.009h-1.368c-3.063,0-5.816-1.861-6.959-4.703c-1.142-2.841-0.442-6.091,1.768-8.21l44.341-42.521c2.902-2.782,7.48-2.782,10.383,0l44.341,42.521C163.819,102.214,164.518,105.464,163.376,108.305z M104.327,117.518v16.56h15.5v-16.56H104.327z"
                  />
                </svg>
              </span>
              UTILE
            </Link>

            <p className="text-gray-600 leading-relaxed max-w-md">
              UTILE connects you with trusted local professionals for home services —
              so you can focus on what really matters.
            </p>
          </div>

          {/* Links - Links */}
          <div className="flex-1 min-w-[160px]">
            <p className="uppercase text-gray-500 text-sm font-semibold tracking-wide mb-5 md:mb-6">
              Links
            </p>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/faq"
                  className="text-gray-700 hover:text-black transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/help"
                  className="text-gray-700 hover:text-black transition-colors"
                >
                  Help
                </Link>
              </li>
              <li>
                <Link
                  to="/support"
                  className="text-gray-700 hover:text-black transition-colors"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="flex-1 min-w-[160px]">
            <p className="uppercase text-gray-500 text-sm font-semibold tracking-wide mb-5 md:mb-6">
              Legal
            </p>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/terms"
                  className="text-gray-700 hover:text-black transition-colors"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-700 hover:text-black transition-colors"
                >
                  Privacy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="flex-1 min-w-[160px]">
            <p className="uppercase text-gray-500 text-sm font-semibold tracking-wide mb-5 md:mb-6">
              Social
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-black transition-colors"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-black transition-colors"
                >
                  Linkedin
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-black transition-colors"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="flex-1 min-w-[160px]">
            <p className="uppercase text-gray-500 text-sm font-semibold tracking-wide mb-5 md:mb-6">
              Company
            </p>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/blog"
                  className="text-gray-700 hover:text-black transition-colors"
                >
                  Official Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-700 hover:text-black transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-700 hover:text-black transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center md:text-left text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} UTILE. All rights reserved.
            <span className="hidden md:inline mx-3">•</span>
            <a
              href="https://www.freepik.com/free-photos-vectors/background"
              className="hover:text-gray-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Background vector created by freepik
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

Footer.displayName = 'Footer'