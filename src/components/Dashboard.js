import React, {useState, useEffect} from 'react';
import firebase from '../firebase';
import styled from 'styled-components';


//A list of all dream entries
export default function Dashboard() {

    const [ dreams, setDreams] = useState([])
  
    useEffect(() => {
      let isSubbed = true;
      firebase.firestore()
        .collection("dreams")
        .orderBy('timestamp', 'desc')
        .onSnapshot(snapshot => {
          const entries = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
          if (isSubbed){
            setDreams(entries)
          }
        });
        return () => isSubbed = false
    }, []
    )



    return (
        <>
        {dreams.map(dream => {
          return (
             <div key={dream.id}>
            {/* <ListContainer> */}
              <EntryCard> 
                <h1>{dream.title}</h1>
                <p>{dream.entry}</p>
                <p> <strong>Feelings: </strong> {dream.feelings}</p>
              </EntryCard>
              {/* </ListContainer> */}
            </div>
          );
        })}
       
      </>
    );
      }

// const ListContainer = styled.div`
// display: flex;
// flex-direction: row;
// flex-wrap: wrap;
// `;
      const EntryCard = styled.div`
       h1{
         line-height: 45px;
       }
      background-color: #392757;
      color: white;
      border-radius: 10px;
      text-align: center;
      font-family: 'Poppins', sans-serif;
      width: 350px;
      margin: 50px auto;
      padding: 20px;
      line-height: 25px;

      @media (max-width: 1600px){
        margin: 20px auto;
      }

      @media (max-width: 400px){
       width: 300px;
      }
      `;