import PropTypes from 'prop-types'

function RepoItem({ repo }) {
  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count,
  } = repo

  return (
    <div
      className='flex flex-col justify-between overflow-hidden text-left transition-shadow 
    duration-200 dark:bg-gray-900 dark:text-gray-300 rounded shadow-xl group hover:shadow-2xl 
    border-2 border-gray-800'
    >
      <div className='p-5 h-60'>
        <a href={html_url} className='h-full flex flex-col justify-between'>
          <p className='mb-2 font-bold'>{name}</p>
          <p className='text-sm leading-5 text-gray-500'>{description}</p>
          <section className='text-gray-400 bg-gray-900 body-font'>
            <div className='container mx-auto'>
              <div className='flex flex-wrap -m-4 text-center'>
                <div class='p-4 sm:w-1/2 lg:w-1/4 w-1/2'>
                  <h2 class='title-font font-medium text-sm text-white'>
                    {watchers_count}
                  </h2>
                  <p class='leading-relaxed text-xs'>Watches</p>
                </div>
                <div class='p-4 sm:w-1/2 lg:w-1/4 w-1/2'>
                  <h2 class='title-font font-medium text-sm text-white'>
                    {stargazers_count}
                  </h2>
                  <p class='leading-relaxed text-xs'>Stars</p>
                </div>
                <div class='p-4 sm:w-1/2 lg:w-1/4 w-1/2'>
                  <h2 class='title-font font-medium text-sm text-white'>
                    {open_issues}
                  </h2>
                  <p class='leading-relaxed text-xs'>Issues</p>
                </div>
                <div class='p-4 sm:w-1/2 lg:w-1/4 w-1/2'>
                  <h2 class='title-font font-medium text-sm text-white'>
                    {forks}
                  </h2>
                  <p class='leading-relaxed text-xs'>Forks</p>
                </div>
              </div>
            </div>
          </section>
        </a>
      </div>
      <div className='w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100' />
    </div>
  )
}

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
}

export default RepoItem
