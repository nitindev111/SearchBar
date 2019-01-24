import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { ResultCard } from "./ResultCard";
import { EmptyStateCard } from "./EmptyStateCard";

const SearchResults = ({ results, handleOnKeyPress }) => (
  <div className="search-results">
    {results.length === 0 ? (
      <EmptyStateCard />
    ) : (
        results.map((result, index) => (
          <ResultCard
            onKeyDown={handleOnKeyPress}
            index={index}
            key={result.id}
            result={result}
          />
        ))
      )}
  </div>
);

SearchResults.propTypes = {
  results: PropTypes.array,
  handleOnKeyPress: PropTypes.func
};

SearchResults.defaultProps = {
  results: []
};

export default SearchResults;
