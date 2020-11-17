import React from "react";

import "../css/searchbar.css";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "Filter by Region", clicked: false };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  handleChange(event){
      this.setState({value: event.target.value});
  }

  render() {
    return (
      <div className="searchbar">
        <div className="input-icon">
          <i className="fas fa-search icon"></i>
          <input
            className="search"
            key="item1"
            value=""
            placeholder="search image"
          />
        </div>
        <div className="filter">
          <form
            className={
              this.state.clicked
                ? "filter-form arrow-up"
                : "filter-form arrow-down"
            }
          >
            <select
              value={this.state.value}
              onChange={ this.handleChange }
              onMouseDown={this.handleClick}
            >
              <option value="Coco">Coco</option>
              <option value="Hella">Hella</option>
              <option value="Frigga">Frigga</option>
            </select>
          </form>
        </div>
      </div>
    );
  }
}

export default Search;
