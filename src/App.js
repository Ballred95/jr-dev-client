import React from 'react';
import './App.css';
import Jobs from './jobs';

const jobs = [
  {title: 'swe', company:'google'}
]

function App() {
  return (
    <div className="App">
      <Jobs jobs={jobs} />
    </div>
  );
}

export default App;
