import React, {ChangeEvent, FC, useState} from 'react';
import '../App.css';
import {FilterValueType, TaskType} from '../App';

type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
    deleteTask: Function
    changeFilter: (value: FilterValueType) => void
    addTask: (newTitle: string) => void
}


export const Todolist: FC<TodoListPropsType> = (props) => {
    let isAllTasksNotIsDone = true // все таски не выполнены
    for (let i = 0; i < props.tasks.length; i++) {
        if (props.tasks[i].isDone === true) {
            isAllTasksNotIsDone = false
            break;
        }
    }
    const todoClasses = isAllTasksNotIsDone ? "todolist1" : "todolist"
    let [newTitle, setNewTitle] = useState('');
    console.log(newTitle)

    const addTaskHandler = () => {
        props.addTask(newTitle)
        setNewTitle('')
    }

    const onKeyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            addTaskHandler()
        }
    }

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(event.currentTarget.value)
    }
    const deleteTaskHandler = (eID: string) => {
        props.deleteTask(eID)
    }



    return (
        <div className={todoClasses}>
            <h3>{props.title}</h3>
            <div>
                <input value={newTitle} onKeyPress={onKeyPressHandler} onChange={onChangeHandler}/>
                <button onClick={addTaskHandler}>+</button>
                {/*<button onClick={() => {*/}
                {/*    props.addTask(newTitle)*/}
                {/*    setNewTitle('')*/}
                {/*}}>+</button>*/}
            </div>
            <ul>
                {
                    props.tasks.map(el => {
                            // const deleteTaskHandler = () => {
                            //     props.deleteTask(el.id)
                            // }
                            return (
                                <li><input type="checkbox" checked={el.isDone}/>
                                    <span>{el.title}</span>
                                    <button onClick={() => deleteTaskHandler(el.id)}>x
                                    </button>
                                </li>
                            )
                        }
                    )
                }
                {/*<li><input type="checkbox" checked={true}/> <span>{props.tasks[0].title}</span></li>*/}
                {/*<li><input type="checkbox" checked={true}/> <span>{props.tasks[1].title}</span></li>*/}
                {/*<li><input type="checkbox" checked={false}/> <span>{props.tasks[2].title}</span></li>*/}
            </ul>
            <div>
                <button onClick={() => {
                    props.changeFilter("all")
                }}>All
                </button>
                <button onClick={() => {
                    props.changeFilter("completed")
                }}>Active
                </button>
                <button onClick={() => {
                    props.changeFilter("active")
                }}>Completed
                </button>
            </div>
        </div>
    )
}