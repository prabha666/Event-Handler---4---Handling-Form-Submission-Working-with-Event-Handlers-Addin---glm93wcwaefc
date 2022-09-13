import React from 'react'
import '../styles/App.css';
const App = () => {

  const handleDoubleClick = (event) =>{
   console.log("I was double clicked");
  };
   const  handleDoubleClickB = () => {
    console.log("I was not double clicked");
  };
  return (
    <div id="main">
      <button id="button-a" onClick={ handleDoubleClick}>
        Button A
      </button>
      <button id="button-b" onClick={ handleDoubleClickB}>
        Button B
      </button>
    </div>
  );
}


export default App;
