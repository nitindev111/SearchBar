// library
import React from "react";
import PropTypes from "prop-types";

export const SearchInput = ({
    handleOnKeyPress,
    input,
    handleOnInputChange
}) => (
        <input
            onKeyDown={handleOnKeyPress}
            className="search-input"
            type="text"
            placeholder="Search users by ID, address, name..."
            value={input}
            onChange={handleOnInputChange}
            tabIndex="0"
        />
    );

SearchInput.propTypes = {
    input: PropTypes.string,
    onChange: PropTypes.func,
    handleOnKeyPress: PropTypes.func
};

SearchInput.defaultProps = {
    input: ""
};
