import { useState, useContext } from 'react'
import GithubContext from '../../context/github/GithubContext'
import AlertContext from '../../context/alert/AlertContext'
import { searchUsers } from '../../context/github/GithubActions'

function UserSearch() {
  const [text, setText] = useState('')

  const { users, dispatch } = useContext(GithubContext)
  const { setAlert } = useContext(AlertContext)

  const handleChange = (e) => setText(e.target.value)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (text === '') {
      setAlert('Please enter something', 'error')
    } else {
      dispatch({ type: 'SET_LOADING' })
      const users = await searchUsers(text)
      dispatch({ type: 'GET_USERS', payload: users })

      setText('')
    }
  }

  return (
    <div class='flex justify-center'>
      <div class='mb-3 xl:w-96'>
        <form onSubmit={handleSubmit}>
          <div class='input-group relative flex  items-stretch w-full mb-4'>
            <input
              type='search'
              class='form-control relative bg-transparent flex-auto min-w-0 block w-full 
              px-3 py-1.5 text-base font-normal text-gray-700 bg-clip-padding border 
              border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-400 
              focus:outline-none'
              placeholder='Search'
              aria-label='Search'
              aria-describedby='button-addon3'
              value={text}
              onChange={handleChange}
            />
            <button
              class='btn inline-block px-6 py-2 border-1 border-gray-400 text-gray-400 
              font-medium text-xs leading-tight uppercase rounded hover:bg-transparent 
               hover:border-gray-300 focus:ring-0 transition duration-150 ease-in-out'
              type='submit'
              id='button-addon3'
            >
              Search
            </button>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button
            class='btn ml-10 inline-block px-6 py-2 border-2 border-gray-400 text-gray-400 
            font-medium text-xs leading-tight uppercase rounded hover:border-gray-300 
            focus:outline-none focus:ring-0 transition duration-150 ease-in-out'
            type='button'
            id='button-addon3'
            onClick={() => dispatch({ type: 'CLEAR_USERS' })}
          >
            Clear Results
          </button>
        </div>
      )}
    </div>
  )
}

export default UserSearch
