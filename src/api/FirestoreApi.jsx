// import {firestore} from  '../firebaseConfig'
// import { toast } from "react-toastify"
// import {
//  addDoc,
// collection
// } from 'firebase/firestore'

// let dbRef = collection(firestore,'posts')

// export const postStatus = (status) => {
//   if (status.trim() !== '') {
//       let object={
//   status:status
//  }
//       };

//  addDoc(dbRef,object)
//  .then(() => toast.success('Document has been added successfully'))
//  .catch(error => toast.errpr(error))
// }
import { firestore } from '../firebaseConfig';
import { toast } from 'react-toastify';
import { addDoc, collection, onSnapshot } from 'firebase/firestore';

const dbRef = collection(firestore, 'posts');
const userRef = collection(firestore, 'users');


// send posts to firestore
export const postStatus = (object) => {
  // if (status.trim() !== '') {
  //   const object = {
  //     status: status,
  //   };

    addDoc(dbRef, object)
      .then(() => {
        toast.success('Document has been added successfully');
      })
      .catch((error) => {
        toast.error(error.message); // Display the error message
      });
  } 


// get posts from firestore
export const getStatus =(setAllStatus) => {
 onSnapshot(dbRef,(response) =>{
  setAllStatus(response.docs.map((doc)=>{
   return {...doc.data(),id:doc.id}}))
 })
}

// send users data to firestore
export const postUserData = (object) => {
 addDoc(userRef,object)
 .then(() => {})
 .catch((err) =>{
  console.log(err)
 })
}

// export current user and email to local storage
export const getCurrentUser = (setCurrentUser) => {
 let currEmail = localStorage.getItem('userEmail')
  onSnapshot(userRef,(response) =>{
  setCurrentUser(response.docs.map((doc)=>{
   return {...doc.data(),userID:doc.id}
  }).filter((item) =>{
   return item.email ===localStorage.getItem("userEmail")
  })[0]
   )
 })
}