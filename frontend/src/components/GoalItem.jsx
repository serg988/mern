import { useDispatch } from 'react-redux'
import { deleteGoal, completeGoal } from '../features/goals/goalSlice'

import { FaCheck, FaTrash } from 'react-icons/fa'

function GoalItem({ goal }) {
  const dispatch = useDispatch()

  return (
    <div className='goal'>
      <div>{new Date(goal.createdAt).toLocaleString('ru-Ru')}</div>
      <h2 className={goal.isCompleted ? 'striked' : null}>{goal.text}</h2>
      <button onClick={() => dispatch(deleteGoal(goal._id))} className='close'>
        <FaTrash />
      </button>
      <button
        onClick={() => dispatch(completeGoal(goal._id))}
        className='completed'
      >
        <FaCheck />
      </button>
    </div>
  )
}

export default GoalItem
