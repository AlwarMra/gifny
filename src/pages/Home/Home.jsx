import React, { useCallback } from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'
import { ListOfGifs, TrendingTerms, SearchForm } from '../../components/index'
import useGifs from '../../hooks/useGifs'

const Home = () => {
  const navigate = useNavigate()

  const handleSubmit = useCallback(
    ({ keyword }) => {
      navigate('/search/' + keyword)
    },
    [navigate]
  )

  const { gifs } = useGifs({ trend: true })

  return (
    <>
      <Helmet>
        <title>Home | Gifny</title>
      </Helmet>
      <div className='grid md:grid-cols-4/5 gap-x-8'>
        <div className='row-start-2	md:row-start-1'>
          <SearchForm onSubmit={handleSubmit} />
          <ListOfGifs gifs={gifs} />
        </div>
        <div className='row-start-1'>
          <TrendingTerms />
        </div>
      </div>
    </>
  )
}

export default Home
