import React, {useState} from 'react';
import './App.css';
import {Todolist} from './components/Todolist';
import {v1} from 'uuid';

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type FilterValueType = 'all' | 'completed' | 'active';

function App() {
    const initTasks: TaskType[] = [
        {id: v1(), title: "HTML & CSS", isDone: true},
        {id: v1(), title: "CSS & SCSS", isDone: true},
        {id: v1(), title: "ES6/TS", isDone: false},
    ]

    let [tasks, setTasks] = useState(initTasks);
    let [filter, setFilter] = useState<FilterValueType>('active');

    // const tasks1: TaskType[] = [
    //     {id: 1, title: "HTML & CSS", isDone: false},
    //     {id: 2, title: "CSS & SCSS", isDone: false},
    //     {id: 3, title: "ES6/TS", isDone: false},
    // ]


    const deleteTask = (id: string) => {
        let resultTasks = tasks.filter(el => el.id !== id)
        setTasks(resultTasks);
    }
    const changeFilter = (value: FilterValueType) => {
        setFilter(value);
    }

    let tasksForTodolist = tasks;
    if (filter === "completed") {
        tasksForTodolist = tasks.filter(el => el.isDone === true);
    }
    if (filter === "active") {
        tasksForTodolist = tasks.filter(el => el.isDone === false);
    }

    const addTask = () => {
        console.log('newtask')
        const newTask = {id: v1(), title: 'newTitle', isDone: false}
        const newObj = [newTask, ...tasks]
        setTasks(newObj)
    }

    return (
        <div className="App">
            <Todolist
                title={"What to learn"}
                tasks={tasksForTodolist}
                deleteTask={deleteTask}
                changeFilter={changeFilter}
                addTask={addTask}
            />
            {/*<Todolist title={"What to buy"} tasks={tasks1}/>*/}
            {/*<Todolist title={"What to learn"}/>*/}
        </div>
    );
}

export default App;
