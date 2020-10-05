import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import ParentComponent from './components/ParentComponent'

function App() {
  return (
    <div className="App">
       <Greet name="Rahul" surname="Sharma">
        <p>Learning React is Fun!!</p>
        <button>Action</button>
      </Greet>
      <Welcome name="Rahul" surname="Sharma" />
      <Hello /> 
      <Message />
      <Counter />
      <FunctionClick />
      <ClassClick />
      <ParentComponent />
    </div>
  );
}

export default App;
