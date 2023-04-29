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

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
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
    console.log(theme);
    localStorage.setItem('theme', theme);
    const root = document.querySelector(':root');
    if (root) {
      if (theme === 'light') {
        setSymbol(<i className="fa-solid fa-moon" style={{ color: '#303030' }}></i>);
        root.style.setProperty('--bg-color', 'whitesmoke');
        root.style.setProperty('--color', 'black');
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
    <div className='header'>
      <Link to="/"><p>Home</p></Link>
      {!userLoaded && <p>Loading...</p>}
      {userLoaded && !auth.currentUser && <Link to="/login"><p>Log in</p></Link>}
      {userLoaded && auth.currentUser && <p onClick={onClickHandler} style={{"cursor": "pointer"}}>Log out</p>}
      <p onClick={toggleTheme}>{symbol}</p>
    </div>
  );
}

export default Header;