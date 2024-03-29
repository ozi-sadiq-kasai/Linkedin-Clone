import React from 'react'
import "./postCard.scss"
const postCard = ({posts}) => {
  return (
    <div className = 'posts-card'>
     <div className= "post-details">
      <p className= "name">{posts.userName}</p>
      <p className="timestamp">{posts.timestamp}</p>
     </div>
      <p className="status">{posts.status}</p>
    </div>
  )
}

export default postCard
