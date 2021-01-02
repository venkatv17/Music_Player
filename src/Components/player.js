import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay,faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons";

const Player = () => {
    return (
        <div className='Player'>
            <div className='Time-Control'>
                <p>Start time</p>
                <input type="range" />
                <p>End time</p>
            </div>
            <div className='Play-Control'>
            <FontAwesomeIcon className="Skip-Back-btn" size="2x" icon ={faAngleLeft} />
            <FontAwesomeIcon className="Play-btn" size="2x" icon ={faPlay} />
            <FontAwesomeIcon className="Skip-Forward-btn" size="2x" icon ={faAngleRight} />
            </div>
        </div>
    );
}
 
export default Player;