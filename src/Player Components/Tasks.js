import React from 'react'
import Task from './Task'



export const Tasks = ({  AllTasks  }) => {
    return (
        AllTasks.map(task => {
            return <Task key={task.Title} task={task}> </Task>
        })
    )
}

export default Tasks
