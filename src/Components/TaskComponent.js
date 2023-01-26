import React from "react";


function TaskComponent(props){

    function handleDelete(){
        props.setTasks(props.tasks.filter((el) => el.id !== props.task.id))
    }

    function handleComplete(){
        props.setTasks(props.tasks.map((item) => {
            if(item.id === props.task.id){
                return {
                    ...item,
                    completed : !item.completed
                    
                }
            }
            return item
            
        }))
    }



    return(
        <div className="task">
            <li className={`task-item ${props.task.completed ? "completed": ""}`}>{props.taskTitle}</li>
            <div className="task-btns">
                <button className="complete-btn" onClick={handleComplete}>{props.task.completed ? "UnCheck" : "Check"}</button>
                <button onClick={handleDelete} className="trash-btn">Delete</button>
            </div>
            
        </div>
    )
}


export default TaskComponent