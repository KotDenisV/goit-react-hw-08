import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => {    
    return (
    <div>      
      <ul className={s.list}>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/contacts'>Contacts</NavLink>
        </li>
       </ul>
    </div>
    );
};

export default Navigation;