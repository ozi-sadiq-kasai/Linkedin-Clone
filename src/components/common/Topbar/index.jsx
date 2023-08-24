import React from 'react'
import './index.scss'
import LinkedinLogo from '../../../assets/linkedinLogo.png'
import { BsBriefcase} from "react-icons/bs";
import { AiOutlineHome,AiOutlineUserSwitch,AiOutlineSearch,AiOutlineMessage,AiOutlineBell} from 'react-icons/ai';
const index = () => {
  return (
    <div className="topbar-main">
      <img src={LinkedinLogo} alt="logo" className="linkedin-logo" />
      <div className='react-icons'>
       <AiOutlineSearch size={20} className="react-icon"/>
       <AiOutlineHome size={25} className="react-icon"/>
       <AiOutlineUserSwitch size={25} className="react-icon"/>
       <BsBriefcase size={25} className="react-icon"/>
       <AiOutlineMessage size={25} className="react-icon"/>
       <AiOutlineBell size={25} className="react-icon"/>
      </div>
    </div>
  )
}

export default index
