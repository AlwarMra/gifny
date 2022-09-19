import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { Spinner } from '../../components/'
import useSingleGif from '../../hooks/useSingleGif'
import { Helmet } from 'react-helmet'

const GifDetail = () => {
  const location = useLocation()
  const params = useParams()

  const { loading, gif } = useSingleGif({
    loc: location,
    paramsId: params?.id,
  })
  const title = gif ? gif.title : ''

  if (loading) {
    return (
      <>
        <Helmet>
          <title>Loading...</title>
        </Helmet>
        <div className='mt-40'>
          <Spinner />
        </div>
      </>
    )
  }
  return (
    <>
      <Helmet>
        <title>{title + '| Gifny'} || Gifny</title>
      </Helmet>
      <div>
        <h1 className='text-gray-100 text-4xl	my-8 capitalize'>{gif.title}</h1>
        <img className='my-0 mx-auto' src={gif.url} alt={gif.title} />
      </div>
    </>
  )
}

export default GifDetail
