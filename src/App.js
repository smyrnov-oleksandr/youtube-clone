import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import RecomendedVideo from './RecomendedVideo';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__page">
        <Sidebar />
        <RecomendedVideo />
      </div>
    </div>
  );
}

export default App;
