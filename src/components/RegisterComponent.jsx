import React from 'react'
import { useState } from 'react'
import { RegisterApi, GoogleSignInApi} from "../api/AuthApi"
import linkedinLogo from "../assets/linkedinLogo.png"
import "../Sass/LoginComponent.scss"
import { toast } from "react-toastify"
import { useNavigate } from 'react-router-dom'
import GoogleButton from 'react-google-button'
import "../Sass/RegisterComponent.scss"

const RegisterComponent = () => {
 let navigate = useNavigate()
 const [credentials,setCredentials] = useState({})
 
 const login = async () =>{
 try {
   let res= await RegisterApi(credentials.email,credentials.password)
   toast.success('Account Created!')
   navigate('/home')
  console.log(res)
 } catch (error) {
  console.log(error.message)
  toast.error('Cannot Create your Account')
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
      <h1 className="heading">Make the most of your professional life</h1>
      <div className="auth-inputs">
       <label className="label-email"htmlFor="Email">Email or phone number</label>
        <input 
         type="email"
         className='common-inputs'
         id="email"
         name="email"
         onChange= {(event)=> setCredentials({...credentials,email:event.target.value})}
          />
         <label className="label-password" htmlFor="password">Password (6 or more characters)</label>
         <input 
          type="password"
          className='common-inputs'
          id="password"
          name="password"
          onChange= {(event)=> setCredentials({...credentials,password:event.target.value})}
          />
      </div>
      <div className="login-policy">
        <p>By clicking Agree & Join, you agree to the Linkedin <span>User Agreement Privacy Policy</span> and <span>Cookie Policy</span></p>
        <button onClick={login}className="login-btn">Agree & Join</button>
      </div>
     

      <hr className="hr-text" data-content="or"></hr>
      <GoogleButton
       className="google-btn"onClick={googleSignIn }/>
      <p className="join-option">Already on Linkedin? <span className="join-span" onClick={()=>navigate('/')}>Sign in</span></p> 
    </div>
   </div>
  </> 
  )
}

export default RegisterComponent
