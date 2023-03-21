import React from 'react';
import Sidebar from './Sidebar';
import SearchPageFilter from './SearchPageFilter';

const SearchPage = () => {
  return (
    <>
      <div className="app__page">
        <Sidebar />
        <SearchPageFilter />
      </div>
    </>
  );
};

export default SearchPage;
