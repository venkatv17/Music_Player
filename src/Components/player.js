import React, { useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay,faAngleLeft, faAngleRight, faPause} from "@fortawesome/free-solid-svg-icons";

const Player = ({currentTrack,isPlaying, setIsPlaying,audioRef,tracks,setCurrentTrack,setTracks}) => {

    const [songTime,setSongTime]= useState({
        currentTime: 0,
        duration: 0
    })

    const activeLibraryHandler=(nextOrPrevTrack)=>{
        const newTracks = tracks.map(t=>{
            if(t.id===nextOrPrevTrack.id){
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

    const timeUpdateHandler=(e)=>{
        const current = e.target.currentTime;
        const duration = e.target.duration;
        setSongTime({...songTime,currentTime: current, duration: duration})
    }

    const timeFormat = (time) =>{
        return (
            Math.floor(time/60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        );
    }

    const dragHandler = (e) =>{
        audioRef.current.currentTime = e.target.value;
        setSongTime({...songTime, currentTime: e.target.value});
    }

    const playSongHandler=()=>{
        if(isPlaying){
            setIsPlaying(!isPlaying);
            audioRef.current.pause();
        }else{
            setIsPlaying(!isPlaying);
            audioRef.current.play();
        }
    }

    const skipTrackHandler = async(direction)=>{
        let currentIndex = tracks.findIndex((track)=>track.id===currentTrack.id);
        if(direction==='skip-forward'){
            await setCurrentTrack(tracks[(currentIndex + 1)%tracks.length]);
            activeLibraryHandler(tracks[(currentIndex + 1)%tracks.length]);
            if(isPlaying) audioRef.current.play();
        }
        if(direction==='skip-back'){
            if((currentIndex-1)%tracks.length === -1){
                await setCurrentTrack(tracks[tracks.length-1]);
                activeLibraryHandler(tracks[tracks.length-1]);
                if(isPlaying) audioRef.current.play();
                return; //To stop the code from running the next line which creashes the app
            }
            await setCurrentTrack(tracks[(currentIndex-1)%tracks.length]);
            activeLibraryHandler(tracks[(currentIndex - 1)%tracks.length]);
            if(isPlaying) audioRef.current.play();
        }
        
    }

    const songEndedHandler = async()=>{
        let currentIndex = tracks.findIndex((track)=>track.id===currentTrack.id);
        await setCurrentTrack(tracks[(currentIndex + 1)%tracks.length]);
        if(isPlaying) audioRef.current.play();
    }

    return (
        <div className='Player'>
            <div className='Time-Control'>
                <p>{timeFormat(songTime.currentTime)}</p>
                <input 
                min={0}
                max={songTime.duration || 0} 
                value={songTime.currentTime}
                onChange={dragHandler}
                type="range" />
                <p>{songTime.duration ? timeFormat(songTime.duration) : "0:00"}</p>
            </div>
            <div className='Play-Control'>
            <FontAwesomeIcon className="Skip-Back-btn" onClick={()=>skipTrackHandler("skip-back")} size="2x" icon ={faAngleLeft} />
            <FontAwesomeIcon 
            onClick={playSongHandler} 
            className="Play-btn" 
            size="2x" 
            icon ={isPlaying ? faPause : faPlay} />
            <FontAwesomeIcon className="Skip-Forward-btn" onClick={()=>skipTrackHandler("skip-forward")} size="2x" icon ={faAngleRight} />
            </div>
            <audio ref={audioRef} 
            onLoadedMetadata={timeUpdateHandler}
            onTimeUpdate={timeUpdateHandler} 
            onEnded = {songEndedHandler}
            src={currentTrack.audio}/>
        </div>
    );
}
 
export default Player;