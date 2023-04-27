import Home from './Home';
import Header from './Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <div className='content'>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/:category' element={<Home/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
