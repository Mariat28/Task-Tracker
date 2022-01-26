import { useState } from "react"
const AddTask = ( {onAdd}) => {
   const [text, setText] = useState('');
   const [day, setDay] = useState('');
   const [completed, setCompleted] = useState('');
    const onSubmit = (e) =>{
      e.preventDefault();
      if(!text) {
        alert('please add a task');
        return;
      }

      onAdd({ text, day, completed});
      setText('');
      setDay('');
      setCompleted(false);
    }
  return (
    <form className=" w-3/4 " onSubmit={onSubmit}>
      <div className="flex flex-col p-2 ">
        <label>Task</label>
        <input type="text" placeholder="Add Task" className="rounded mt-2 border focus:border-blue-300" value={text} onChange={ (e) => setText(e.target.value)}/>
      </div>
      <div className="flex flex-col p-2">
        <label>Day & Time</label>
        <input type="text" placeholder="Add date and time" className="rounded mt-2 border focus:border-blue-300" value={day} onChange={ (e) => setDay(e.target.value)}/>
      </div>
      <div className="flex items-center p-2">
        <input type="checkbox" className="rounded" value={completed} onChange={ (e) => setCompleted(e.currentTarget.checked)} checked={completed}/>
        <label className="ml-2">Mark as completed</label>
      </div>
      <div className="p-2">
        <input type="submit" value="Save Task" className="bg-slate-300 p-2 text-black rounded cursor-pointer hover:bg-green-900 hover:text-white w-full"  />
      </div>
    </form>
  )
}

export default AddTask
