import './Menu.css';
import { useState } from 'react';

function Menu() {

  return (
    <div className="Menu">
        <div className='Menu-bars-open .Menu'>
          <h2>Bio</h2>
          <h2>Projects</h2>
          <h2>Contact</h2>
        </div>
    </div>
  );
}

export default Menu;
