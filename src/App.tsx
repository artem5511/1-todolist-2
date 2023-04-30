import React, {useState} from 'react';
import './App.css';
import {Todolist} from './components/Todolist';
import {v1} from 'uuid';

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type AssocTaskType = {
    [key: string] : TaskType[]
}

type todoListsType = { id: string, title: string, filter: FilterValueType}

export type FilterValueType = 'all' | 'completed' | 'active';
// type todoListsType={id: string, title: string, filter: FilterValueType}


function App() {
    // const initTasks: TaskType[] = [
    //     {id: v1(), title: "HTML & CSS", isDone: true},
    //     {id: v1(), title: "CSS & SCSS", isDone: true},
    //     {id: v1(), title: "ES6/TS", isDone: false},
    // ]

    let todolistsID1=v1();
    let todolistsID2=v1();

    let [todolists, setTodolists] = useState<Array<todoListsType>>([
        {id: todolistsID1, title: "What to learn", filter: 'all'},
        {id: todolistsID2, title: "What to buy", filter: 'all'}
    ])

    let [tasks, setTasks] = useState<AssocTaskType>({
        [todolistsID1]: [
            {id: v1(), title: "HTML & CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false}
        ],
        [todolistsID2]: [
            {id: v1(), title: "HTML & CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false}
        ]
    });


    // let [tasks, setTasks] = useState(initTasks);
    // let [filter, setFilter] = useState<FilterValueType>('all');


    // const tasks1: TaskType[] = [
    //     {id: 1, title: "HTML & CSS", isDone: false},
    //     {id: 2, title: "CSS & SCSS", isDone: false},
    //     {id: 3, title: "ES6/TS", isDone: false},
    // ]


    const deleteTask = (todoListsID: string, taskID: string) => {
        let resultTasks = tasks.filter(el => el.id !== id)
        setTasks(resultTasks);
    }
    const changeFilter = (todolistID:string, value: FilterValueType) => {
        // setFilter(value);
        setTodolists(todolists.map(el=> el.id===todolistID ? {...el,filter: value} : el))
    }

    // let tasksForTodolist = tasks;
    // if (filter === "completed") {
    //     tasksForTodolist = tasks.filter(el => el.isDone === true);
    // }
    // if (filter === "active") {
    //     tasksForTodolist = tasks.filter(el => el.isDone === false);
    // }


    const addTask = (newTitle: string) => {
        const newTask = {id: v1(), title: newTitle, isDone: false}
        // const newObj = [newTask, ...tasks]
        // setTasks(newObj)
        setTasks([newTask, ...tasks])
    }
    const changeTaskStatus = (taskId: string, newIsDoneValue: boolean) => {
       setTasks(tasks.map(el => el.id === taskId ? {...el, isDone : newIsDoneValue} : el))
    }

    // const arr=[0,1,2,3]

    return (
        <div className="App">
            {todolists.map(el=>{
                let tasksForTodolist = tasks[el.id];
                if (el.filter === "completed") {
                    tasksForTodolist = tasks[el.id].filter(el => !el.isDone);
                }
                if (el.filter === "active") {
                    tasksForTodolist = tasks[el.id].filter(el => el.isDone);
                }
                return(
                    <Todolist
                        key={el.id}
                        todolistID={el.id}
                        title={el.title}
                        tasks={tasksForTodolist}
                        deleteTask={deleteTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeTaskStatus={changeTaskStatus}
                        filter={el.filter}
                    />
                )
            })}
            {/*<Todolist title={"What to buy"} tasks={tasks1}/>*/}
            {/*<Todolist title={"What to learn"}/>*/}
        </div>
    );
}

export default App;
