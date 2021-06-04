import './Header.css';
import { login, logout } from '../../services/firebase';
import { Link } from 'react-router-dom';

const Header = ({ user }) => {
    return (
        <div className="Header">
            <Link to='/'><h1>Clay Inventory App</h1></Link>
            
            <ul>
                <Link to='/brands'><li>Brands</li></Link>
                <Link to='/colors'><li>Colors</li></Link>
                {
                    user ? 
                    <>
                    <Link to='/inventory'><li>My Inventory</li></Link>
                    <li onClick={logout}>Logout</li>
                    </>
                    :
                    <li onClick={login}>Login</li>
                }
            </ul>
        </div>
    );
}
 
export default Header;