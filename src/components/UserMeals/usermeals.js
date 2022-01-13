
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ClassNames } from '@emotion/react';
import { TablePagination } from '@mui/material';
import { RecordVoiceOverSharp } from '@mui/icons-material';
import { Button } from '@material-ui/core';



//import './addmeal.css'

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function usermeals() {
  const dispatch = useDispatch();
  const history = useHistory();

 /*  const user = useSelector((store) => store.user);
  const meals = useSelector((store) => store.meal); */

  const usermeals = useSelector((store) => store.usermeal)

  
const backpage = (e) =>  {
    history.push('/macroresults');
  
  }
  
 useEffect(() => {
    dispatch({ type: 'GET_USERMEAL' });
  }, []);
  


  console.log('usermeals REDUCER', usermeals);
const pages = [5, 10, 25]
const [page, setPage] = useState(0);
const [rowsPerPage, setRowsPerPage ] = useState(pages[page])

const TablePagination = () =>(<TablePagination
  component ="div"
  rowsPerPageOptions = {pages}
  count={records.length}
 />)


  return (
    <div>




       <h1> User Meals</h1>
       <paper className={ClassNames.pageContent}>
         <TableContainer>
         <Table sx={{ minWidth: 650 }} aria-label="simple table">
         
        <TableHead>
          <TableRow>
            <TableCell>
              Mealtime
            </TableCell>
            <TableCell>
              Description
            </TableCell>
          </TableRow>
        </TableHead>
           <TableBody>
             {
                usermeals.map(usermeal =>
                  (<TableRow key={usermeal.id}>
                    
                      <TableCell>{usermeal.mealtime}</TableCell>
                      <TableCell>{usermeal.description}</TableCell>
                  </TableRow>)         
                  )
      
          }
          </TableBody>
          </Table>
      </TableContainer>
       
      </paper>
      <Button variant="contained"
         style={{ backgroundColor: '#A663CC', color: 'white' }}
         onClick={(e) => { backpage(e) }}>Back</Button>
  </div>
  );
  
}

export default usermeals;
