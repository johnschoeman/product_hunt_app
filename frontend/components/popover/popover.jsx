import React from 'react';

class Popover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      left: 0,
      top: 0,
      zone: 'belowCenter'
    };
  }



  render() {
    return (
      <div className="popover">
        <ul>
          
        </ul>
      </div>
    )
  }
}

export default Popover;