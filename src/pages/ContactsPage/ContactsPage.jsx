import { useEffect } from 'react'
// import s from './App.module.css'
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox'
import ContactList from '../../components/ContactList/ContactList'
import { selectError, selectLoading } from '../../redux/contacts/selectors';
import { fetchContactsThunk } from '../../redux/contacts/operetions';
import { useDispatch, useSelector } from 'react-redux';
import s from './ContactsPage.module.css';

const ContactsPage = () => {
    const loading = useSelector(selectLoading);
    const isError = useSelector(selectError);
    // const dispatch = useDispatch();
    // useEffect(() => {
    //   dispatch(fetchContactsThunk());
    // }, [dispatch]);
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