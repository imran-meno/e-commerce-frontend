import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Navigate } from "react-router-dom"
import './signup.css'
function Signup(){

    const [name,Setname]=useState('')
    const [email,Setemail]=useState('')
    const [password,Setpassword]=useState('')
      const navigate=useNavigate(navigator)

    const HandleSumbit=async(e)=>{
        e.preventDefault()
        

              const res = await axios
              .post('http://localhost:3000/signup',{name,email,password})
            .then((result)=>{console.log(result)})
            .catch((err)=>{console.log(err)})
        }
       const GoToLogin=()=>{
      
        navigate('/login')


        }

    return(
        <>
        <div className="signup_main">
        <div className="signup_image"></div>
        <div className="signup_form">
          
                <h2>Create an Account</h2>
            <p>Enter your details below</p>
            <form onSubmit={HandleSumbit}>

        <input type="text" placeholder="Enter your name" 
        value={name}
        onChange={(e)=>Setname(e.target.value)}
        />
        <br />
        <input type="text" placeholder="Enter email or phone" 
        value={email}
        onChange={(e)=>Setemail(e.target.value)}
        />
        <br />
        <input type="password" placeholder="Enter Password" 
        value={password}
        onChange={(e)=>Setpassword(e.target.value)}
        />
        <br />
        <button type='submit' 
        onClick={(e)=>{console.log('clicked')}}>Create Account</button>
        <p onClick={GoToLogin}>Already have an account </p>
            </form>
            
        </div>


        </div>
        </>
    )
}
export default Signup