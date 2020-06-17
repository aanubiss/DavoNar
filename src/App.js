import React from 'react';
import './App.css';

import { BrowserRouter } from 'react-router-dom'
import Imgur from './containers/Imgur';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Imgur />
      </div>
    </BrowserRouter>
  );
}

export default App;