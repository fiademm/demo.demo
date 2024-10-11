import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { UserProvider } from './utils/UserContext';
import ErrorBoundary from './utils/ErrorBoundary';
import { lazy, Suspense } from 'react';
import Loading from './components/Loading';

const TestHub = lazy(() => import('./TestHub'));

const App = () => {
  return (
    <UserProvider>
      <BrowserRouter>
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
        <Routes>
          {/* routes for screens */}
          <Route path='/' element={<TestHub />} />
          {/* routes for views */}
        </Routes>
        </Suspense>
      </ErrorBoundary>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
