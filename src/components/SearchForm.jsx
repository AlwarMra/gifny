import React, { useState } from 'react'

const SearchForm = ({ onSubmit }) => {
  const [keyword, setKeyword] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    onSubmit({ keyword })
  }
  const handleChange = e => {
    setKeyword(e.target.value)
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
      <input type='submit' value='Search' />
    </form>
  )
}

export default React.memo(SearchForm)
