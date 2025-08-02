import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MenuMore from './moremenu.jsx';
import './nav.css';

function Nav() {
  
  const handleBurgerClick = () => {
    const leftBar = document.querySelector('.LBM');
    if (leftBar) {
      leftBar.style.display = leftBar.style.display === 'none' ? 'flex' : 'none';
    }
  };
  const BurgerButton = useRef(null);

  useEffect(()=>{
    const el= BurgerButton.current;
    if (!el) return;
    el.addEventListener('click', handleBurgerClick);
    return () => el.removeEventListener('click', handleBurgerClick);
  }, [BurgerButton]); // Ensure BurgerButton is defined before adding the event listener
  

  return (
    <div className="navbar">
      <div className='BurgerButton' ref={BurgerButton}>=</div>
      <div className="navbar-logo">MyApp</div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <MenuMore />
      </ul> 
    </div>
  );
}


export default Nav;
