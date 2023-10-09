import React  from 'react';
import ReactDOM  from 'react-dom/client';

import SimpleFetchExample from './SimpleFetchExample/SimpleFetchExample.jsx';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <SimpleFetchExample />
      </div>
    );
  }
}

const domContainer = document.querySelector('#react-root');
const root = ReactDOM.createRoot(domContainer);
root.render(<App />);