import Home from './Home';
import Header from './Header';
import Lists from './Lists';
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
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
