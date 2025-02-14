import React, {useRef} from 'react'

const TaskInput = ({onAddItem}) => {

    const inputRef = useRef(null)

    return (
        <div className='input-task'>
            <input type="text" ref={inputRef}/>
            <button onClick={() => {
                onAddItem(inputRef.current.value)
                inputRef.current.value = ""
            }}>Add +</button>
        </div>
    )
}

export default TaskInput;