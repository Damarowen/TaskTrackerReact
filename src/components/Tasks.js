import Task from './Task'


const Tasks = ({ tasks, onDelete, onToggle }) => {

    return (
        <>
            {tasks.map((x) => (
                //* must have key prop
                <Task key={x.id} task={x} 
                onDelete={onDelete} onToggle={onToggle}/>
            )

            )}
        </>
    )
}

export default Tasks
