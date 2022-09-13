import { useEffect, useState } from 'react'
import getGifs from '../services/getGifs'

export default function useGifs({ keyword, trend }) {
  const [gifs, setGifs] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getGifs({ keyword }, trend).then(gifs => {
      setGifs(gifs)
      setLoading(false)
    })
  }, [keyword])
  return { loading, gifs }
}
