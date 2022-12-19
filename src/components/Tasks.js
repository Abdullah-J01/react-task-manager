import Task from "./Task"
const Tasks = ( { tasks, /*onDelete,*/  updateStatus, currentStatus, onToggle } ) => {

return (
    <>
    {tasks.map((task) => (
        task.status == currentStatus &&
        <Task key={task.id} task={task} /*onDelete={onDelete}*/ onToggle={onToggle} updateStatus={updateStatus} currentStatus={currentStatus} />
        
    ))}
    </>
)
}

export default Tasks