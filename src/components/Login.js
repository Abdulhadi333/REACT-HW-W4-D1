import React, { useRef, useState } from 'react'
import Home from './Home'


export default function Login() {
 
    const email=useRef()
    const password=useRef()
    const getEmail=localStorage.getItem("emailData")
    const getPassword=localStorage.getItem("passwordData")
const handleSubmit =()=>{
    if(email.current.value=="abc@gmail.com" && password.current.value=="12345")
    localStorage.setItem("emailData","abc@gmail.com")
    localStorage.setItem("passwordData","12345")

}


  return (
    <div>
        {
            getEmail&&getPassword?<Home/>:
        <form className='loginForm'  onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input type="email" className='form-control' placeholder='email' ref={email}/>
        <br />
        <input type="password" className='form-control' placeholder='password' ref={password}/>
        <br />
        <button className='btn btn-primary' >Send</button>
        </form>
}


    </div>
  )
}
