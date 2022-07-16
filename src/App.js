import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Form from './Form'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Form triger={true}/>
    </div>
  );
}

export default App;
