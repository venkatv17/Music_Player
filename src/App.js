import React,{useEffect, useState} from 'react';
//Components
import Player from './Components/player'
import Song from './Components/song'
import trackList from './Components/trackList'

//Packages
import axios from 'axios'

//Styles
import './Styles/App.scss'

function App() {

  //State
  const [songs,setSongs] = useState(trackList())
  const [currentSong, setCurrentSong] = useState(songs[0])

  return (
    <div className="App">
      <Song currentSong={currentSong}/>
      <Player />
    </div>
  );
}

export default App;
