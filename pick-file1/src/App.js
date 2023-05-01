import React from 'react';
import './App.css';
import PickFile from './PickFile';

const App = () => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(`Selected file: ${file.name}`);
  };

  return (
    <div className="App">
      <PickFile onChange={handleFileChange} />
    </div>
  );
};

export default App;
