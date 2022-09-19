import React from 'react'
import { useNavigate } from 'react-router-dom'
import useForm from './useForm'

const RATINGS = ['g', 'pg', 'pg-13', 'r']

const SearchForm = ({ initialKeyword = '', initialRating = 'r' }) => {
  const { keyword, rating, updateKeyword, updateRating } = useForm({
    initialKeyword,
    initialRating,
  })
  const navigate = useNavigate()

  const handleChange = e => {
    updateKeyword(e.target.value)
  }

  const handleChangeRating = e => {
    updateRating(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    navigate(`/search/${keyword}/${rating}`)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        className='border-none px-4 py-1 p-b[3px]'
        type='text'
        placeholder='Search gif here'
        value={keyword}
        onChange={handleChange}
      />
      <select
        onChange={handleChangeRating}
        value={rating}
        className='px-4 py-1 border-l-2'
      >
        <option disabled>Rating:</option>
        {RATINGS.map(rating => (
          <option key={rating}>{rating}</option>
        ))}
      </select>
      <input
        type='submit'
        value='Search'
        className='text-white bg-fuchsia-800 px-4 py-1 cursor-pointer hover:bg-teal-500'
      />
    </form>
  )
}

export default React.memo(SearchForm)
