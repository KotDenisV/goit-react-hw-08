import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import s from './UserMenu.module.css';
import { logoutThunk } from "../../redux/auth/operations";


const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch(); 
  
  return (
    <div className={s.wrapper}>
      <p className={s.user}>Welcome, {user.email}</p>
      <button className={s.button} onClick={() => dispatch(logoutThunk())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;