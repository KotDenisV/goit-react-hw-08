import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

const AuthNav = () => {    
    return (
    <div>      
      <ul className={s.list}>
        <li>
          <NavLink to='/register'>Register</NavLink>
        </li>
        <li>
          <NavLink to='/login'>Log In</NavLink>
        </li>
       </ul>
    </div>
    );
};

export default AuthNav;