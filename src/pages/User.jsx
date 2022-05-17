import { useEffect, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import Spinner from '../components/layout/Spinner'
import RepoList from '../components/repos/RepoList'
import GithubContext from '../context/github/GithubContext'
import { getUserAndRepos } from '../context/github/GithubActions'
function User() {
  const { user, loading, repos, dispatch } = useContext(GithubContext)

  const params = useParams()

  useEffect(() => {
    dispatch({ type: 'SET_LOADING' })
    const getUserData = async () => {
      const userData = await getUserAndRepos(params.login)
      dispatch({ type: 'GET_USER_AND_REPOS', payload: userData })
    }

    getUserData()
  }, [dispatch, params.login])

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
  } = user

  if (loading) {
    return <Spinner />
  }

  const websiteUrl = blog?.startsWith('http') ? blog : 'https://' + blog

  return (
    <>
      <div className='w-full mx-auto lg:w-10/12'>
        <div className='container mx-auto my-5 p-5'>
          <div className='md:flex no-wrap md:-mx-2 '>
            <div className='w-full md:w-3/12 md:mx-2'>
              <div className='bg-gray-900 p-3'>
                <div className='image overflow-hidden'>
                  <img
                    className='h-auto w-full mx-auto'
                    src={avatar_url}
                    alt=''
                  />
                </div>
                <h1
                  className='font-bold text-xl leading-8 my-1'
                  style={{ color: '#35d398' }}
                >
                  {name}
                </h1>
                <h3 className='text-deep-purple-accent-400 font-lg text-semibold leading-6'>
                  {bio}
                </h3>
                <ul className='bg-gray-900 text-gray-600 hover:text-gray-700 py-2 mt-3 divide-y rounded shadow-sm'>
                  <li className='flex items-center py-3'>
                    <span
                      className='text-deep-purple-accent-400'
                      style={{ color: '#a5adba' }}
                    >
                      Status
                    </span>
                    <span className='ml-auto'>
                      <span className='bg-green-500 py-1 px-2 rounded text-white text-sm'>
                        {type}
                      </span>
                    </span>
                  </li>
                  {location && (
                    <li className='flex items-center py-3'>
                      <span
                        className='text-deep-purple-accent-400'
                        style={{ color: '#a5adba' }}
                      >
                        Location
                      </span>
                      <span className='ml-auto' style={{ color: '#a5adba' }}>
                        {location}
                      </span>
                    </li>
                  )}
                  {blog && (
                    <li className='flex items-center py-3'>
                      <span
                        className='text-deep-purple-accent-400'
                        style={{ color: '#a5adba' }}
                      >
                        Website
                      </span>
                      <span className='ml-auto' style={{ color: '#a5adba' }}>
                        <a href={websiteUrl}>{websiteUrl}</a>
                      </span>
                    </li>
                  )}
                  {twitter_username && (
                    <li className='flex items-center py-3'>
                      <span
                        className='text-deep-purple-accent-400'
                        style={{ color: '#a5adba' }}
                      >
                        Twitter
                      </span>
                      <span className='ml-auto' style={{ color: '#a5adba' }}>
                        {twitter_username}
                      </span>
                    </li>
                  )}
                </ul>
              </div>
              <div className='my-4' />
            </div>
            <div className='w-full md:w-9/12 mx-2 h-64'>
              <div className='bg-gray-900 p-3 shadow-sm rounded-sm'>
                <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
                  <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-4'>
                    <div className='text-center'>
                      <div className='flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-accent-400 sm:w-12 sm:h-12'>
                        <svg
                          className='w-8 h-8 text-teal-900 sm:w-10 sm:h-10'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 640 512'
                          fill='#35d398'
                        >
                          <path d='M319.9 320c57.41 0 103.1-46.56 103.1-104c0-57.44-46.54-104-103.1-104c-57.41 0-103.1 46.56-103.1 104C215.9 273.4 262.5 320 319.9 320zM319.9 144c39.68 0 71.96 32.3 71.96 72S359.5 288 319.9 288S247.9 255.7 247.9 216S280.2 144 319.9 144zM369.9 352H270.1C191.6 352 128 411.7 128 485.3C128 500.1 140.7 512 156.4 512h327.2C499.3 512 512 500.1 512 485.3C512 411.7 448.4 352 369.9 352zM160.2 480c3.021-53.41 51.19-96 109.1-96H369.9c58.78 0 106.9 42.59 109.1 96H160.2zM512 160c44.18 0 80-35.82 80-80S556.2 0 512 0c-44.18 0-80 35.82-80 80S467.8 160 512 160zM512 32c26.47 0 48 21.53 48 48S538.5 128 512 128s-48-21.53-48-48S485.5 32 512 32zM128 160c44.18 0 80-35.82 80-80S172.2 0 128 0C83.82 0 48 35.82 48 80S83.82 160 128 160zM128 32c26.47 0 48 21.53 48 48S154.5 128 128 128S80 106.5 80 80S101.5 32 128 32zM561.1 192H496c-11.16 0-22.08 2.5-32.47 7.438c-7.984 3.797-11.39 13.34-7.594 21.31s13.38 11.39 21.31 7.594C483.3 225.5 489.6 224 496 224h65.08C586.1 224 608 246.7 608 274.7V288c0 8.844 7.156 16 16 16S640 296.8 640 288V274.7C640 229.1 604.6 192 561.1 192zM162.8 228.3c7.938 3.797 17.53 .375 21.31-7.594c3.797-7.969 .3906-17.52-7.594-21.31C166.1 194.5 155.2 192 144 192H78.92C35.41 192 0 229.1 0 274.7V288c0 8.844 7.156 16 16 16S32 296.8 32 288V274.7C32 246.7 53.05 224 78.92 224H144C150.4 224 156.7 225.5 162.8 228.3z' />
                        </svg>
                      </div>
                      <h6 className='text-4xl font-bold text-deep-purple-accent-400'>
                        {followers}
                      </h6>
                      <p className='mb-2 font-bold text-md'>Followers</p>
                    </div>
                    <div className='text-center'>
                      <div className='flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-accent-400 sm:w-12 sm:h-12'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width={30}
                          height={30}
                          fill='#35d398'
                          className='bi bi-people'
                          viewBox='0 0 16 16'
                        >
                          <path d='M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z' />
                        </svg>
                      </div>
                      <h6 className='text-4xl font-bold text-deep-purple-accent-400'>
                        {following}
                      </h6>
                      <p className='mb-2 font-bold text-md'>Following</p>
                    </div>
                    <div className='text-center'>
                      <div className='flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-accent-400 sm:w-12 sm:h-12'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width={30}
                          height={30}
                          fill='#35d398'
                          viewBox='0 0 512 512'
                        >
                          <path d='M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z' />
                        </svg>
                      </div>
                      <h6 className='text-4xl font-bold text-deep-purple-accent-400'>
                        {public_repos}
                      </h6>
                      <p className='mb-2 font-bold text-md'>Public Repos</p>
                    </div>
                    <div className='text-center'>
                      <div className='flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-accent-400 sm:w-12 sm:h-12'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width={30}
                          height={30}
                          fill='#35d398'
                          viewBox='0 0 576 512'
                        >
                          <path d='M431.3 206.8C426.5 203.3 422.2 199.4 418.3 195C414.4 199.3 410.1 203.2 405.4 206.7C390.9 217.5 372.8 224 353.1 224C333.5 224 315.6 217.6 301.1 206.1C296.3 203.4 291.9 199.4 287.9 195C283.9 199.4 279.5 203.4 274.7 206.1C260.2 217.6 242.3 224 222.7 224C203.2 224 185.2 217.6 170.7 206.1C165.9 203.4 161.5 199.4 157.6 195C153.6 199.4 149.1 203.4 144.3 206.1C129.9 217.6 111.1 224 92.36 224C88.3 224 84.21 223.7 80.24 223.2C24.92 215.8-1.255 150.6 28.33 103.8L85.66 13.13C90.76 4.979 99.87 0 109.6 0H466.4C476.1 0 485.2 4.978 490.3 13.13L547.6 103.8C577.3 150.7 551 215.8 495.5 223.2C491.6 223.7 487.6 224 483.4 224C463.8 224 445.8 217.5 431.3 206.8H431.3zM464.4 32H111.6L55.38 120.9C36.71 150.5 55.1 187.5 84.44 191.5C87.11 191.8 89.8 192 92.36 192C108.1 192 123.6 184.8 133.8 173.6C139.9 166.9 148.5 163 157.6 163C166.6 163 175.2 166.9 181.3 173.6C191.5 184.8 206.2 192 222.7 192C239.3 192 253.1 184.8 264.2 173.6C270.2 166.9 278.9 163 287.9 163C296.1 163 305.6 166.9 311.6 173.6C321.8 184.8 336.5 191.1 353.1 191.1C369.7 191.1 384.3 184.8 394.5 173.6C400.6 166.9 409.2 163 418.2 163C427.2 163 435.9 166.8 441.9 173.5C452.2 184.8 466.1 191.1 483.4 191.1C486.1 191.1 488.7 191.8 491.4 191.5C520.9 187.5 539.3 150.5 520.6 120.9L464.4 32zM96 272V352H480V272C480 263.2 487.2 256 496 256C504.8 256 512 263.2 512 272V448C512 483.3 483.3 512 448 512H128C92.65 512 64 483.3 64 448V272C64 263.2 71.16 256 80 256C88.84 256 96 263.2 96 272zM96 448C96 465.7 110.3 480 128 480H448C465.7 480 480 465.7 480 448V384H96V448z' />
                        </svg>
                      </div>
                      <h6 className='text-4xl font-bold text-deep-purple-accent-400'>
                        {public_gists}
                      </h6>
                      <p className='mb-2 font-bold text-md'>Public Gists</p>
                    </div>
                  </div>
                </div>
                <a
                  href={html_url}
                  target='_blank'
                  rel='noreferrer'
                  className='btn border-2 border-gray-700 dark:bg-gray-900 dark:text-gray-300 block text-center 
                  w-full text-sm font-semibold rounded-lg hover:border-gray-700 hover:bg-gray-900 hover:text-gray-300 p-3 my-4'
                >
                  Visit Github
                </a>
                <Link
                  to='/'
                  className='btn btn-ghost border-2 border-gray-700 dark:bg-gray-900 dark:text-gray-300 block text-center 
                  w-full text-sm font-semibold rounded-lg p-3 my-4'
                >
                  Back To Search
                </Link>
              </div>
            </div>
          </div>
        </div>

        <RepoList repos={repos} />
      </div>
    </>
  )
}

export default User
