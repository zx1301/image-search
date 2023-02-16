import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import ImageView from "./ImageView";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/imageView" element={<ImageView/>}/>
    </Routes>
  )
}

export default App;
