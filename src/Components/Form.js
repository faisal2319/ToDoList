import React from 'react'


function Form(props) {
    
    function handleChange(event){
    const{name, value} = event.target
    props.setInputText(prevState => ({
        ...prevState,
        [name]: value
    }))

}



function handleSubmit(event){
    //prevent refreshing
    event.preventDefault()
    
    props.setTasks([
        ...props.tasks, {task: props.inputText.task, description: props.inputText.description, completed: false, id: props.tasks.length + 1}
    ]);
    

    props.setInputText(prevState => ({
        ...prevState,
        task:"",
        description:""
    }));

    props.setInputText({
        task:"",
        description:""
    })


}

    function handleFilter(event){
        props.setFilter(event.target.value)
    }




 return (
    <form onSubmit={handleSubmit}>
        <div className="inputs">
            <input  value={props.inputText.task} type='text' placeholder='Task' className='task-input' name="task"  onChange={handleChange} required/>
            <input  value={props.inputText.description} type='text' placeholder='Task Description' className='task-description' name="description" onChange={handleChange}/>
        
        <div className="select">
            <select onChange={handleFilter} name='status' className='filter-task'>
                <option value="All">All</option>
                <option value="Completed">completed</option>
                <option value="Uncompleted">Uncompleted</option>
            </select>
        </div>
        </div>
        <button className='add-btn'>Add task</button>
    </form>
  )
}

export default Form






