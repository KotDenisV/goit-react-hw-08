import { useSelector } from "react-redux";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import s from './AppBar.module.css';
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import UserMenu from "../UserMenu/UserMenu";

const AppBar = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return (
      <div className={s.wrapper}>
        <ul className={s.list}>
          <li>{<Navigation />}</li>
          {!isLoggedIn && (
            <>
              <li>{<AuthNav />}</li>
            </>
          )}
          {isLoggedIn && (
            <>
              <li>{<UserMenu />}</li>
            </>
          )}
        </ul>    
      </div>
    );
};

export default AppBar;