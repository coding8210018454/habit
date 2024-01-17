// import { details } from "../slices/habitSlice";
import './styless/DisplayDetail.css'
import { useDispatch } from 'react-redux'
import { changeStatus } from '../slices/habitSlice'





const DisplayDetails=({habit, habit:{ details }})=>{

  const dispatch = useDispatch();

  const checkStatusHandler = (T, D) => {
    dispatch(
      changeStatus({
        title: T,
        details: [
          {
            day: D,
            status: 'done',
          },
        ],
      })
    )
  }

  const doneStatusHandler = (T, D) => {
    dispatch(
      changeStatus({
        title: T,
        details: [
          {
            day: D,
            status: 'fail',
          },
        ],
      })
    )
  }

  const failStatusHandler = (T, D) => {
    dispatch(
      changeStatus({
        title: T,
        details: [
          {
            day: D,
            status: 'none',
          },
        ],
      })
    )
  }
    return (
      <div className='details'>
      {details.map((detail) => ( 
        <div key={detail.day}  >
          
            <p className='day-headings'>{detail.day}</p>

            {detail.status === 'none' && (
              <i
                className='fa-solid fa-check icon'
                onClick={() => checkStatusHandler(habit.title, detail.day)}></i>
            )}

            {detail.status === 'done' && (
              <i
                className=' fa-lg fa-solid fa-circle-check done icon'
                onClick={() => doneStatusHandler(habit.title, detail.day)}></i>
            )}

            {detail.status === 'fail' && (
              <i
                className=' fa-lg fa-solid fa-circle-xmark fail icon'
                onClick={() => failStatusHandler(habit.title, detail.day)}></i>
            )}
          
        </div>
      ))}
    </div>
    )
}


export default DisplayDetails;