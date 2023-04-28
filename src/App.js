import Home from './Home';
import Header from './Header';
import Lists from './Lists';
import ToDos from './ToDos';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { auth } from './firebase/firebase_setup/firebase';
import LogIn from './LogIn';
import Signup from './Signup';

function App() {
  const [userLoaded, setUserLoaded] = useState(false);

  useEffect(() => {
    console.log("Header mounted", userLoaded);
    auth.onAuthStateChanged( _ => {
      setUserLoaded(true);
    });
  }, [userLoaded]);

  const handleAuthChange = () => {
    setUserLoaded(false);
  };

  return (
    <Router>
      <div className="App">
        <Header userLoaded={userLoaded} setUserLoaded={handleAuthChange}/>
        <div className='content'>
          <Routes>
            <Route exact path='/' element={<Home itemType={"categories"}/>}/>
            <Route exact path='/login' element={<LogIn setUserLoaded={handleAuthChange}/>}/>
            <Route exact path='/signup' element={<Signup/>}/>
            <Route exact path='/:category' element={<Lists itemType={"to do lists"}/>}/>
            <Route exact path='/:category/:list' element={<ToDos itemType={"to do lists"}/>}/>
            <Route path='*' element={<h1>This page doesn't exist (yet) please go back to the home screen by clicking the header</h1>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
