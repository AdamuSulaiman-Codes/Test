import React from 'react';

const MenuItems = ({ menu, completeTask, IncompleteTask, allTasks }) => {
  return (
    <>
      <li className='menu-items' onClick={allTasks}>All Task</li>
      <li className='menu-items' onClick={completeTask}>Completed Task</li>
      <li className='menu-items' onClick={IncompleteTask}>Incomplete Task</li>
    </>
  );
}

export default MenuItems;