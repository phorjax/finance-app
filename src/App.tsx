import React from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="container">
      {/* Row 1 */}
      <div className="row">
        <div className="col col-6">Column 1</div>
        <div className="col col-6">Column 2</div>
      </div>
      {/* Row 2 */}
      <div className="row">
        <div className="col col-4">Column 1</div>
        <div className="col col-4">Column 2</div>
        <div className="col col-4">Column 3</div>
      </div>
    </div>
  );
};

export default App;
