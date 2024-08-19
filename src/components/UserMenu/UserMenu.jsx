import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import s from './UserMenu.module.css';
import { logoutThunk } from "../../redux/auth/operations";
import { useNavigate } from 'react-router-dom';


const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutThunk()).then(() => {
      navigate('/');
    });
  };
  
  return (
    <div className={s.wrapper}>
      <p className={s.user}>Welcome, {user.email}</p>
      <button className={s.button} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;