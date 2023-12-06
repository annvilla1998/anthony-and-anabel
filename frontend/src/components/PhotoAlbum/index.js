import React from 'react';
import "./photo-album.css";

const images = require.context('../../../public/images', true);
const imageList = images.keys().map(image => images(image));


const PhotoAlbum = () => {

  return (
    <div className="photo-album">
      {imageList.map((image, index) => (
        <figure className="image-container">
          <img key={index} alt={`${index}`} src={image}></img>
        </figure>
      ))}
    </div>
  )
}

export default PhotoAlbum
