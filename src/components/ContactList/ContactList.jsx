import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import s from './ContactList.module.css';
import { selectFilteredContacts } from '../../redux/selectors';

function ContactList() {  
    const filteredData = useSelector(selectFilteredContacts);
  
    return (
    <ul className={s.list}>
        {filteredData.length ? (
          filteredData.map((contact) => (
            <li className={s.item} key={contact.id}>          
              <Contact data={contact} />
            </li>
          )) 
        ) : (<h2>No data received!</h2>)}
    </ul>
  );
}

export default ContactList;