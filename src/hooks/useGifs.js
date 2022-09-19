import { useEffect, useState } from 'react'
import getGifs from '../services/getGifs'

const INITIAL_PAGE = 0

export default function useGifs({ keyword, trend, r }) {
  const [loading, setLoading] = useState(false)
  const [loadingNextPage, setLoadingNextPage] = useState(false)
  const [error, setError] = useState(false)

  const [page, setPage] = useState(INITIAL_PAGE)
  const [gifs, setGifs] = useState([])

  useEffect(() => {
    setLoading(true)
    getGifs({ keyword, trend, r })
      .then(gifs => setGifs(gifs))
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [keyword, setGifs])

  useEffect(() => {
    if (page === INITIAL_PAGE) return
    setLoadingNextPage(true)
    getGifs({ keyword, page, trend, r }).then(nextGifs => {
      setGifs(prevGifs => prevGifs.concat(nextGifs))
      setLoadingNextPage(false)
    })
  }, [page])

  return { loading, loadingNextPage, gifs, setPage, error }
}
