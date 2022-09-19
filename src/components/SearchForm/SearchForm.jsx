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
        className='border border-slate-900'
        type='text'
        placeholder='Search gif here'
        value={keyword}
        onChange={handleChange}
      />
      <select onChange={handleChangeRating} value={rating}>
        <option disabled>Rating type:</option>
        {RATINGS.map(rating => (
          <option key={rating}>{rating}</option>
        ))}
      </select>
      <input type='submit' value='Search' />
    </form>
  )
}

export default React.memo(SearchForm)
