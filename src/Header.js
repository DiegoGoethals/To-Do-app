import { Link } from 'react-router-dom';
import './Header.css';
import { auth } from './firebase/firebase_setup/firebase';

function Header(props) {
  const onClickHandler = () => {
    auth.signOut().then(() => {
      setUserLoaded(false);
    }).catch((error) => {
      console.log(error.message);
    });
  };

  const userLoaded = props.userLoaded;
  const setUserLoaded = props.setUserLoaded;

  return (
    <div className='header'>
      <Link to="/"><p>Home</p></Link>
      {!userLoaded && <p>Loading...</p>}
      {userLoaded && !auth.currentUser && <Link to="/login"><p>Log in</p></Link>}
      {userLoaded && auth.currentUser && <p onClick={onClickHandler} style={{"cursor": "pointer"}}>Log out</p>}
    </div>
  );
}

export default Header;