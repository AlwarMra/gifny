import React from 'react'
import Gif from './Gif'

const ListOfGifs = ({ gifs }) => {
  return (
    <div className='min-h-screen grid-parent grid grid-cols-custom-fit gap-x-4 grid-flow-dense	'>
      {gifs.map(({ id, title, url }) => (
        <Gif id={id} key={id} title={title} url={url} />
      ))}
    </div>
  )
}

export default ListOfGifs
