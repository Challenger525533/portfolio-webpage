import './Title.css';
import { Helmet } from 'react-helmet';
import { useState } from 'react';
import menubars from './menubars.svg'

function Title() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuClassName = menuOpen ? "Title-bars-open" : "Title-bars-closed";
  console.log(menuClassName)

  const handleClick = () => {
      setMenuOpen(!menuOpen);
      if (menuOpen) {
        document.getElementById('menubars').style.transform = 'rotate(0deg)';
      } else {
        document.getElementById('menubars').style.transform = 'rotate(90deg)';
      }
  };


  return (
    <div className="Title">
      <Helmet>
        <title>Jake Gustin</title>
      </Helmet>
      <header className="Title-header">
        <div className='Title-bars'>
          <img src={menubars} id='menubars' alt="menu" className={menuClassName} onClick={() => handleClick()}/> 
        </div>
        <h1>Jake Gustin</h1>
      </header>
    </div>
  );
}

export default Title;
