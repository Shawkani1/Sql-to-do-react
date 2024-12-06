import {useState, useEffect} from 'react';


function GiphsItem ( giph) {

    const [hook, sethook] = useState('')
  
  return (
    <div>
        <h1>{giph.giph.title}</h1>
      <img src = {giph.giph.images.original.url  } />
    </div>
  );

}

export default GiphsItem