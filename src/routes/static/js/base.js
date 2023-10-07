'use strict';

import React  from 'react';
import ReactDOM  from 'react-dom';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }
    return (
      <input type="button" value="Like Me" onClick={() => this.setState({liked: true})} />
      );
  }
}

const domContainer = document.querySelector('#react-root');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));