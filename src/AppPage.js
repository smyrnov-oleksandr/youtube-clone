import React from 'react';
import RecomendedVideo from './RecomendedVideo';
import Sidebar from './Sidebar';

const AppPage = () => {
  return (
    <>
      <div className="app__page">
        <Sidebar />
        <RecomendedVideo />
      </div>
    </>
  );
};

export default AppPage;
