import styles from './App.module.css';
import ContactsPage from '../../pages/ContactsPage/ContactsPage';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
import HomePage from '../../pages/HomePage/HomePage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import RegistrationPage from '../../pages/RegistrationPage/RegistrationPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getMeThunk } from '../../redux/auth/operations';
import { PrivateRoute } from '../../Routes/PrivateRoute';

function App() { 
  const dispath = useDispatch();
  useEffect(() => {
    dispath(getMeThunk());
  }, [dispath]);
  return (
    <div className={styles.appWrapper}>     
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='contacts' element={
            <PrivateRoute>
              <ContactsPage />
            </PrivateRoute>
            } />
        </Route>  
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegistrationPage />} />          
          <Route path='*' element={<NotFoundPage />} />        
      </Routes>
    </div>
  );
}

export default App
