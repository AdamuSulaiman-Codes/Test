import React, { useState } from 'react';
import Header from './Components/Header';
import Menu from './Components/Menu';
import TaskInput from './Components/TaskInput';
import TaskContainer from './Components/TaskContainer';

const App = () => {
  const [task, setTasks] = useState([]);
  const [currentTasks, setCurrentTask] = useState([]);

  function handleAddItem(currentTask) {
    const newTask = {
      content: currentTask,
      isComplete: false,
    };

    setTasks(prevTask => [...prevTask, newTask]);
    setCurrentTask(prevTasks => [...prevTasks, newTask]);
  }

  function handleCompleteTask() {
    const newCompleteTask = task.filter(task => task.isComplete === true);
    setCurrentTask(newCompleteTask);
  }

  function handleIncompleteTask() {
    const newIncompleteTask = task.filter(task => task.isComplete === false);
    setCurrentTask(newIncompleteTask);
  }

  function handleAllTasks() {
    setCurrentTask(task);
  }

  return (
    <div className='app-content'>
      <Header />
      <Menu completeTask={handleCompleteTask} IncompleteTask={handleIncompleteTask} />
      <TaskInput onAddItem={handleAddItem} />
      <TaskContainer tasks={currentTasks} />
    </div>
  );
};

export default App;