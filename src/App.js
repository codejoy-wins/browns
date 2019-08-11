import React from 'react';
import odell from './imgs/obj.jpg'
import obj from './imgs/beckham.png'
import baker from './imgs/mayfield.jpg'
import mayfield from './imgs/mvp.jpeg'
import mvp from './imgs/6.jpg'
import thirteen from './imgs/13.jpg'
import li from './imgs/li.png'
import lix from './imgs/lix.png'


import './App.css';

function App() {
  return (
    <div className="App">
      <header><h1> <a href="https://www.linkedin.com/in/maxjann/"><img className="smallify" src={li}></img></a> Cleveland Browns <a href="#main">Predictions</a> </h1></header>
      <img src={thirteen} alt="" className="widify"></img>
      <img src={baker} alt="" className="widify"></img>
      <img src={mayfield} alt="" className="widify"></img>
      <img src={mvp} alt="" className="widify"></img>
      <main id="main" ><h2>Season Predictions</h2>
      <p>Regular Season Record 13-3</p>
      <p>AFC North Title</p>
      </main>
      <img src={odell} alt="" className="widify"></img>
      <img src={obj} alt="" className="widify"></img>
      <footer><a href="https://maxjann.com">Jann Software</a></footer>
    </div>
  );
}

export default App;
