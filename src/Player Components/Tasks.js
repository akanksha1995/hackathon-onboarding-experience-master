import React from 'react'
import Task from './Task'
import { v4 as uuid } from 'uuid';

export const Tasks = ({  AllTasks, setOpenTask, setcurrTask  }) => {
    return (

        AllTasks.map(task => {
            return <Task key={uuid()} task={task} setOpenTask={setOpenTask} setcurrTask={setcurrTask}> </Task>
        })
    )
}

export default Tasks
