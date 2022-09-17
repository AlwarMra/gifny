import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import getSingleGif from '../services/getSingleGif'

export default function useSingleGif({ loc = null, paramsId }) {
  const [gif, setGif] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (loc.state === null) {
      setLoading(true)
      getSingleGif(paramsId)
        .then(res => {
          setGif(res)
        })
        .catch(() => {
          setError(true)
          navigate('/notfound', { replace: true })
        })
        .finally(() => {
          setLoading(false)
        })
    } else {
      setGif(loc.state)
    }
  }, [])

  return { loading, gif, error }
}
