import React from 'react';

const images = require.context('../../../public/images', true);
const imageList = images.keys().map(image => images(image));


const PhotoAlbum = () => {

  return (
    <div className="photo-album">
      {imageList.map((image, index) => (
        <figure key={index} className="image-container">
          <img alt={index} src={image}></img>
        </figure>
      ))}
    </div>
  )
}

export default PhotoAlbum
