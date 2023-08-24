import { signInWithEmailAndPassword,createUserWithEmailAndPassword,GoogleAuthProvider,signInWithPopup} from 'firebase/auth'
import { auth } from "../firebaseConfig"




export const LoginApi = (email,password) => {
 try {
  let response = signInWithEmailAndPassword(auth,email,password)
  return response
 } catch (error) {
  return error
 }
 
}

export const RegisterApi = (email,password) => {
 try {
  let response = createUserWithEmailAndPassword(auth,email,password)
  return response
 } catch (error) {
  return error
 }
 
}
export const GoogleSignInApi = (email,password) => {
 try {
  let googleProvider = new GoogleAuthProvider()
  let response = signInWithPopup(auth,googleProvider)
  return response
 } catch (error) {
  return error
 }
}