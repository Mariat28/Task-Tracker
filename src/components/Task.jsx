import {FaTimes} from 'react-icons/fa';
const Task = ( { task, onDelete, onToggle}) => {
  return (
    <div className="flex flex-col p-2" onDoubleClick= { () => onToggle(task.id)}>
      <div className={`flex justify-between p-2 bg-gray-200 shadow-sm ${task.completed ? 'border-l-green-700 border-l-4 ': ''}`}>
        <div>
          <h3 className='font-semibold'>{task.text}</h3>
          <p className='text-sm'>{task.day}</p>
        </div>
        <FaTimes className='cursor-pointer text-red-500' onClick={ () => onDelete(task.id)}  />
      </div>
    </div>
  )
}

export default Task
