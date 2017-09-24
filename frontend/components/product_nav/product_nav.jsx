import React from 'react';
import { Link } from 'react-router-dom';

class ProductNav extends React.Component {

  render() {
    return (
      <div className="product-nav">
        <p className="product-nav-header">FEEDS</p>
        <ul className="product-nav-list">
          <li><Link to="/" >Home</Link></li>
          <li><Link to="/topics/tech" >Tech</Link></li>
          <li><Link to="/topics/games" >Games</Link></li>
          <li><Link to="/topics/books" >Books</Link></li>
          <li><Link to="/topics/artificial_intelligence" >Artificial Intelligence</Link></li>
          <li><Link to="/topics/developer_tools" >Developer Tools</Link></li>
          <li><Link to="/topics/home" >Home</Link></li>
          <li><Link to="/topics/productivity" >Productivity</Link></li>
          <li><Link to="/topics/touch_bar_apps" >Touch Bar Apps</Link></li>
          <li><Link to="/topics/wearables" >Wearables</Link></li>
          <li><Link to="/topics" >All Topics</Link></li>
        </ul>
      </div>
    );
  }
}

export default ProductNav;