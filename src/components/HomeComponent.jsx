import React from 'react'
import PostStatus from "./common/PostUpdate/PostStatus"
const HomeComponent = ({currentUser}) => {

  return (
    <div className="home-component">
      <PostStatus currentUser={currentUser}/>
    </div>
  )
}

export default HomeComponent
