import React, { useState, useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import axios from 'axios';

const ViewBook = () => {

    const [rows, setRows] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/books').then((res) => {
            setRows(res.data);
        })
    });

  return (
    <div>
        <h1>Books Available!!</h1>
        <div><br></br></div>
        <TableContainer style={{margin:'1%', width:'100%', borderRadius:"10px"}} component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Book Tag</TableCell>
                        <TableCell align="center">Book Name</TableCell>
                        <TableCell align="center">Book Price</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                            <TableCell component="th" scope="row" align="center"> {row.id} </TableCell>
                            <TableCell align="center">{row.bookname}</TableCell>
                            <TableCell align="center">{row.bookprice}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default ViewBook
