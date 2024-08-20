import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const Navigation = () => {  
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return (
    <div className={s.list}>       
      <NavLink to='/'>Home</NavLink>        
      {isLoggedIn && (
      <NavLink to='/contacts'>Contacts</NavLink>
      )}
    </div>
    );
};

export default Navigation;