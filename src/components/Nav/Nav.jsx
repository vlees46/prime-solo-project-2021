import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';


import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(1),
    display: "flex",
    
  },
 logo: {
    flexGrow: "5",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "15px",
    marginLeft: theme.spacing(5),
    "&:hover": {
      color: "#B9FAF8",
      borderBottom: "1px solid white",
    },
  },
}));


function Nav() {
  const classes = useStyles();
  const user = useSelector((store) => store.user);
  console.log('user informaiton', user);

  return (
    <AppBar style={{ backgroundColor: '#2C2829', color: 'white' }} position="static">
    
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          Macro Menu
        </Typography>
    <div className={classes.navlinks}>
      <Link to="/login" className={classes.link}>
        Login
      </Link>
      <div>
        {/* If no user is logged in, show these links */}
        {user.id === null &&
          // If there's no user, show login/registration links
          <Link className={classes.link} to="/login" >
            Login / Register
          </Link>
        }

        {/* If a  user is logged in, show these links */}
       
  {/* If a admin user is logged in, show these links */}
{user.id && (
           <div className={classes.navlinks}>     

            <Link className={classes.link} to="/macrocalculator">
              Macro Calculator
            </Link>

            <Link className={classes.link} to="/addmeal">
              Add Meal
            </Link>
               
            <LogOutButton className={classes.link} />
            
            </div>   
        )}
       
        </div>
      
       </div>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
