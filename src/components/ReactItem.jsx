import { useState, useEffect } from "react";
import { doc, onSnapshot } from "firebase/firestore";

export default function ReactItem({user}){
	
const [mailboxState, setMailboxState ] = useState({});
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