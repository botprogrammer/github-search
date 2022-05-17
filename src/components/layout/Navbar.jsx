import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useState } from 'react'

function Navbar({ title }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div class='bg-gray-900'>
      <div class='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
        <div class='relative flex grid items-center grid-cols-2 lg:grid-cols-3'>
          <ul class='flex items-center hidden space-x-8 lg:flex'>
            <li>
              <Link
                to='/'
                aria-label='Our product'
                title='Our product'
                class='font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400'
              >
                Home
              </Link>
            </li>
          </ul>
          <Link
            to='/'
            aria-label='Company'
            title='Company'
            class='inline-flex items-center lg:mx-auto'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              fill='white'
              class='bi bi-github text-5xl'
              viewBox='0 0 16 16'
            >
              <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z' />
            </svg>
            <span class='ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase'>
              {title}
            </span>
          </Link>
          <ul class='flex items-center hidden ml-auto space-x-8 lg:flex'>
            <li>
              <Link
                to='/about'
                aria-label='Sign in'
                title='Sign in'
                class='font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400'
              >
                About Me
              </Link>
            </li>
            <li>
              <a
                href='https://pranavgoswami.netlify.app/'
                class='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none'
              >
                Portfolio
              </a>
            </li>
          </ul>
          <div class='ml-auto lg:hidden'>
            <button
              aria-label='Open Menu'
              title='Open Menu'
              class='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline'
              onClick={() => setIsMenuOpen(true)}
            >
              <svg class='w-5 text-gray-600' viewBox='0 0 24 24'>
                <path
                  fill='currentColor'
                  d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
                />
                <path
                  fill='currentColor'
                  d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
                />
                <path
                  fill='currentColor'
                  d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div class='absolute top-0 left-0 w-full'>
                <div class='p-5 bg-white border rounded shadow-sm'>
                  <div class='flex items-center justify-between mb-4'>
                    <div>
                      <a
                        href='/'
                        aria-label='Company'
                        title='Company'
                        class='inline-flex items-center'
                      >
                        <svg
                          class='w-8 text-deep-purple-accent-400'
                          viewBox='0 0 24 24'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeMiterlimit='10'
                          stroke='currentColor'
                          fill='none'
                        >
                          <rect x='3' y='1' width='7' height='12' />
                          <rect x='3' y='17' width='7' height='6' />
                          <rect x='14' y='1' width='7' height='6' />
                          <rect x='14' y='11' width='7' height='12' />
                        </svg>
                        <span class='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                          Company
                        </span>
                      </a>
                    </div>
                    <div>
                      <button
                        aria-label='Close Menu'
                        title='Close Menu'
                        class='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg class='w-5 text-gray-600' viewBox='0 0 24 24'>
                          <path
                            fill='currentColor'
                            d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul class='space-y-4'>
                      <li>
                        <a
                          href='/'
                          aria-label='Our product'
                          title='Our product'
                          class='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                        >
                          Product
                        </a>
                      </li>
                      <li>
                        <a
                          href='/'
                          aria-label='Our product'
                          title='Our product'
                          class='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                        >
                          Features
                        </a>
                      </li>
                      <li>
                        <a
                          href='/'
                          aria-label='Product pricing'
                          title='Product pricing'
                          class='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                        >
                          Pricing
                        </a>
                      </li>
                      <li>
                        <a
                          href='/'
                          aria-label='Sign in'
                          title='Sign in'
                          class='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                        >
                          Sign in
                        </a>
                      </li>
                      <li>
                        <a
                          href='/'
                          class='inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none'
                          aria-label='Sign up'
                          title='Sign up'
                        >
                          Sign up
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

Navbar.defaultProps = {
  title: 'Github Finder',
}

Navbar.propTypes = {
  title: PropTypes.string,
}

export default Navbar
