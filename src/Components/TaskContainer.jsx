import React from 'react'
import Task from './Task';

const TaskContainer = ({tasks}) => {
  return (
    <div className='task-container'>
        {tasks.length > 0 ? tasks.map((task, index)=>{
            return <Task content={task.content} isComplete={task.isComplete} key={index}/>
        })
        :
        <p>There are no tasks</p>
        }
    </div>
  )
}

export default TaskContainer;