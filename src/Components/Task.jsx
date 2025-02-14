import React from 'react'

const Task = ({content, isComplete}) => {
  return (
    <div className='task'>
        <p>{content}</p>
        <input type="checkbox" checked={isComplete}/>
    </div>
  )
}

export default Task