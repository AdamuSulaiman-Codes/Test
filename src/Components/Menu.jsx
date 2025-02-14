import React from 'react';
import MenuItems from './MenuItems';

const Menu = ({ completeTask, IncompleteTask, allTasks }) => {
  return (
    <ul className='menu'>
      <MenuItems  completeTask={completeTask} IncompleteTask={IncompleteTask} allTasks={allTasks} />
    </ul>
  );
}

export default Menu;