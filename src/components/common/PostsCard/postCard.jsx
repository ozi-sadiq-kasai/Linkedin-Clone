import React from 'react'
import "./postCard.scss"
const postCard = ({posts}) => {
  return (
    <div className = 'posts-card'>
      <p className="timestamp">{posts.timestamp}</p>
      <p className="status">{posts.status}</p>
    </div>
  )
}

export default postCard
