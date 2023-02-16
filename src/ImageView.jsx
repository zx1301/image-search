import React from 'react';
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const ImageView = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // redirect user back to home page if they try 
  // to access without clicking on image
  useEffect(() => {
    if (location.state == null) {
      navigate('/');
    }
  }, []);

  const image = location.state;

  const tags = image.tags.split(', ');
  return(
      <>
      <div className='app'>
        <i class="arrow left"></i>
        <div>
          <img src={image.largeImageURL} alt={image.tags}></img>
        </div>
        <div>
          {tags.map((tag) => (
            <p className='tag'>{tag}</p>
          ))}
        </div>
      </div>
      </>
  );
};

export default ImageView;