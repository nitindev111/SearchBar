import React from "react";
import PropTypes from "prop-types";

export const ResultCard = ({ result, index, onKeyDown }) => (
  <div
    className="result-card"
    id={result.id}
    tabIndex={index + 1}
    onMouseEnter={onKeyDown}
    onKeyDown={onKeyDown}
  >
    <p className="id">{result.id}</p>
    <p className="name">{result.name}</p>
    <p className="address">{result.address}</p>
  </div>
);

ResultCard.propTypes = {
  result: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    address: PropTypes.string
  }),
  onChange: PropTypes.func,
  handleOnKeyPress: PropTypes.func
};

ResultCard.defaultProps = {
  input: ""
};
