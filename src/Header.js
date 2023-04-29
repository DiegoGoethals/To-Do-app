import { Link } from 'react-router-dom';
import './Header.css';
import { useEffect, useState } from 'react';
import { auth } from './firebase/firebase_setup/firebase';

function Header(props) {
  const onClickHandler = () => {
    auth.signOut().then(() => {
      setUserLoaded(false);
      window.location.href = "/";
    }).catch((error) => {
      console.log(error.message);
    });
  };

  const [theme, setTheme] = useState('dark');

  const root = document.querySelector(':root');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      root.style.setProperty('--bg-color', 'rgb(48,48,48)');
      root.style.setProperty('--color', 'rgb(178,22,77)');
    } else {
      setTheme('light');
      root.style.setProperty('--bg-color', 'whitesmoke');
      root.style.setProperty('--color', 'black');
    }
  };

  useEffect(() => {
    console.log('theme changed');
        document.body.className = theme;
  }, [theme]);

  const userLoaded = props.userLoaded;
  const setUserLoaded = props.setUserLoaded;

  return (
    <div className='header'>
      <Link to="/"><p>Home</p></Link>
      {!userLoaded && <p>Loading...</p>}
      {userLoaded && !auth.currentUser && <Link to="/login"><p>Log in</p></Link>}
      {userLoaded && auth.currentUser && <p onClick={onClickHandler} style={{"cursor": "pointer"}}>Log out</p>}
      <p onClick={toggleTheme} style={{"cursor": "pointer"}}>Toggle theme</p>
    </div>
  );
}

export default Header;