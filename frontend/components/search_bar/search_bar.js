import React from 'react';
import { withRouter } from 'react-router';


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: "" };

    this.update = this.update.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  update(e) {
    let query = e.target.value;
    this.setState({query}, () => {
      if (this.state.query.length > 0) {
        this.props.omniSearch(query);
      }
    });
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.props.history.push({
        pathname: "/search",
        search: `?query=${this.state.query}`
      });
    }
  } 

  render() {
    return (
      <div>
        <input type="search" 
               value={this.state.query}
               onChange={this.update}
               onKeyPress={this.handleKeyPress}
               className="search-bar"
               placeholder="Discover your next favorite thing">
        </input>

        
      </div>
      );
  }
}

export default withRouter(SearchBar);