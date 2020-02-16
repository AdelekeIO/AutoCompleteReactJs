import React, { Component } from "react";
import "./css/AutoCompleteText.css";
export default class AutoCompleteText extends Component {
  constructor(props) {
    super(props);
    this.items = ["David", "Donald", "Yemisi", "Titi", "Bola"];
    this.state = {
      suggestions: [],
      searchValue: ""
    };
  }
  onTextChange = e => {
    const { items } = this.props;
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions = items.sort().filter(v => regex.test(v));
    }
    this.setState({
      suggestions,
      searchValue: value
    });
  };

  suggestionSelected(v) {
    this.setState({
      searchValue: v,
      suggestions: []
    });
  }
  renderSuggestions() {
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul>
        {suggestions.map(item => (
          <li onClick={() => this.suggestionSelected(item)}>{item}</li>
        ))}
      </ul>
    );
  }
  render() {
    let { searchValue } = this.state;
    return (
      <div className="AutoCompleteText">
        <input type="text" value={searchValue} onChange={this.onTextChange} />
        {this.renderSuggestions()}
      </div>
    );
  }
}
  