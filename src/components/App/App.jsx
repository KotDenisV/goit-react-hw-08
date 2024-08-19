import styles from './App.module.css';
import ContactsPage from '../../pages/ContactsPage/ContactsPage';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
import HomePage from '../../pages/HomePage/HomePage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import RegistrationPage from '../../pages/RegistrationPage/RegistrationPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMeThunk } from '../../redux/auth/operations';
import { PrivateRoute } from '../../Routes/PrivateRoute';
import { PublicRoute } from '../../Routes/PublicRoute';
import { selectIsRefreshing } from '../../redux/auth/selectors';

function App() { 
  const dispath = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing)
  useEffect(() => {
    dispath(getMeThunk());
  }, [dispath]);
  return isRefreshing ? null : (
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
          <Route path='/login' element={<PublicRoute><LoginPage /></PublicRoute>} />
          <Route path='/register' element={<PublicRoute><RegistrationPage /></PublicRoute>} />          
          <Route path='*' element={<NotFoundPage />} />        
      </Routes>
    </div>
  );
}

export default App
