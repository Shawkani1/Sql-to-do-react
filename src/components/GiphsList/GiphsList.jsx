import {useState, useEffect} from 'react';
import axios from 'axios';
import GiphsItem from '../GiphsItem/GiphsItem'

function GiphsList ( giphs) {

    const [hook, sethook] = useState('')
  
  return (
    <div>
       <h2>Search Results:</h2>
       {
        giphs.giphs.map( ( giph, index ) => (
          <GiphsItem key={index} giph={ giph }/>
        ))
       }
      <p>{JSON.stringify( giphs ) }</p>
    </div>
  );

}

export default GiphsList