import './Header.css';
import { login, logout } from '../../services/firebase';
import { Link } from 'react-router-dom';

const Header = ({ user }) => {
    return (
        <div className="Header">
            <Link to='/'><h1>Polymer Clay Inventory</h1></Link>
            
            <ul>
                <Link to='/brands'><li className='nav-link'>Brands</li></Link>
                <Link to='/colors'><li className='nav-link'>Colors</li></Link>
                {
                    user ? 
                    <>
                    <Link to='/inventory'><li className='nav-link'>My Inventory</li></Link>
                    <li className='nav-link' onClick={logout}>Logout</li>
                    </>
                    :
                    <li className='nav-link' onClick={login}>Login</li>
                }
            </ul>
        </div>
    );
}
 
export default Header;