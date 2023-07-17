import React, { useState, useEffect } from 'react';
import './App.css';

const API_URL = 'https://dummyjson.com/quotes';

function Fetchappi() {
  const [data, setData] = useState([]);
const apiGet=async()=>{
    const response=await fetch(API_URL)
    .then((res) => res.json())
    .then((dat)=>dat.quotes)
    const responsedata=response.filter((data)=>data.id<11)
    setData(responsedata)
}
 useEffect(()=>{
    apiGet();
 },[]);
 return(
    <div >
        {data.map((obj)=>(<h2>{obj.id}-{obj.quote} by: {obj.author}</h2>))}
        
    </div>
 )
 

}

export default Fetchappi
