function About() {
  return (
    <>
      <section className='text-gray-400 bg-gray-900 body-font'>
        <div className='container px-5 py-24 mx-auto flex flex-col'>
          <div className='lg:w-4/6 mx-auto'>
            <div className='flex flex-col sm:flex-row mt-10'>
              <div className='sm:w-1/3 text-center sm:pr-8 sm:py-8'>
                <div className='w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-800 text-gray-600'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    className='w-10 h-10'
                    viewBox='0 0 24 24'
                  >
                    <path d='M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2' />
                    <circle cx={12} cy={7} r={4} />
                  </svg>
                </div>
                <div className='flex flex-col items-center text-center justify-center'>
                  <h2 className='font-medium title-font mt-4 text-white text-3xl'>
                    Pranav Goswami
                  </h2>
                  <div className='w-12 h-1 bg-indigo-500 rounded mt-2 mb-4' />
                  <p className='text-base text-gray-400'>
                    Pranav is a software engineer who specializes in building
                    stable websites with Javascript (occasionally Python),
                    ReactJS in addition to modern libraries and frameworks.
                  </p>
                </div>
              </div>
              <div className='sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left'>
                <p className='leading-relaxed text-lg mb-4'>
                  Greetings! My name is Pranav and I enjoy designing and
                  creating things that live on the internet. My interest in web
                  development started back in 2017, in my first year of collage
                  when I discoverd some stunning websites -- turns out there's
                  more to that than just only HTML and CSS!
                  <br />
                  <br />I found web development to be fun and challenging, so I
                  started learning more about it. That's how I started working
                  on various projects and making appealing sites for other
                  people as well as myself, including this Github Finder!
                  <br />
                  <br />
                  You can check out my other projects on my protfolio!
                </p>
                <a
                  href='https://pranavgoswami.netlify.app/'
                  className='text-indigo-400 inline-flex items-center'
                  target='_blank'
                  rel='noreferrer'
                >
                  Visit Portfolio
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    className='w-4 h-4 ml-2'
                    viewBox='0 0 24 24'
                  >
                    <path d='M5 12h14M12 5l7 7-7 7' />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
