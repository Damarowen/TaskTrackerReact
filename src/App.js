import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/Header'
import Tasks from './components/Tasks'
import Add from './components/Add'
import Footer from './components/Footer'
import About from './components/About'



function App() {

    //* toggle button app
    const [showAdd, setShow] = useState(false)

    //* nameState,function
    const [tasks, setTask] = useState([])

    //* useEffect hooks 
    //* Mengambil data dari JSON SERVER
    useEffect(() => {

        const getTasks = async () => {
            const data = await fetchTasks()
            setTask(data)
        }

        getTasks()

    }, [])

    //* for fecth data

    const fetchTasks = async () => {
        //* URL dari JSON SERVER
        const url = 'http://localhost:5000/TUGAS'
        const res = await fetch(url)
        const data = await res.json()
        console.log(data)

        return data
    }

    //* update reminder
    const fetchTask = async (id) => {
        //* URL dari JSON SERVER
        const url = `http://localhost:5000/TUGAS/${id}`
        const res = await fetch(url)
        const data = await res.json()

        return data
    }


    //*add task

    const addTask = async (x) => {
        //* URL dari JSON SERVER

        const url = `http://localhost:5000/TUGAS`

        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(x)
        })

        const baru = await res.json()

        setTask([...tasks, baru])



    }


    //*delete task

    const deleteTask = async (id) => {

        const url = `http://localhost:5000/TUGAS/${id}`

        await fetch(url, {
            method: 'DELETE'
        })

        //* menampilan yang id nya tidak sama
        setTask(tasks.filter(x => x.id !== id))
    }

    //* Toggle Reminder
    const toggleReminder = async (id) => {

        const toggle = await fetchTask(id)
        const updated = { ...toggle, reminder: !toggle.reminder }
        const url = `http://localhost:5000/TUGAS/${id}`

        const res = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(updated)
        })

        const data = await res.json()

        setTask(tasks.map(task =>
            task.id === id ? { ...task, reminder: data.reminder } : task))
    }

    return (
        <Router>
            <div className="container">

                <Header
                    //* onAdd is prop 
                    onAdd={() => setShow(!showAdd)} lihat={showAdd}
                />

                <Route path='/TaskTrackerReact' exact render={(props) => (
                    <>
                        {
                            //* if showAdd true then show
                            showAdd && <Add tambah={addTask} />
                        }
                        {/* task and onDelete is a props */}
                        {tasks.length > 0 ?
                            (<Tasks tasks={tasks} onDelete={deleteTask}
                                onToggle={toggleReminder} />) : (' No Task to show')}

                    </>
                )} />

                <Route path='/about' component={About} />
                <Footer />
            </div>
        </Router>
    );
}




export default App;
