import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import Add from './components/Add'


function App() {

    //* toggle button app
    const [showAdd, setShow] = useState(false)

    //* nameState,function
    const [tasks, setTask] = useState(
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


    //*add task

    const addTask = (x) => {
        //* set random number
        const id = Math.floor(Math.random() * 10000) + 1
        const baru = { id, ...x }
        console.log(baru)
        setTask([...tasks, baru])
    }


    //*delete task

    const deleteTask = (id) => {
        console.log(id)
        //* menampilan yang id nya tidak sama
        setTask(tasks.filter(x => x.id !== id))
    }

    //* Toggle Reminder
    const toggleReminder = (id) => {
        setTask(tasks.map(task => task.id === id ? { ...task, reminder: !task.reminder } : task))
    }

    return (
        <div className="container">

            <Header
                //* onAdd is prop 
                onAdd={() => setShow(!showAdd)} lihat={showAdd}
            />
            {
                //* if showAdd true then show
                showAdd && <Add tambah={addTask} />
            }
            {/* task and onDelete is a props */}
            { tasks.length > 0 ?
                (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : (' No Task to show')}
        </div>

    );
}

//* if use class

// import React from 'react'


// class App extends React.Component {
//   render(){
//     return <h1>heelo from a class</h1>
//   }
// }




export default App;
