import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Addproduct from './components/Addproduct';
import Getproduct from './components/Getproduct';
import Mpesapayment from './components/Mpesapayment';

function App() {
  return (
    <Router>
    <div className="App">
      <div className='App-header'>
        <h1 className='text-light'>Welcome to 💚Green Beauty💚</h1>
      </div><br />
    {/* Linking routes */}
  <nav>
    <Link to="/signup" className='btn btn-outline-success ms-2'>Sign up</Link>
    <Link to="/signin" className='btn btn-outline-success ms-2'>Sign in</Link>
    <Link to="/addproduct" className='btn btn-outline-success ms-2'>Add product</Link>
    <Link to="/" className='btn btn-outline-success ms-2'>Get product</Link>
   
  </nav>
    <Routes>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/addproduct' element={<Addproduct/>}/>
      <Route path='/' element={<Getproduct/>}/>
      <Route path='/makepayment' element={<Mpesapayment/>}/>
    </Routes>

    </div>
    </Router>
  );
}

export default App;
