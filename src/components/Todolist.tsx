import React, {FC} from 'react';
import '../App.css';
import {TaskType} from '../App';

type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
}


export const Todolist: FC<TodoListPropsType> = (props)=>  {
    let isAllTasksNotIsDone = true // все таски не выполнены
    for (let i = 0; i < props.tasks.length; i++) {
        if(props.tasks[i].isDone === true) {
            isAllTasksNotIsDone = false
            break;
        }
    }
    const todoClasses = isAllTasksNotIsDone ? "todolist1" : "todolist"
    return (
    <div className={todoClasses}>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            <li><input type="checkbox" checked={true}/> <span>{props.tasks[0].title}</span></li>
            <li><input type="checkbox" checked={true}/> <span>{props.tasks[1].title}</span></li>
            <li><input type="checkbox" checked={false}/> <span>{props.tasks[2].title}</span></li>
        </ul>
        <div>
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
        </div>
    </div>
    )
}