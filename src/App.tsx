import React from 'react';
import './App.css';
import {Todolist} from './Todolist';

type TasksType = {
    id: number
    title: string
    isDone: boolean
}

function App() {
    const tasks: TasksType[] = [
        {id: 1, title: "HTML & CSS", isDone: true},
        {id: 2, title: "CSS & SCSS", isDone: true},
        {id: 1, title: "ES6/TS", isDone: false},
    ]

    return (
        <div className="App">
            <Todolist title={"What to learn"}/>
            {/*<Todolist title={"What to buy"}/>*/}
            {/*<Todolist title={"What to learn"}/>*/}
        </div>
    );
}

export default App;
