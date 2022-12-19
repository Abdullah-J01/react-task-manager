import PropTypes from 'prop-types'
import Header from './components/Header'
import Tasks from './components/Tasks';
import { useState, useEffect } from "react"
import './App.css';
import Button from 'react-bootstrap/Button';
import Board from './components/Board';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksData = await fetchTasks();
      setTasks(tasksData)
    }
    getTasks();
  }, [])

  //fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data
  }

  //fetch Task 
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    return data
  }
  //Delete Task
  const deleteTask = (id) => {
    setTasks(
      tasks.filter(
        (task) => task.id !== id
      )
    )
  }

  //toggle Reminder

  const toggleReminder = async (id) => {
    const taskToUpdate = await fetchTask(id);
    const updatedTask = { ...taskToUpdate, reminder: !taskToUpdate.reminder}

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updatedTask),
    })

    const data = await res.json()

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder : data.reminder} : task
      )
    )
  }

  //update status
  const updateStatus = async (id) => {
    const taskToUpdate = await fetchTask(id);
    const updatedTask = taskToUpdate.status < 3 ? {...taskToUpdate, status : taskToUpdate.status + 1 } : taskToUpdate

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type" : "application/json"
      },
      body: JSON.stringify(updatedTask)
    })

    const data = await res.json()
    
    setTasks(
      tasks.map((task) =>
        task.id === id ? {...task, status : data.status } : task
      )
    )
  }
  

  return (
    <div className='container'>
      <Header />
      <Board tasks={tasks} updateStatus={updateStatus} onToggle={toggleReminder}/>
    </div>
  );
}


export default App;
