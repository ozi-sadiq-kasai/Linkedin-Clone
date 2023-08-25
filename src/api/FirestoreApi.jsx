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
import { addDoc, collection } from 'firebase/firestore';

const dbRef = collection(firestore, 'posts');

export const postStatus = (status) => {
  if (status.trim() !== '') {
    const object = {
      status: status,
    };

    addDoc(dbRef, object)
      .then(() => {
        toast.success('Document has been added successfully');
      })
      .catch((error) => {
        toast.error(error.message); // Display the error message
      });
  } else {
    toast.error('Status cannot be empty'); // Notify when status is empty
  }
};
