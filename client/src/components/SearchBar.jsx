import PropTypes from "prop-types";
import React from "react";

const SearchBar = ({ handleChange }) => {
  return (
    <div className="field">
      <input
        type="search"
        className="text-rtl form-control"
        placeholder="חפש מוצר"
        onInput={handleChange}
      />
    </div>
  );
};

SearchBar.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default SearchBar;
