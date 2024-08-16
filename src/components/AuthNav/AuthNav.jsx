import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

const AuthNav = () => {    
    return (
    <div>      
      <ul className={s.list}>
        <li>
          <NavLink to='/registration'>Registration</NavLink>
        </li>
        <li>
          <NavLink to='/login'>Login</NavLink>
        </li>
       </ul>
    </div>
    );
};

export default AuthNav;