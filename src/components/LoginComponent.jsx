import React from 'react'
import { useState } from 'react'
import { LoginApi, GoogleSignInApi} from "../api/AuthApi"
import linkedinLogo from "../assets/linkedinLogo.png"
import "../Sass/LoginComponent.scss"
import { toast } from "react-toastify"
import { useNavigate } from 'react-router-dom'
import GoogleButton from 'react-google-button'

const LoginComponent = () => {
 let navigate = useNavigate()
 const [credentials,setCredentials] = useState({})
 
 const login = async () =>{
 try {
   let res= await LoginApi(credentials.email,credentials.password)
   navigate('/home')
   toast.success('Sign in Successful')
   localStorage.setItem("userEmail",res.user.email)
 } catch (error) {
  console.log(error.message)
  toast.error('Wrong Email or Password')
 }
 }
 const googleSignIn = () =>{
 try {
  let response= GoogleSignInApi()
   navigate('/home')
  console.log(response)
 } catch (error) {
  console.log(error.message)
 }
 }
  return (
  <>
   <img src={linkedinLogo} alt="linkedinLogo"className="linkedin-Logo" />
   <div className="container-login">
    <div className="login-wrapper">
      <h1 className="heading">Sign in</h1>
      <p className="sub-heading">Stay updated on your professional world</p>
      <div className="auth-inputs">
        <input 
         type="email"
         className='common-inputs'
         placeholder="Email or Phone"
         onChange= {(event)=> setCredentials({...credentials,email:event.target.value})}
          />
         <input 
          type="password"
          className='common-inputs'
          placeholder="Enter your Password"
          onChange= {(event)=> setCredentials({...credentials,password:event.target.value})}
          />
      </div>
      <button onClick={login}className="login-btn">Sign in</button>

      <hr className="hr-text" data-content="or"></hr>
      <GoogleButton
       className="google-btn"onClick={googleSignIn }/>
      <p className="join-option">New to Linkedin? <span className="join-span" onClick={()=>navigate('/register')}>join now</span></p> 
    </div>
   </div>
  </> 
  )
}

export default LoginComponent
