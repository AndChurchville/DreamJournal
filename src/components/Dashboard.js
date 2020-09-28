import React, {useState, useEffect} from 'react';
import firebase from '../firebase';


//A list of all dream entries
export default function Dashboard() {

    const [ dreams, setDreams] = useState([])
  
    useEffect(() => {
      firebase
        .firestore()
        .collection("dreams")
        .onSnapshot(snapshot => {
          const entries = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
  
          setDreams(entries)
        });
        
    }, []
    )



    return (
        <>
        {dreams.map(dream => {
          return(
            <>
             <h1>{dream.title}</h1>
             <p>{dream.entry}</p>
             <p> Feelings: {dream.feelings}</p>
       
        </>
          )
        })}
       
      </>
    );
      }
