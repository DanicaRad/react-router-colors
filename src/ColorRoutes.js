import React, {useState, useEffect} from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import ColorList from './ColorList';
import NewColorForm from './NewColorForm';
import Color from './Color';

function ColorRoutes() {
  const initialColors = JSON.parse(localStorage.getItem("colors")) || {
    red: "#FF0000",
    yellow: "#ffff00",
    blue: "#0000FF"
  };
  const [colors, updateColors] = useState(initialColors);

  useEffect(
    () => localStorage.setItem("colors", JSON.stringify(colors)), 
    [colors]
  );

  function handleAdd(newColorObj) {
    updateColors(savedColors => ({ ...savedColors, ...newColorObj }))
  };

  function getHex(color) {
    return colors[color];
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='colors' element={<ColorList colors={colors} />}/>
        <Route path='colors/new' element={<NewColorForm addColor={handleAdd}/>} />
        <Route path='colors/:color' element={<Color getHex={getHex}/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default ColorRoutes;