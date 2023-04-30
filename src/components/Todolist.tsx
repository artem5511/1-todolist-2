import React, {ChangeEvent, FC, useState} from 'react';
import '../App.css';
import {FilterValueType, TaskType} from '../App';
import {Button} from './Button';
import {findAllByDisplayValue} from '@testing-library/react';
import {isValidDateValue} from '@testing-library/user-event/dist/utils';
import {log} from 'util';

type TodoListPropsType = {
    title: string
    todolistID: string
    tasks: Array<TaskType>
    filter: FilterValueType
    deleteTask: (todoListID: string, taskID: string) => void
    changeFilter: (todolistID: string, value: FilterValueType) => void
    addTask: (todoListID: string, newTitle: string) => void
    changeTaskStatus: (todolistID: string, taskId: string, newIsDoneValue: boolean) => void
    deleteTodolist: (todolistID: string) => void
}


export const Todolist: FC<TodoListPropsType> = (props) => {
    let isAllTasksNotIsDone = true // все таски не выполнены
    for (let i = 0; i < props.tasks.length; i++) {
        if (props.tasks[i].isDone === true) {
            isAllTasksNotIsDone = false
            break;
        }
    }
    const todoClasses = isAllTasksNotIsDone ? "todolist2" : "todolist1";
    let [newTitle, setNewTitle] = useState('');
    let [error, setError] = useState(false);


    const titleMaxLenght = 15
    const isTitleLenghtTooLong: boolean = newTitle.length > titleMaxLenght
    const isAddBtnDisabled: boolean = !newTitle.length || isTitleLenghtTooLong
    const titleMaxLenghtWarning = isTitleLenghtTooLong
        ? <div style={{color: "red"}}>Title is too long!</div>
        : null
    const userMessage = error
        ? <div style={{color: "red"}}>Title is required!</div>
        : null
    const addTaskHandler = () => {
        const trimmedTitle = newTitle.trim()
        if (trimmedTitle) {
            props.addTask(props.todolistID, newTitle)
        } else {
            setError(true)
        }
        setNewTitle('')
    }

    const onKeyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            addTaskHandler()
        }
    }

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        error && setError(false)
        setNewTitle(event.currentTarget.value)
    }
    // const deleteTaskHandler = (eID: string) => {
    //     props.deleteTask(eID)
    // }
    // const AllChangeFilterHandler = () => {
    //     props.changeFilter("all")
    // }
    // const ActiveChangeFilterHandler = () => {
    //     props.changeFilter("active")
    // }
    // const CompletedChangeFilterHandler = () => {
    //     props.changeFilter("completed")
    // }
    //
    const tsarFunction = (filterValue: FilterValueType) => {
        props.changeFilter(props.todolistID, filterValue)
    }
const deleteTodolistHandler = () => {
  props.deleteTodolist(props.todolistID)
}
    return (
        <div className={todoClasses}>
            <h3>{props.title}
                <button onClick={deleteTodolistHandler}>X</button></h3>

            <div>
                <input className={error || isTitleLenghtTooLong? "input-error" : undefined}
                    placeholder={'please, enter title'}
                    value={newTitle}
                    onKeyPress={onKeyPressHandler}
                    onChange={onChangeHandler}/>
                <button disabled={isAddBtnDisabled}
                        onClick={addTaskHandler}>+
                </button>
                {titleMaxLenghtWarning}
                {userMessage}
                {/*<button onClick={() => {*/}
                {/*    props.addTask(newTitle)*/}
                {/*    setNewTitle('')*/}
                {/*}}>+</button>*/}
                {/*<Button  name={'+'} ignition={addTaskHandler}/>*/}
            </div>
            <ul>
                {
                    props.tasks.map(el => {
                            const deleteTaskHandler = () => {
                                props.deleteTask(props.todolistID,el.id)
                            }
                            const changeTaskStatus = (e: ChangeEvent<HTMLInputElement>) => {
                                props.changeTaskStatus(props.todolistID,el.id, e.currentTarget.checked)
                            }
                            const tasksClasess = el.isDone ? "task-not-isdone" : "task"
                            return (
                                <li>
                                    <div>
                                        <input type="checkbox"
                                               checked={el.isDone}
                                               onChange={changeTaskStatus}
                                        />
                                        <span className={tasksClasess}>{el.title}</span>
                                    </div>

                                    <button onClick={deleteTaskHandler}>x
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
            <div className={"filter-btn-wrapper"}>
                {/*<button onClick={() => {*/}
                {/*    props.changeFilter("all")*/}
                {/*}}>All*/}
                {/*</button>*/}
                {/*<button onClick={() => {*/}
                {/*    props.changeFilter("completed")*/}
                {/*}}>Active*/}
                {/*</button>*/}
                {/*<button onClick={() => {*/}
                {/*    props.changeFilter("active")*/}
                {/*}}>Completed*/}
                {/*</button> */}
                {/*<button onClick={AllChangeFilterHandler}>All*/}
                {/*</button>*/}
                {/*<button onClick={ActiveChangeFilterHandler}>Active*/}
                {/*</button>*/}
                {/*<button onClick={CompletedChangeFilterHandler}>Completed*/}
                {/*</button>*/}
                <button className={props.filter === "all" ? "filter-btn filter-btn-active" : "filter-btn"}
                        onClick={() => {
                            tsarFunction('all')
                        }}>All
                </button>
                <button className={props.filter === "active" ? "filter-btn filter-btn-active" : "filter-btn"}
                        onClick={() => {
                            tsarFunction('active')
                        }}>Active
                </button>
                <button className={props.filter === "completed" ? "filter-btn filter-btn-active" : "filter-btn"}
                        onClick={() => {
                            tsarFunction('completed')
                        }}>Completed
                </button>
            </div>
        </div>
    )
}

