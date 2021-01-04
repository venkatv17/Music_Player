import React from 'react';
import LibraryTrack from './LibraryTrack'

const Library = ({tracks,setTracks, setCurrentTrack,audioRef,isPlaying,libraryStatus}) => {
    return ( 
        <div className={`Library ${libraryStatus ? 'Library-Active' : ''}`}>
            <h2>Library</h2>
            <div className="Library-Tracks">
                {tracks.map(track=>
                <LibraryTrack 
                track = {track}
                tracks={tracks}
                id={track.id}
                setTracks={setTracks}
                setCurrentTrack={setCurrentTrack}
                key={track.id}
                audioRef={audioRef}
                isPlaying={isPlaying}
                />
                    )}
            </div>
        </div>
     );
}
 
export default Library;