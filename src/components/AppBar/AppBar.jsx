import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import s from './AppBar.module.css';

const AppBar = () => {    
    return (
    <div className={s.wrapper}>
      <ul className={s.list}>
        <li>{<Navigation />}</li>
        <li>{<AuthNav />}</li>
      </ul>    
    </div>
    );
};

export default AppBar;