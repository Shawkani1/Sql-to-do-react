import {useState, useEffect} from 'react';
import Axios from 'axios';
import GiphsList from '../GiphsList/GiphsList';
function Search () {
  
  function searchNow(){
    console.log('in searchNow:', searchText);
    const url  = `https://api.giphy.com/v1/gifs/search?api_key=d7hFkBLAwXhMdcV6lMw4QxF6UKZHqVQQ&q=${searchText}`
    Axios.get( url ).then(function (response) {
      console.log(response.data);
      setgiphs(response.data.data); // specific to giphs
    }).catch(function (err){
      console.log(err);
      alert('error getting Giphs');
    })
  }

  const [ searchText, setsearchText ] = useState('');
  const [ giphs, setgiphs ] = useState([]);
  
  return (
    <div>
      <h1>Giphy Search</h1>
      <input type='text' placeholder='find this' onChange={ (e)=> setsearchText(e.target.value)}/>
      <button onClick={searchNow}>Search</button>
      <GiphsList giphs= { giphs } />
    </div>
  );

}

export default Search
