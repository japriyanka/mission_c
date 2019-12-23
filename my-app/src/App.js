import React from 'react';
import go from './image/ga-logomark-200.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="cardBox">
          <img src={go}>
          </img>
          <p class="heading">
            Mission - C
          </p>
          <div class= "user">
          <button class="login">Login</button> 
          <span class="or">or</span>
          <button class="guest">Guest</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
