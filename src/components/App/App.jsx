import { useEffect } from 'react';
import styles from './App.module.css';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import { selectError, selectLoading } from '../../redux/contacts/selectors';
import { fetchContactsThunk } from '../../redux/contacts/operetions';
import { useDispatch, useSelector } from 'react-redux';
import ContactsPage from '../../pages/ContactsPage/ContactsPage';

function App() {
  // const loading = useSelector(selectLoading);
  // const isError = useSelector(selectError);
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
