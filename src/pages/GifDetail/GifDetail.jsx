import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import getSingleGif from '../../services/getSingleGif'

const GifDetail = () => {
  const [gif, setGif] = useState({ id: '', title: '', url: '' })

  const location = useLocation()
  const params = useParams()

  useEffect(() => {
    if (location.state === null) {
      getSingleGif(params.id).then(g => setGif(g))
    } else {
      const { id, title, url } = location.state
      setGif({ id, title, url })
      console.log('fff', gif)
    }
  }, [])
  return (
    <div>
      <img src={gif.url} alt={gif.title} />
    </div>
  )
}

export default GifDetail
