import Task from './Task'

//* not use useState
// const tasks = [
// {
//     id: 1,
//     text: 'Doctors Appointment',
//     day: 'Feb 5th at 2:30pm',
//     reminder: true,
// },
// {
//     id: 2,
//     text: 'Meeting at School',
//     day: 'Feb 6th at 2:30pm',
//     reminder: true,
// },
// {
//     id: 3,
//     text: 'Food Shopping',
//     day: 'Feb 7th at 2:36pm',
//     reminder: false,
// }

// ]

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
