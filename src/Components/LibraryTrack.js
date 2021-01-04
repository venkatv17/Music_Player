import React from 'react';

const LibraryTrack = ({track, tracks, setCurrentTrack,audioRef,isPlaying,setTracks,id}) => {

    const songSlectHandler=async()=>{
        await setCurrentTrack(track);
        const newTracks = tracks.map(t=>{
            if(t.id===id){
                return{
                    ...t,
                    active: true,
                }
            }else{
                return{
                    ...t,
                    active: false
                }
            }
        });
        setTracks(newTracks);
        if(isPlaying)
        audioRef.current.play();
    }

    return (
        <div className={`Library-Track ${track.active? 'Selected' : ""}`}
        onClick={songSlectHandler}>
        <img src={track.cover} alt=""></img>
        <div className="Track-Data">
            <h3>{track.name}</h3>
            <h4>{track.artist}</h4>
        </div>
        </div>
    );
}
 
export default LibraryTrack;