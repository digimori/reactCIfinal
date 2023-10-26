import React from 'react';
import css from './css/SideBar.module.css';

const Sidebar = () => {
  return (
    <div className={css.SideBar}>
        <ul>
            <li>My Photos</li>
            <li>My Illustrations</li>
            <li>My Paintings</li>
        </ul>
    </div>
  )
}

export default Sidebar