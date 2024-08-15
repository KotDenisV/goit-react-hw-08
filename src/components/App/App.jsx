import { useEffect } from 'react';
import styles from './App.module.css';

import { fetchContactsThunk } from '../../redux/contacts/operetions';
import { useDispatch } from 'react-redux';
import ContactsPage from '../../pages/ContactsPage/ContactsPage';

function App() {  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);
  
  return (
    <div className={styles.appWrapper}>
      <ContactsPage/>
    </div>
  );
}

export default App
