import React,{ useState, useRef} from 'react';
//Components
import Player from './Components/player'
import Song from './Components/song'
import trackList from './Components/trackList'
import Library from './Components/Library'
import Nav from './Components/Nav'

//Styles
import './Styles/App.scss'

function App() {

  //State
  const [tracks,setTracks] = useState(trackList());
  const [currentTrack, setCurrentTrack] = useState(tracks[0]);
  const [isPlaying,setIsPlaying]= useState(false);
  const [libraryStatus,setLibraryStatus] = useState(false)

  const audioRef = useRef(null);

  return (
    <div className={`App ${libraryStatus ? 'Lib-Active':''}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
      <Song currentTrack={currentTrack}/>
      <Player currentTrack={currentTrack}
      isPlaying={isPlaying}
      setIsPlaying={setIsPlaying}
      audioRef={audioRef}
      tracks={tracks}
      setTracks={setTracks}
      setCurrentTrack={setCurrentTrack}/>
      <Library 
      tracks={tracks}
      setTracks={setTracks} 
      setCurrentTrack={setCurrentTrack}
      audioRef={audioRef}
      isPlaying={isPlaying}
      libraryStatus={libraryStatus}/>
    </div>
  );
}

export default App;
