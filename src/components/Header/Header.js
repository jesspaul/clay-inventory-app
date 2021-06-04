import './Header.css';
import { login, logout } from '../../services/firebase';

const Header = ({ user }) => {
    return (
        <div className="Header">
            <h1>Clay Inventory App</h1>
            <ul>
                <li>Brand</li>
                <li>Color</li>
                {
                    user ? 
                    <li onClick={logout}>Logout</li>
                    :
                    <li onClick={login}>Login</li>
                }
            </ul>
        </div>
    );
}
 
export default Header;