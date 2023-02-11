import MainPage from './pages/MainPage/MainPage';
import Login from './pages/Login/Login';
import Error from './pages/Error/Error';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthWrapper from './pages/AuthWrapper/AuthWrapper';
import PrivateRoute from './pages/PrivateRoute';

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Routes>
          <Route
            path="/"
            exact={true}
            element={
              <PrivateRoute>
                <MainPage />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </AuthWrapper>
  );
}

export default App;
