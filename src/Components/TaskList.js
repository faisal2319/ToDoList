import React from "react";
import TaskComponent from './TaskComponent.js'
function TaskList(props){
    
    return(
        <div className="task-list">
            <ul className="todo-list">
                {props.filteredTasks.map(task => (vn=
                    <TaskComponent 
                    setTasks={props.setTasks}
                    tasks={props.tasks} 
                    key={task.id} 
                    task={task}
                    taskTitle={task.task} 
                    description={task.description} 
                    />
                ))}
            </ul>
        </div>
    )
}


export default TaskList