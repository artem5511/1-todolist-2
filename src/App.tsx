import React, {useState} from 'react';
import './App.css';
import {Todolist} from './components/Todolist';

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

function App() {
    const initTasks: TaskType[] = [
        {id: 1, title: "HTML & CSS", isDone: true},
        {id: 2, title: "CSS & SCSS", isDone: true},
        {id: 3, title: "ES6/TS", isDone: false},
    ]

    let [tasks, setTasks] = useState(initTasks)

    // const tasks1: TaskType[] = [
    //     {id: 1, title: "HTML & CSS", isDone: false},
    //     {id: 2, title: "CSS & SCSS", isDone: false},
    //     {id: 3, title: "ES6/TS", isDone: false},
    // ]


    const deleteTask = (id: number) => {
        debugger
       let resultTasks = tasks.filter(el=>el.id !== id)
     }
    return (
        <div className="App">
            <Todolist title={"What to learn"} tasks={tasks} deleteTask={deleteTask}/>
            {/*<Todolist title={"What to buy"} tasks={tasks1}/>*/}
            {/*<Todolist title={"What to learn"}/>*/}
        </div>
    );
}

export default App;
