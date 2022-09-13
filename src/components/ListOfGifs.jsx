import React from 'react'
import Gif from './Gif'

const ListOfGifs = ({ gifs }) => {
  console.log(gifs.length)
  return (
    <div className=''>
      {gifs.length > 0
        ? gifs.map(({ id, title, url }) => (
            <Gif id={id} key={id} title={title} url={url} />
          ))
        : 'no results'}
    </div>
  )
}

export default ListOfGifs
