import { lazy, Suspense } from 'react';
import './styles/layout.css'; 
import { UserProvider } from './utils/UserContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ErrorBoundary from './utils/ErrorBoundary';
import VerfiyAccount from './views/VerfiyAccount';
import Dashboard from './views/Dashboard';
import Engagements from './views/Engagements';
import Reports from './views/Reports';
import Resources from './views/Resources';
import Schedule from './views/Schedule';
import Jobs from './views/Jobs';
import Notifications from './views/Notifications';
import Settings from './views/Settings';
import AddResource from './views/AddResource';
import ViewResources from './views/ViewResources';
import AddEngagement from './views/AddEngagement';


const Signin = lazy(() => import('./views/Signin'));
const Signup = lazy(() => import('./views/Signup'));
const ResetPassword = lazy(() => import('./views/ResetPassword'));
const Home = lazy(() => import('./views/Home'));

const App = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              {/* Routes for screens */}
              <Route path='/' element={<Signin />} />
              <Route path='/Signup' element={<Signup />} />
              <Route path='/Verifyaccount' element={<VerfiyAccount />} />
              <Route path='/Resetpassword' element={<ResetPassword />} />
              <Route path='/Home' element={<Home />} />
              <Route path='/Dashboard' element={<Dashboard />} />
              <Route path='/Engagements' element={<Engagements />} />
              <Route path='/Reports' element={<Reports />} />
              <Route path='/Resources' element={<Resources />} />
              <Route path='/Schedule' element={<Schedule />} />
              <Route path='/Jobs' element={<Jobs />} />
              <Route path='/Notifications' element={<Notifications />} />
              <Route path='/Settings' element={<Settings />} />
              {/* Routes for views */}
              <Route path='/Addresource' element={<AddResource />} />
              <Route path='/Addengagement' element={<AddEngagement />} />
              <Route path='/Viewresources' element={<ViewResources />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;