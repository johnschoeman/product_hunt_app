import React from 'react';
import { Link } from 'react-router-dom';

class SiteNav extends React.Component {
  constructor(props) {
    super(props);
    this.showMetaMenu = this.showMetaMenu.bind(this);
  }

  showMetaMenu() {

  }

  render() {
    return (
      <hgroup className="header-group site-nav">
        <Link to="/ship">Ship</Link>
        <Link to="/ask">Ask</Link>
        <Link to="/jobs">Jobs</Link>
        <button className="meta-menu-button" onClick={this.showMetaMenu} >...</button>
      </hgroup>
    );
  }
}

export default SiteNav;