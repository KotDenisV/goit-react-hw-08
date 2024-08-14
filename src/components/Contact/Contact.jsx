import s from './Contact.module.css'
import { IoMdContact } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { deleteContactThunk } from '../../redux/contactsOps';

function Contact({ data: { id, name, number }}) {
    const dispatch = useDispatch();
  
    const handleDelete = () => {
    dispatch(deleteContactThunk(id));
  };
  
    return (
    <div className={s.contactWrapper}>
      <div className={s.textWrapper}>      
        <p className={s.text}><IoMdContact /> {name}</p>
        <p className={s.text}><FaPhoneAlt /> {number}</p>
      </div>   
      <button className={s.btn} onClick={handleDelete}>
        Delete
      </button>
    </div>
    );
}

export default Contact;