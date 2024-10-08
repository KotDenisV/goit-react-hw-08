
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactList from '../../components/ContactList/ContactList';
import { selectError, selectLoading } from '../../redux/contacts/selectors';
import { useSelector } from 'react-redux';
import s from './ContactsPage.module.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContactsThunk } from '../../redux/contacts/operations';

const ContactsPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchContactsThunk());
      }, [dispatch]);
    const loading = useSelector(selectLoading);
    const isError = useSelector(selectError);
    
    return (
    <div className={s.appWrapper}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && <h1>Loading...</h1>}      
      <ContactList />
      {isError && <h2>Something went wrong!</h2>}
    </div>
    );
};

export default ContactsPage;