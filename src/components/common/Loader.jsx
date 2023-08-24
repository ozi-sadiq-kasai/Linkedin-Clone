import { Space, Spin } from 'antd';
import './common.scss'
import React from 'react'

const Loader = () => {
  return (
    <div className="loader">
     <p className="loading-msg">Loading... Please Wait...</p>
     <Space size="middle"/>
      <Spin size ="Large"/>
     <Space/>
    </div>
  )
}

export default Loader

