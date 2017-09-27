import React from 'react';


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
    this.state = { query: "" };
  }

  update(e) {
    this.setState({query: e.target.value});
    this.props.omniSearch(e.target.value);

  }


  render() {
    return (
      <div >
        <input type="search" 
               value={this.state.query}
               onChange={this.update}
               className="search-bar"
               placeholder="Discover your next favorite thing">
        </input>
      </div>
      );
  }
}

export default SearchBar;