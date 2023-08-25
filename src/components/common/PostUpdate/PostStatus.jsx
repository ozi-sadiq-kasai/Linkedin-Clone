import React from 'react'
import './PostStatus.scss'
import ModalComponent from '../Modal'
import { useState, useMemo } from 'react'
import { postStatus,getStatus } from '../../../api/FirestoreApi'

const PostStatus = () => {
 const [modalOpen, setModalOpen] = useState(false);
 const [status, setStatus] = useState('');
 const [allStatus, setAllStatus] = useState([]);

 const sendStatus =  () =>{
   postStatus(status);

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
       {allStatus.map((post)=>{
       return(
       <div>
        <p>{post.status}</p>
       </div>
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