
import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Search from './Search';


function App() {
  const dispatch = useDispatch()
  const data = useSelector((state)=>state);
  const list=useSelector((state)=>state.filtered);
  const lists = data.inputVal!=="" ? data.filterLis : data.lists 
  
  return(
    <div>
      <button onClick={()=> dispatch({type:"INCREMENT_COUNT"})} >Click +</button>
      <button onClick={()=> dispatch({type:"DECREMENT_COUNT"})} >Click -</button>
      <p>{data.count} {data.name} {data.age} </p>
      <input onChange={(el)=>dispatch({type:"CHANGE_TEXT", payload:el.target.value})} />
      <p>{data.text}</p>
      <input onChange={(el)=>dispatch({type:"SEARCH", payload:el.target.value})} />
      
      <p>{list.map((item, index)=>{
        return <p key = {index}>{item}</p>
      })}</p>
     
     <input onChange={(e)=>dispatch({type: "SEARCH_TEXT", payload: e.target.value })}/>

            {lists.map((val,i)=><li key={i}>{val}</li>)}


    
<p>{}</p>
    </div>
  )
}

export default App;