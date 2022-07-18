import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'



export default function Create() {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
  
    const postData = () => {
      axios
        .post(`https://62d3e4085112e98e4846e3f0.mockapi.io/dataHW1`, {
          firstName,
          lastName,
        })
        .then((res) => {
          console.log(res);
          navigate("/Home");
        })
        .catch((err) => {
          console.log(err);
        });
    };
      

  return (
    <div className='create'>
        <h4>Create </h4>
        <input placeholder='FirstName' onChange={(e)=>{setFirstName(e.target.value);}}></input>
        <input placeholder='LastName' onChange={(e)=>{setLastName(e.target.value);}}></input>
        <button className='btn btn-success' onClick={postData}>Add</button>
    </div>
  )
}
