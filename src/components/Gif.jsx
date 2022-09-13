import React from 'react'
import { Link } from 'react-router-dom'

function Gif({ id, title, url }) {
  return (
    <>
      <Link to={`/gif/${id}`} state={{ id, title, url }}>
        <h4>{title}</h4>
        <img alt={title} src={url} />
      </Link>
    </>
  )
}

export default Gif
