
import React from 'react'

export const GifGridItem = ({ images }) => {
  return (
    <div className='card animate__animated animate__fadeIn'>
        <img src={ images.url } alt={ images.title }></img>
        <p>{ images.title }</p>
    </div>
  )
}
