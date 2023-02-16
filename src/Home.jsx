import React from 'react';
import { useState } from 'react';
import './App.css';
import SearchIcon from './searchIcon.png';
import ImageCard from './ImageCard';

const Home = () => {
  const [images, setImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const API_URL = 'https://pixabay.com/api/?key=33675340-38148e9c53e0c6b003fcd1a5a';

  const getImages = async (query) => {
    const response = await fetch(`${API_URL}&q=${query}`);
    const data = await response.json();

    setImages(data.hits);
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      getImages(searchTerm);
    }
  }

  return(
    <div className ="app">
      <h1>Image Search</h1>
      <div className="search">
        <input
          placeholder="search here"
          value={searchTerm}
          onChange={(e)=> setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={()=> getImages(searchTerm)}
        />
      </div>

      {
        images?.length > 0 && (
          <div className="container">
            {images.map((img) => (
              <ImageCard image={img}/>
            ))}
          </div>
        )
      }
    </div>
  );
};

export default Home;