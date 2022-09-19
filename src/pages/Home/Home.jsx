import React from 'react'
import { Helmet } from 'react-helmet'
import { ListOfGifs, TrendingTerms, SearchForm } from '../../components/index'
import useGifs from '../../hooks/useGifs'

const Home = () => {
  const { gifs, gifsSeen } = useGifs({ trend: true })

  console.log(gifsSeen)
  return (
    <>
      <Helmet>
        <title>Home | Gifny</title>
      </Helmet>
      <div className='grid md:grid-cols-4/5 gap-x-8'>
        <div className='row-start-2	md:row-start-1'>
          <SearchForm />
          <section>
            <h3 className='text-gradient text-3xl my-4 font-bold'>
              Most trending:
            </h3>
            <ListOfGifs gifs={gifs} />
          </section>
          {gifsSeen.length > 0 && (
            <section>
              <h3 className='text-gradient text-3xl my-4 font-bold'>
                Last search:
              </h3>
              <ListOfGifs gifs={gifsSeen.slice(0, 10)} />
            </section>
          )}
        </div>
        <div className='row-start-1'>
          <TrendingTerms />
        </div>
      </div>
    </>
  )
}

export default Home
