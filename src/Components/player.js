import React from 'react';

const Player = () => {
    return (
        <div className='Player'>
            <div className='TimeControl'>
                <p>start-time</p>
                <input type="range" />
                <p>End time</p>
            </div>
            <div className='PlayControl'>
            </div>
        </div>
    );
}
 
export default Player;