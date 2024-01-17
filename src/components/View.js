import { useState } from 'react'
import './styless/View.css'

import { useDispatch , useSelector} from 'react-redux'
import { addHabit ,deleteHabit} from '../slices/habitSlice'
import { details } from '../slices/habitSlice'




const View =()=>{
    const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const { habits } = useSelector((state) => state.allHabits)

    // const [showBox, setshowBox]= useState(false);
    const AddHabitHandler = (e) => {
      
        dispatch(addHabit({ title, description, details }))
        
      }
      const DeleteHandler=(title)=>{
        dispatch(deleteHabit(title))
      }


    return (
        <>
       
         <div>
         <h1>View Habit</h1>
         </div>

         
            
         <form onSubmit={()=>AddHabitHandler}>
         <div className='txt'>
          
          
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='enter title'/>
          </div>

          <div className='txt'>
          
          
            <input type="text" value={description} 
            onChange={(e) => setDescription(e.target.value)} placeholder='enter Short description'/>
          </div>

          
          <div className='add-btn'>
         <button
            
            className='addHabit'
            onClick={() => AddHabitHandler()}>  Add Habit  </button>
          

             
               
               </div>
          </form> 

          <div className='habitList'>
             <ul>
               {habits.map((ele, i)=>(
                <li key={i} className='ListItem'><div>{ele.title}</div>
                <div>< button onClick={()=>DeleteHandler(ele.title)} className='btn'>delete</button></div></li>
               ))}
             </ul>
          </div>
          
        </>
    )
}

export default View;