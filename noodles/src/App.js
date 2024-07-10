import './App.css';
import Dashboard from './app/screens/Dashboard';
import Login from './app/screens/Login';
import Register from './app/screens/Register';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
