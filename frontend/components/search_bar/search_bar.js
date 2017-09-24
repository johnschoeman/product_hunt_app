import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
    this.state = { searchTerm: "" };
  }

  update(e) {
    this.setState({searchTerm: e.target.value});
  }

  render() {
    return (
      <div >
        <input type="search" 
               value={this.state.searchTerm}
               onChange={this.update}
               className="search-bar"
               placeholder="Discover your next favorite thing">
        </input>
      </div>
      );
  }
}

export default SearchBar;