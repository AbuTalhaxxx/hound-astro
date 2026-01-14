import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, updateDoc, arrayUnion, arrayRemove} from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword  } from "firebase/auth";

const firebaseConfig = {
   // leaaving  this empty due to security reasons
  };

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

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

export function isNumber(str) {
  return !isNaN(parseFloat(str)) && isFinite(str);
}

export function isValidEmail(email) {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return emailRegex.test(email);
}




