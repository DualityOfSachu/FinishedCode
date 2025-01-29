import React, { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

const AddBook = () => {

    let [form, setForm] = useState({
      id: '',
      bookname: '',
      bookprice: 0
    });

    function add() {
      axios.post('http://localhost:3000/books', form).then((res) => {
        alert("New Book Added");
      })
    }

    function updateForm(event) {
      const {name} = event.target;
      if(name === "bookprice") {
        // console.log(Number(event.target.value));
        setForm({...form, [name]: Number(event.target.value)});
        return;
      }
      setForm({...form, [name]: event.target.value});
    }

  return (
    <div>
        <div><br></br></div>
        <div><TextField id="outlined-basic" label="Book ID" name='id' variant="outlined" style={{backgroundColor:"white", borderRadius:"10px"}} onChange={updateForm}/></div>
        <div><br></br></div>
        <div><TextField id="outlined-basic" label="Book Name" name='bookname' variant="outlined" style={{backgroundColor:"white", borderRadius:"10px"}} onChange={updateForm}/></div>    
        <div><br></br></div>
        <div><TextField id="outlined-basic"  label="Book Price" name='bookprice' variant="outlined" style={{backgroundColor:"white", borderRadius:"10px"}} onChange={updateForm}/></div>
        <div><br></br></div>
        <Button variant="contained" onClick={add} style={{backgroundColor:"crimson", borderRadius:"10px"}}>
          ADD
        </Button>             
    </div>
  )
}

export default AddBook
