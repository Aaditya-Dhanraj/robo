import React from "react";

const SearchBox = ({ searchfield, SearchChange }) => {
  return (
    <div className="pa3">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="Search"
        placeholder="Search Robots Here"
        onChange={SearchChange}
      />
    </div>
  );
};
export default SearchBox;
