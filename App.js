import React, { useEffect, useState } from 'react'
import mockData from './mockData';
import CounterComponent from './classcomp';
import ButtonC from './functionalcomp.js';
const App =()=>
{
    const [data, setData]=useState([]);
useEffect(()=>{
    const fetchData=()=>{
        setTimeout(()=>{
            setData(mockData)
        },1000);
      
    }
    fetchData();
},[]);
    return(
        <div>
            <CounterComponent />
            <ButtonC lable="button"/>
     {data.map(item => (
          <li key={item.id}>{item.name} - {item.Description}
          
          </li>
          
        ))}

        </div>
    )
}
export default App;