import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import RecomendedVideo from './RecomendedVideo';
import AppPage from './AppPage';
import SearchPage from './SearchPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import './SearchPageFilter.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<AppPage />}></Route>
          <Route path="/search/:searchTerm" element={<SearchPage />}></Route>
          <Route path="/sidebar" element={<Sidebar />}></Route>
          <Route path="/recomendedVideo" element={<RecomendedVideo />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
