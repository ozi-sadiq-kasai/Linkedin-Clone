import React from 'react'
import './index.scss'
import LinkedinLogo from '../../../assets/linkedinLogo.png'
import { BsBriefcase} from "react-icons/bs";
import { AiOutlineHome,AiOutlineUserSwitch,AiOutlineSearch,AiOutlineMessage,AiOutlineBell} from 'react-icons/ai';
import userIcon from "../../../assets/userIcon.png"
import { useNavigate } from "react-router-dom"
const index = () => {
 let navigate = useNavigate()
 const goToRoute = (route) =>{
  navigate(route)
 }
  return (
    <div className="topbar-main">
      <img src={LinkedinLogo} alt="logo" className="linkedin-logo" />
      <div className='react-icons'>
       <AiOutlineSearch size={20} className="react-icon"/>
       <AiOutlineHome size={25} className="react-icon" onClick={()=>goToRoute('/home')}/>
       <AiOutlineUserSwitch size={25} className="react-icon" onClick={()=>goToRoute('/profile')}/>
       <BsBriefcase size={25} className="react-icon"/>
       <AiOutlineMessage size={25} className="react-icon"/>
       <AiOutlineBell size={25} className="react-icon"/>
       <img src={userIcon} alt="user-icon" className="userIcon" />
      </div>
    </div>
  )
}

export default index
