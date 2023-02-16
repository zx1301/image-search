import React from 'react';
import { useNavigate } from 'react-router-dom';

const ImageCard = ( {image} ) => {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate('/imageView', {state: image});
  };

  return (
    <div className="image" onClick={handleRedirect}>
      <div>
        <img src={image.previewURL} alt={image.tags} />
      </div>
    </div>
  )
}

export default ImageCard;