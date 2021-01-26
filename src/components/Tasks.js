
import { useState } from 'react'

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

const Tasks = () => {

    //* nameState,function
    const [tasks] = useState(
        [
            {
                id: 1,
                text: 'Doctors Appointment',
                day: 'Feb 5th at 2:30pm',
                reminder: true,
            },
            {
                id: 2,
                text: 'Meeting at School',
                day: 'Feb 6th at 2:30pm',
                reminder: true,
            },
            {
                id: 3,
                text: 'Food Shopping',
                day: 'Feb 7th at 2:36pm',
                reminder: false,
            }
        ]
    )



    return (
        <>
            {tasks.map((x) => (
                //* must have key prop
                <h3 key={x.id}>{x.text}</h3>
            )

            )}
        </>
    )
}

export default Tasks
