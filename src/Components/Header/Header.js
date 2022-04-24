import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import CustomLink from '../../utilities/CustomLink';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  return (
    <nav className='nav_area'>
       <div className="logo_area">
         <img src={logo} alt="" />
       </div>
       <nav className="menuA-area">
         <CustomLink to="/">Home</CustomLink>
         <CustomLink to="/shop">Shop</CustomLink>
         <CustomLink to="/inventory">Inventory</CustomLink>
         <CustomLink to="/order">Order</CustomLink>
         {user?.uid ? <CustomLink onClick={logout} to="" >Logout</CustomLink> : <CustomLink to="/register">Register</CustomLink>
        }
         {user?.uid ? '' : <CustomLink to="/login">Login</CustomLink>
        }
         
       </nav>
      {user?.uid ? <div className="user_info">
      <p>{user?.email}</p>
      </div> : ''}
    </nav>
  );
};

export default Header;