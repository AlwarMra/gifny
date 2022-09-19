import React, { useEffect, useRef, useCallback } from 'react'
import { Spinner, ListOfGifs, SearchForm } from '../../components/index'
import { useParams } from 'react-router-dom'
import useGifs from '../../hooks/useGifs'
import useNearScreen from '../../hooks/useNearScreen'
import debounce from 'just-debounce-it'
import { Helmet } from 'react-helmet'

const SearchResults = () => {
  const { keyword } = useParams()
  const externalRef = useRef()

  const { loading, gifs, error, setPage } = useGifs({ keyword })
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false,
  })

  const debounceHandleNextPage = useCallback(
    debounce(() => setPage(nextPage => nextPage + 1), 1000),
    []
  )

  useEffect(() => {
    if (isNearScreen) debounceHandleNextPage()
  }, [debounceHandleNextPage, isNearScreen])
  if (error) {
    return 'No results'
  } else {
    return (
      <>
        <Helmet>
          <title>{keyword + ' | Gifny'}</title>
        </Helmet>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <SearchForm />
            <div className='max-w-3xl	'>
              <h1 className='text-gray-100 text-4xl	my-8 capitalize'>
                {keyword}
              </h1>
              <ListOfGifs gifs={gifs} />
              <div id='visor' ref={externalRef} />
            </div>
          </>
        )}
      </>
    )
  }
}

export default SearchResults
