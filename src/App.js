import Home from './Home';
import RootLayout from './layouts/RootLayout';
import Lists from './Lists';
import ToDos from './ToDos';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { auth } from './firebase/firebase_setup/firebase';
import LogIn from './LogIn';
import Signup from './Signup';

function App() {
  const [userLoaded, setUserLoaded] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged( _ => {
      setUserLoaded(true);
    });
  }, [userLoaded]);

  const handleAuthChange = () => {
    setUserLoaded(false);
  };

  const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout userLoaded={userLoaded} setUserLoaded={handleAuthChange} />}>
      <Route index element={<Home itemType={"categories"}/>} />
      <Route path="login" element={<LogIn />} />
      <Route path="signup" element={<Signup />} />
      <Route path=":category" element={<Lists itemType={"to do lists"}/>}/>
      <Route path=":category/:list" element={<ToDos />} />
      <Route path='*' element={<h1>This page doesn't exist (yet) please go back to the home screen by clicking the header</h1>}/>
    </Route>
  )
)

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
