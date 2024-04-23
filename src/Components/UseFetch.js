import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
 
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();


    setTimeout(() => {
      fetch(url, {signal: abortCont.signal})   //to associate with the fetch we use signal with const name you created.
      .then(res => {
        if (!res.ok) { // error coming back from server
          throw Error('could not fetch the data for that resource');
        } 
        return res.json();
      })
      .then(data /* a parameter called data*/=> {
       
        setData(data);
        setError(null);
      })
      .catch(err => {
        // auto catches network / connection error
        if(err.name === 'AbortError'){
          console.log('fetch aborted');
        } 
        else{
          
           setError(err.message);
        }

      })
    }, 1000);
    return()=> abortCont.abort();
  }, [url])

  return { data, error };
}

export default useFetch;