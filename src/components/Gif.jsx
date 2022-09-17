import React from 'react'
import { Link } from 'react-router-dom'

function Gif({ id, title, url }) {
  return (
    <>
      <div className='parent-background-hover break-inside-avoid w-full mb-4 max-h-80'>
        <Link
          className='relative background-hover'
          to={`/gif/${id}`}
          state={{ id, title, url }}
        >
          <img
            className='object-cover w-full h-full rounded-lg '
            alt={title}
            src={url}
          />
        </Link>
      </div>
    </>
  )
}

export default React.memo(Gif)
