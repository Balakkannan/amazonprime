import { useState } from "react"
import { Link } from "react-router-dom"

const Login =()=>{
    let [email,setEmail]=useState("")
    let [password,setPassword]=useState("")
   
    function sumbit(e){
        e.preventDefault()
        console.log(email,password);
        let data=localStorage.getItem("username")
        let datapassword=localStorage.getItem("password")
        // console.log(data,datapassword);
        
        if(data==email && password==datapassword){
            console.log(" macth");
            
        }else{
           window.location.href="/"
            
        }
        
    }
 return(
    <div className="container-fluid d-flex justify-content-center align-content-center vh-100">
        <div className="h-50 w-50 border border-danger d-flex justify-content-center align-content-center">
            <from className="h-50 w-100 d-flex justify-content-center align-content-center">
                <table border="1 ">
                    <tr>
                        <td><label htmlFor="">Email</label></td>
                        <td><input type="text" onChange={(e)=>{setEmail(e.target.value)}}/></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="">Password</label></td>
                        <td><input type="text" onChange={(e)=>{setPassword(e.target.value)}} /></td>
                    </tr>
                    <tr>
                       <td><button className="btn btn-primary" onClick={sumbit}>Login</button></td>
                       <td><Link to="/Signup"><button className="btn btn-outline-secondary">Signup Page</button></Link></td>
                    </tr>
                </table>
            </from>
        </div>
        
        
    </div>
 )
    
}
export default Login