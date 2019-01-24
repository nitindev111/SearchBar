// library
import React, { Component } from "react";

// components
import { SearchInput } from "./SearchInput";
import SearchResults from "./SearchResults";

//utils
import { searchForResults } from "../utils/utils";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
      list: [],
      searchResults: [],
      selectedResult: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch("http://www.mocky.io/v2/5ba8efb23100007200c2750c")
      .then(response => response.json())
      .then(data => {
        console.log("resp", data);
        this.setState({
          list: data
        });
      });
  }

  handleChange = e => {
    e.preventDefault();
    const { value } = e.target;
    const { list } = this.state;
    const filteredResults = searchForResults(value, list);
    this.setState({
      searchInput: value,
      searchResults: filteredResults
    });
  };

  handleOnKeyPress = e => {
    const activeElement = document.activeElement;
    if (e.keyCode === 40 && activeElement.nextSibling) {
      if (activeElement.nextSibling.firstChild) {
        activeElement.nextSibling.firstChild.focus();
        if (activeElement.nextSibling)
          activeElement.nextSibling.focus();
      }
    } else if (e.keyCode === 38 && activeElement.previousSibling) {
      activeElement.previousSibling.focus();
    } else if (!e.keyCode) {
      e.target.focus();
    }
  };

  render() {
    const { searchInput, searchResults } = this.state;
    return (
      <div className="app-container">
        <SearchInput
          input={searchInput}
          handleOnInputChange={this.handleChange}
          handleOnKeyPress={this.handleOnKeyPress}
        />
        {searchInput && searchInput.length > 2 && (
          <SearchResults
            handleOnKeyPress={this.handleOnKeyPress}
            results={searchResults}
          />
        )}
      </div>
    );
  }
}

export default Container;
