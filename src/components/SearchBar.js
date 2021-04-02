import React from 'react'

const SearchBar = ({onChange, placeholder}) => {
    return (
      <div className="Search">
        <input
          className="SearchInput"
          type="text"
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
    );
};

export default SearchBar;