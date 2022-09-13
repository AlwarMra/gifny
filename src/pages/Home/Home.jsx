import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ListOfGifs } from '../../components/index'
import useGifs from '../../hooks/useGifs'

const Home = () => {
  const [keyword, setKeyword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    navigate('/search/' + keyword)
    console.log(keyword)
  }

  const handleChange = e => {
    setKeyword(e.target.value)
  }
  const { gifs } = useGifs({ trend: true })

  return (
    <>
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
      <ListOfGifs gifs={gifs} />
    </>
  )
}

export default Home
