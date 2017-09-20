import React from 'react';

class Logo extends React.Component {

  
  render () {

    const styleLogo = {
      display: 'flex'
    };

    const styleLogoImg = {
      width: '32px',
      height: '32px',
      fontSize: '16px',
      color: 'white',
      textAlign: 'center',
      verticalAlign: 'bottom',  
      padding: 'auto',
      border: '1px solid $orange',
      borderRadius: '20px',
      backgroundColor: '#DA552F',
      fontWeight: '600',
      lineHeight: '32px'
    };

    const styleText = {
      marginLeft: '5px'
    };
    
    return (
      <div style={styleLogo}>
        <div style={styleLogoImg}>P</div>
        <div style={styleText}>
          <p>Product Hunt</p>
          <p>The best new products, every day</p>
        </div>
      </div>
    );
  }
}

export default Logo;

// font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;

// path[Attributes Style] {
//   d: path('M 40 20 c 0 11.046 -8.954 20 -20 20 S 0 31.046 0 20 S 8.954 0 20 0 s 20 8.954 20 20');
//   fill: rgb(218, 85, 47);
// }