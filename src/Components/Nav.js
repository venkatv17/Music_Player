import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMusic} from '@fortawesome/free-solid-svg-icons'

const Nav = ({libraryStatus, setLibraryStatus}) => {
    return ( 
        <nav>
        <h1>CodeFlo!</h1>
        <p>Music to go along while you code!</p>
        <button onClick={()=>setLibraryStatus(!libraryStatus)}>
            Library
            <FontAwesomeIcon icon={faMusic} />
        </button>
        </nav>
     );
}
 
export default Nav;