import { useState, useEffect } from "react";
import { doc, onSnapshot } from "firebase/firestore";

/**
 * A React component that displays a user's mailbox items.
 * @param {object} props - The component's props.
 * @param {string} props.user - The user's email.
 * @returns {JSX.Element} The rendered component.
 */
export default function ReactItem({user}){
	
/**
 * State for the user's mailbox.
 * @type {[object, function]}
 */
const [mailboxState, setMailboxState ] = useState({});
/**
 * State for the status of each mailbox item.
 * @type {[boolean[], function]}
 */
const [statusContainer, setStatusContainer] = useState([]);

useEffect(()=>{


},[mailboxState])

useEffect(()=>{

const unsub = onSnapshot(doc(db, "users", user), (doc) => {
    const mailbox = doc.data().mailbox;
    setMailboxState(mailbox);
});

return unsub;
},[]);

useEffect(()=>{
let array = [];
for(let i=0;i<=mailboxState.length-1;i++){
  array.push(false);
}
setStatusContainer(array);
},[mailboxState]);

return (<>

  </>);

}