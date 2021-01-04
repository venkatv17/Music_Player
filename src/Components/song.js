import React from 'react';

const Song = ({currentTrack}) => {
    return (
        <div className='Track-Container'>
            <img src={currentTrack.cover} alt=""></img>
        <h2>{currentTrack.name}</h2>
        <h3>{currentTrack.artist}</h3>
        </div>
    );
}
 
export default Song;