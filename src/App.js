import { useEffect, useState } from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom"; 
import Header from './components/Header';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
import Footer from './components/Footer';
function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks ] = useState ([
   ])

   useEffect(() =>{
     const getTasks =  async () =>{
       const tasksFromServer = await fetchTasks();
       setTasks(tasksFromServer);
     }
     getTasks();
   }, [])

   const fetchTasks = async () =>{
    const res =await fetch('http://localhost:5000/tasks');
    const data = await res.json()
    return data;
  }

  // fetch single task 
  const fetchTask = async (id) =>{
    const res =await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json()
    return data;
  }
  //  add task 
  const addTask = async (task) =>{
    const response = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type' : 'application/json',
      },
      body: JSON.stringify(task)

    })
    const data = await response.json();
    setTasks([...tasks, data]);
    // const id = Math.floor(Math.random()*1000) +1;
    // const newTask = {id, ...task};
    // setTasks([...tasks, newTask]);
  }
    //delete task
     const deleteTask = async (id) => {
          await fetch(`http://localhost:5000/tasks/${id}`, {method: 'DELETE',})
          setTasks(tasks.filter((task) => task.id !== id));
     }
     //Toggle completion status
     const toggleCompletion = async(id) =>{
       const taskToToggle = await fetchTask(id);
       const updatedTask = {...taskToToggle, completed: !taskToToggle.completed};
       const res = await fetch(`http://localhost:5000/tasks/${id}`, {
         method: 'PUT',
         headers: {
           'Content-type': 'application/json'
         },
         body: JSON.stringify(updatedTask)
       })
       const data = await res.json();

        setTasks(tasks.map((task) => task.id === id ? {
          ...task, completed: data.completed
        } : task))
     }
  return (
      <div className="flex justify-center pt-3 h-screen items-center bg-neutral-100">
        <div className='h-1/2 bg-blue-50 rounded-lg shadow-2xl xl:w-1/4 w-1/2  border border-l-blue-300 border-b-blue-300 overflow-auto flex flex-col justify-between'>
          <div>
          <Header title="Task Tracker" onAdd={ () => setShowAddTask(!showAddTask)} showAdd={showAddTask}></Header>
          <div className="flex justify-center ">
          {showAddTask && <AddTask onAdd = {addTask}/>}
          </div>
          <div>
            {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleCompletion}/>) : <p className="text-sm text-center mt-3 text-slate-500">No Tasks to show right Now! <br></br>Press the add task button to create a new Task!</p>
            }
          </div>
          </div>
          <div>
            <Footer/>
          </div>
        </div>
      </div>
  );
}

export default App;
