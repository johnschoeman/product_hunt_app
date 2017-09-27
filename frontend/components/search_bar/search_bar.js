import React from 'react';


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
    this.state = { query: "" };
  }

  update(e) {
    let query = e.target.value;
    this.setState({query}, () => {
      if (this.state.query.length > 0) {
        this.props.omniSearch(query);
      }
    });
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