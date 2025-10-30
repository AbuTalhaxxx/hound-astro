import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, updateDoc, arrayUnion, arrayRemove} from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword  } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBBZbFiWpOE_fDL9LxJkttoiSUHgC4ThSc",
  
    authDomain: "marketing-backend-5f8b7.firebaseapp.com",
  
    projectId: "marketing-backend-5f8b7",
  
    storageBucket: "marketing-backend-5f8b7.appspot.com",
  
    messagingSenderId: "660284956285",
  
    appId: "1:660284956285:web:1eb69c8339a525f80e5b14",
  };

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

/**
 * Signs in a user with email and password.
 * @param {string} email - The user's email.
 * @param {string} password - The user's password.
 * @returns {Promise<[boolean, string?]>} A promise that resolves to an array containing a boolean indicating success and the user's email if successful.
 */
export async function signIn(email,password){
try{
const credentials = await signInWithEmailAndPassword(auth, email, password);
return [true, credentials.user.email];
}
catch(error){
console.log("utils: "+error.message);
return [false];
}

}

/**
 * Updates a user's data in Firestore.
 * @param {string} email - The user's email.
 * @param {string} arrayName - The name of the array field to update.
 * @param {any} array - The data to update with.
 * @param {('e'|'d'|'a')} tag - The type of update ('e' for edit, 'd' for delete, 'a' for add).
 * @returns {Promise<void>} A promise that resolves when the update is complete.
 */
export async function update(email, arrayName, array, tag){
if(!navigator.onLine){
  console.log("OFFLINE");
  return;
}
const colRef = doc(db, "users", email);

if(tag==="e"){
await updateDoc(colRef, {
  [arrayName]:array,
});
}

if(tag==="d"){
await updateDoc(colRef, {
[arrayName]:arrayRemove(array)
});
}

if(tag==="a"){
await updateDoc(colRef, {
[arrayName]:arrayUnion(array)
});
}

}


/**
 * Retrieves a user's data from Firestore.
 * @param {string} user - The user's email.
 * @returns {Promise<Object|undefined>} A promise that resolves to the user's data object, or undefined if the document does not exist.
 */
export async function getData(user){
console.log(user);

const docRef = doc(db, "users", user);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
   return docSnap.data();
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}

}

/**
 * Checks if a string is a number.
 * @param {string} str - The string to check.
 * @returns {boolean} True if the string is a number, false otherwise.
 */
export function isNumber(str) {
  return !isNaN(parseFloat(str)) && isFinite(str);
}

/**
 * Checks if a string is a valid email address.
 * @param {string} email - The string to check.
 * @returns {boolean} True if the string is a valid email address, false otherwise.
 */
export function isValidEmail(email) {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return emailRegex.test(email);
}




