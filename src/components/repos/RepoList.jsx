import PropTypes from 'prop-types'
import RepoItem from './RepoItem'

function RepoList({ repos }) {
  return (
    <div className='rounded-lg shadow-lg card bg-base-100'>
      <div className='card-body bg-gray-900' style={{ padding: '0', gap: '0' }}>
        <h2 className='text-3xl m-auto my-4 font-bold card-title'>
          Latest Repositories
        </h2>
        <div className='bg-gray-900'>
          <div className='relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
            <div className='relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4'>
              {repos.map((repo) => (
                <RepoItem key={repo.id} repo={repo} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

RepoList.propTypes = {
  repos: PropTypes.array.isRequired,
}

export default RepoList
