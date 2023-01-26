import React from "react";
import './App.css'
import Form from "./Components/Form";
import TaskList from "./Components/TaskList";

export default function App(){
    
    const [inputText, setInputText] = React.useState({
        task: '',
        description:''
    })
    const [tasks, setTasks] = React.useState([])
//Default all
    const [filter, setFilter] = React.useState('All')
    const[filteredTasks, setFilteredTasks] = React.useState([])


//Runs once we the app is loaded
    React.useEffect(() => {
        
        getTasks()
    }, [])    
//Runs everytime a change is made
    React.useEffect(() => {
        handleFilter()
        saveTasks()
    }, [tasks, filter])


    function saveTasks(){
            localStorage.setItem("tasks", JSON.stringify(tasks))
}
    
    function getTasks(){
        if(localStorage.getItem("tasks") === null){
            localStorage.setItem("tasks", JSON.stringify([]))
        }else{
            let localTask = JSON.parse(localStorage.getItem("tasks"))
            setTasks(localTask)
            
        }
    }

    
    const handleFilter= () => {
        switch (filter){
            case "Completed":
                setFilteredTasks(tasks.filter((task) => task.completed === true))
                
                break;
            case 'Uncompleted':
                setFilteredTasks(tasks.filter((task) => task.completed === false))
                break;
            default:
                setFilteredTasks(tasks);
                break;
        }
    }
    return(
        <div className="app">
            <header>
                <h1>Todo List:</h1>
            </header>
            <Form 
                setInputText={setInputText} 
                tasks={tasks} 
                setTasks={setTasks} 
                inputText={inputText} 
                setFilter={setFilter}
            />
            <TaskList setTasks={setTasks} tasks={tasks} filteredTasks={filteredTasks}/>
        </div>
    )
}