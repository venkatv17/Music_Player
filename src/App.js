import React from 'react';
//Components
import Player from './Components/player'
import Song from './Components/song'

//Styles
import './Styles/App.scss'

function App() {
  return (
    <div className="App">
      <Song />
      <Player />
    </div>
  );
}

export default App;
