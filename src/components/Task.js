import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { FaArrowRight } from 'react-icons/fa'

const Task = ({task, onDelete, onToggle, updateStatus, currentStatus}) => {
  return (
    <div className={`task ${task.reminder ? 'reminder': ''}`} onDoubleClick={() => onToggle(task.id)}>
        <h3>{task.text} 
            <FaArrowRight style={ { color: 'green', cursor: 'pointer' } } onClick={() => updateStatus(task.id)}/>
        </h3>
        <p>{task.day}</p>
    </div>
  )
}

export default Task