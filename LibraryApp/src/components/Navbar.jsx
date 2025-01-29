import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{backgroundColor:"black", color:"pink", borderRadius:"30px"}}>
            <Toolbar>
                <Link to={'/'}>
                    <Button color="inherit" style={{color:"pink", textTransform:"none", fontSize:"20px", fontWeight:"bold"}} sx={{'&:focus': { outline: 'none' }, '&:focus-visible': { outline: 'none' }}}>ViewBook</Button>
                </Link>
                <Typography variant="h6" component="div" style={{fontSize:"23px"}} sx={{ flexGrow: 1, fontWeight:"bold"}}>Library</Typography>
                <Link to={'/add'}>
                    <Button color="inherit" style={{color:"pink", textTransform:"none", fontSize:"20px", fontWeight:"bold"}} sx={{'&:focus': { outline: 'none' }, '&:focus-visible': { outline: 'none' }}}>AddBook</Button>
                </Link>
            </Toolbar>
        </AppBar>
    </Box>
  )
}

export default Navbar
