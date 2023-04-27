import Home from './Home';
import Header from './Header';
import Lists from './Lists';
import ToDos from './ToDos';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <div className='content'>
          <Routes>
            <Route exact path='/' element={<Home itemType={"categories"}/>}/>
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
