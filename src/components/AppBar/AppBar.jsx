import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";

const AppBar = () => {    
    return (
    <div>
      <ul>
        <li>{<Navigation />}</li>
        <li>{<AuthNav />}</li>
      </ul>    
    </div>
    );
};

export default AppBar;