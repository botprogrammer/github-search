import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function UserItem({ user: { login, avatar_url } }) {
  return (
    <>
      <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
        <div className='grid gap-10'>
          <div>
            <div className='relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl'>
              <Link
                className='text-base-content text-opacity-40'
                to={`/user/${login}`}
              >
                <img
                  className='object-cover w-full h-56 md:h-64 xl:h-80'
                  src={avatar_url}
                  alt='Person'
                />
                <div className='absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100'>
                  <p className='mb-1 text-lg font-bold text-gray-100'>
                    {login}
                  </p>
                  <p className='mb-4 text-xs text-gray-100'>Product Manager</p>
                  <p className='mb-4 text-xs tracking-wide text-gray-400'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Itaque voluptatibus recusandae explicabo atque molestiae
                    nostrum voluptatem quam ab id. Architecto?
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
}

export default UserItem
