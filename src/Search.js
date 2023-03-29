// const list = ["Anna","Hakob","Lina","Levon"];

// export default function Search() {
// const [value,setValue] = useState('');
//     function search(e){
//         setValue(e.target.value)
//     }
    
// const newArr = list.filter((item)=>item.toLowerCase().includes(value)).map((val,i)=><li key={i}>{val}</li>)

//     return(
//         <div>
//             <input onChange={search}/>
//             <ul>{newArr}</ul>
//         </div>
//     )
// }
import { useDispatch, useSelector } from 'react-redux';



// export default function Search() {
//     const dispatch = useDispatch() 
//     const data = useSelector((state)=>state)
//     const list = data.inputVal!=="" ? data.filterLis : data.list 

//     return(
//         <div>
//             <input onChange={(e)=>dispatch({type: "SEARCH_TEXT", payload: e.target.value })}/>

//             {list.map((val,i)=><li key={i}>{val}</li>)}
//         </div>
//     )
// }