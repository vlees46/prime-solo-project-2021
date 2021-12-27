import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);
  console.log('user informaiton', user);

  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">Macro Menu</h2>
      </Link>
      <div>
        {/* If no user is logged in, show these links */}
        {user.id === null &&
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        }

        {/* If a  user is logged in, show these links */}
       
  {/* If a admin user is logged in, show these links */}
{user.role = 'ADMIN' && (
          <>
            <Link className="navLink" to="/user">
              Home
            </Link>

            <Link className="navLink" to="/addmeal">
              Add Meal
            </Link>

            <LogOutButton className="navLink" />
          </>
        )}
       
      </div>
    </div>
  );
}

export default Nav;
