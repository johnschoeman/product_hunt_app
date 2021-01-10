import React from 'react';
import { withRouter } from 'react-router';

class Logo extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.history.push("/");
  }
  
  render () {
    const styleLogo = {
      display: 'flex'
    };

    const styleText = {
      marginLeft: '5px'
    };
    
    return (
      <div className="logo" onClick={this.handleClick}>
        <div className="logo-img"></div>
        <div style={styleText}>
          <p className="logo-text-main">Product Hunt</p>
          <p className="logo-text-second">The best new products, every day</p>
        </div>
      </div>
    );
  }
}

export default withRouter(Logo);

// font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;

// path[Attributes Style] {
//   d: path('M 40 20 c 0 11.046 -8.954 20 -20 20 S 0 31.046 0 20 S 8.954 0 20 0 s 20 8.954 20 20');
//   fill: rgb(218, 85, 47);
// }