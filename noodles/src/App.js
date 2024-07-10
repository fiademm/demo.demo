import './App.css';
import Dashboard from './app/screens/Dashboard';
import Login from './app/screens/Login';
import Register from './app/screens/Register';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Settings from './app/screens/Settings';
import Notifications from './app/screens/Notifications';
import Tasks from './app/screens/Tasks';
import Schedule from './app/screens/Schedule';
import Resources from './app/screens/Resources';
import Reports from './app/screens/Reports';
import Engagements from './app/screens/Engagements';

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/engagements' element={<Engagements />}></Route>
          <Route path='/reports' element={<Reports />}></Route>
          <Route path='/resources' element={<Resources />}></Route>
          <Route path='/schedule' element={<Schedule />}></Route>
          <Route path='/tasks' element={<Tasks />}></Route>
          <Route path='/notifications' element={<Notifications />}></Route>
          <Route path='/settings' element={<Settings />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
