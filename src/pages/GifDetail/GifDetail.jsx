import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { Spinner } from '../../components/'
import useSingleGif from '../../hooks/useSingleGif'

const GifDetail = () => {
  const location = useLocation()
  const params = useParams()

  const { loading, gif } = useSingleGif({
    loc: location,
    paramsId: params?.id,
  })

  return (
    <>
      {loading ? (
        <div className='mt-40'>
          <Spinner />
        </div>
      ) : (
        <div>
          <h1 className='text-gray-100 text-4xl	my-8 capitalize'>{gif.title}</h1>
          <img className='my-0 mx-auto' src={gif.url} alt={gif.title} />
        </div>
      )}
    </>
  )
}

export default GifDetail
