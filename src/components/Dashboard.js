import React, {useState, useEffect} from 'react';
import firebase from '../firebase';
import styled from 'styled-components';


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
          return (
             <>
            {/* <ListContainer> */}
              <EntryCard>
                <h1>{dream.title}</h1>
                <p>{dream.entry}</p>
                <p> <strong>Feelings: </strong> {dream.feelings}</p>
              </EntryCard>
              {/* </ListContainer> */}
            </>
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
      background-color: gray;
      color: white;
      border-radius: 15px;
      text-align: center;
      width: 300px;
      margin: 20px auto;
      padding: 10px;
      `;