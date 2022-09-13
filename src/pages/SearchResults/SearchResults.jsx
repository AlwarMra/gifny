import React from 'react'
import { Spinner, ListOfGifs } from '../../components/index'
import { useParams } from 'react-router-dom'
import useGifs from '../../hooks/useGifs'

const SearchResults = () => {
  const { keyword } = useParams()

  const { loading, gifs } = useGifs({ keyword })

  return <>{loading ? <Spinner /> : <ListOfGifs gifs={gifs} />}</>
}

export default SearchResults
