import React from 'react'
import './PostStatus.scss'
import ModalComponent from '../Modal'
import PostCard from '../PostsCard/postCard'
import { useState, useMemo } from 'react'
import { postStatus,getStatus } from '../../../api/FirestoreApi'
import { getCurrentTimeStamp } from '../../../helpers/useMoment'

const PostStatus = () => {
 let userEmail = localStorage.getItem('userEmail')
 const [modalOpen, setModalOpen] = useState(false);
 const [status, setStatus] = useState('');
 const [allStatus, setAllStatus] = useState([]);



 const sendStatus =  () =>{
 let object={
  status:status,
  timestamp:getCurrentTimeStamp('LLL'),
  userEmail:userEmail
 }
    postStatus(object);
    setModalOpen(false)
    setStatus('')
 }

 useMemo(()=>{
  getStatus(setAllStatus)
 },[])

  return (
    <div className="post-status-main">
     <div className="post-status">
      <button className="open-post-modal" onClick={() => setModalOpen(true)}>Start a post</button>
     </div>
     <ModalComponent 
            setStatus={setStatus} 
            modalOpen={modalOpen} 
            setModalOpen={setModalOpen}
            status={status}
            sendStatus={sendStatus}
            />
     <div>
       {allStatus.map((posts)=>{
       return(
        <PostCard posts={posts}/>
       )
      })}
     </div>
    </div>
  )
}

export default PostStatus 
// const PostStatus = () => {
//   const [modalOpen, setModalOpen] = useState(false);
//   const [status, setStatus] = useState('');

//   const sendStatus = () => {
//     if (status.trim() !== '') {
//       const dbRef = collection(firestore, 'posts');
//       const object = {
//         status: status,
//       };
//       addDoc(dbRef, object)
//         .then((res) => {
//           console.log('Document has been added successfully');
//           setStatus(''); // Clear the input field after posting
//           setModalOpen(false); // Close the modal after posting
//         })
//         .catch(error => console.log(error));
//     }
//   };

//   return (
//     <div className="post-status-main">
//       <div className="post-status">
//         <button className="open-post-modal" onClick={() => setModalOpen(true)}>
//           Start a post
//         </button>
//       </div>
//       <ModalComponent
//         setStatus={setStatus}
//         modalOpen={modalOpen}
//         setModalOpen={setModalOpen}
//         status={status}
//         sendStatus={sendStatus}
//       />
//     </div>
//   );
// };

// export default PostStatus;