import React, { useState } from 'react'

const Signup = () => {
    let [username,setUsername]=useState("")
    let[Email,setEmail]=useState("")
    let[password,setPassword] =useState("")
    function submit(e){
        e.preventDefault()
       let playload={username,Email,password} 
        let dataname=localStorage.setItem("username",username)
        let dataemail=localStorage.setItem("Email",Email)
        let datapassword=localStorage.setItem("password",password)
        
        console.log(playload);
        window.location.href="/"
    }
  return (
    <div className='vh-100 w-100 d-flex justify-content-center align-content-center'>
        <form >
            <table border="1">
                <tr>
                    <td><label htmlFor="">Username</label></td>
                    <td><input type="text" onChange={(e)=>{setUsername(e.target.value)}}/></td>
                </tr>
                <tr>
                    <td><label htmlFor="">Email</label></td>
                    <td><input type="email" onChange={(e)=>{setEmail(e.target.value)}} /></td>
                </tr>
                <tr>
                    <td><label htmlFor="">Password</label></td>
                    <td><input type="password" onChange={(e)=>{setPassword(e.target.value)}}/></td>
                </tr>
                <tr>
                 <td><button className='btn btn-primary' onClick={submit} >Signup</button></td>
                </tr>
            </table>
        </form>
    </div>
  )
}

export default Signup