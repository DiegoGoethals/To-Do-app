import { NavLink, Outlet } from 'react-router-dom';
import './Header.css';
import { useEffect, useState } from 'react';
import { auth } from '../firebase/firebase_setup/firebase';
import Breadcrumbs from '../Components/Breadcrumbs';

function RootLayout(props) {
  const onClickHandler = () => {
    auth.signOut().then(() => {
      setUserLoaded(false);
      window.location.href = "/";
    }).catch((error) => {
      console.log(error.message);
    });
  };

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [symbol, setSymbol] = useState(
    theme === 'light' ? (
      <i className="fa-solid fa-moon" style={{ color: '#303030' }}></i>
    ) : (
      <i className="fa-solid fa-sun" style={{ color: '#e1ff00' }}></i>
    )
  );

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      setSymbol(<i className="fa-solid fa-sun" style={{ color: '#e1ff00' }}></i>);
    } else {
      setTheme('light');
      setSymbol(<i className="fa-solid fa-moon" style={{ color: '#303030' }}></i>);
    }
  };
  
  useEffect(() => {
    localStorage.setItem('theme', theme);
    const root = document.querySelector(':root');
    if (root) {
      if (theme === 'light') {
        setSymbol(<i className="fa-solid fa-moon" style={{ color: '#303030' }}></i>);
        root.style.setProperty('--bg-color', 'rgb(240,240,240)');
        root.style.setProperty('--color', 'rgb(221,102,142)');
      } else {
        setSymbol(<i className="fa-solid fa-sun" style={{ color: '#e1ff00' }}></i>);
        root.style.setProperty('--bg-color', 'rgb(48,48,48)');
        root.style.setProperty('--color', 'rgb(178,22,77)');
      }
    }
  }, [theme]);

  const userLoaded = props.userLoaded;
  const setUserLoaded = props.setUserLoaded;

  return (
    <div className = "root">
      <div className='header'>
        <NavLink to="/"><p>Home</p></NavLink>
        {!userLoaded && <p>Loading...</p>}
        {userLoaded && !auth.currentUser && <NavLink to="login"><p>Log in</p></NavLink>}
        {userLoaded && auth.currentUser && <p onClick={onClickHandler} style={{"cursor": "pointer"}}>Log out</p>}
        <p onClick={toggleTheme}>{symbol}</p>
      </div>
      <Breadcrumbs/>
      <main>
        <Outlet/>
      </main>
    </div>
  );
}

export default RootLayout;