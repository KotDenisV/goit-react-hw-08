import { useEffect } from 'react';
import styles from './App.module.css';
import { fetchContactsThunk } from '../../redux/contacts/operetions';
import { useDispatch } from 'react-redux';
import ContactsPage from '../../pages/ContactsPage/ContactsPage';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
import HomePage from '../../pages/HomePage/HomePage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import RegistrationPage from '../../pages/RegistrationPage/RegistrationPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';

function App() {  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);
  
  return (
    <div className={styles.appWrapper}>
      {/* <ContactsPage /> */}
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='registration' element={<RegistrationPage />} />
          <Route path='contacts' element={<ContactsPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App
