import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Login from './components/Login';
import Create from './components/Create';
import Home from './components/Home';
import Update from './components/Update';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
        <Route path='/' element={<  Login/>} ></Route>

          <Route path='/Login' element={<  Login/>} ></Route>
          <Route path='/Create' element={<  Create/>} ></Route>
          <Route path='/Home' element={<  Home/>} ></Route>
          <Route path='/Update' element={<  Update/>} ></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
