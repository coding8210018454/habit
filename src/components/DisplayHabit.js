import { useSelector } from 'react-redux'
import DisplayDetails from './DisplayDetails';

// import { details } from '../slices/habitSlice';
import './styless/DisplayHabit.css'

const DisplayHabit=()=>{
  const { habits } = useSelector((state) => state.allHabits)
  
  return (
    <div className='displayBox'>
      <h1>See All Habits</h1>
      {habits.map((habit, index) => (
        
          <div key={index} className='marg'>
            <p>
              <strong>{habit.title}</strong>&nbsp; :&nbsp; <i>{habit.description}</i>
            </p>

            <DisplayDetails key={habit.title}  habit={habit} />
           
          </div>
      
      ))}
    </div>
  )
}


export default DisplayHabit;