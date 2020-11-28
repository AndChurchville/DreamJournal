import React, {useState, useEffect} from 'react';
import firebase from '../firebase';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';


//A list of all dream entries
export default function Dashboard() {

    const [ dreams, setDreams] = useState([])
   
    useEffect(() => { 
      const db = firebase.firestore();
      let isSubbed = true;
      db.collection("dreams")
        .where('userId', '!=', 'null')
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

// function for deleting a dream entry
// TODO: Find a better way to only have user delete own dreams
      const DreamDelete = (e) => {
        firebase.firestore().collection("dreams").doc(e).delete().then(
              console.log("Dream Successfully Deleted!")
          ).catch(function(error){
            alert('You can\'t delete other user\'s dreams');
          });
      };


    return (
        <>
        {/*Map through the dreams hook */}
        {dreams.map(dream => {
          return (
             <div key={dream.id}>
              <EntryCard> 
                {/* button to delete dream */}
                {/* find better way to only display button on current user dream */}
               <button className='delete-dream' 
               onClick={(e)=>DreamDelete(dream.id)}
               >
                 <FontAwesomeIcon icon = {faTimes}/>
                </button>

                {/* display dream data */}
                <h1>{dream.title}</h1>
                <p>{dream.entry}</p>
                <p> <strong>Feelings: </strong> {dream.feelings}</p>
                <p><strong>Created By: </strong> {dream.userName}</p>
              </EntryCard>
            
            </div>
          );
        })}
       
      </>
    );
      }





      const EntryCard = styled.div`
       h1{
         line-height: 45px;
       }
      background-color: var(--color-primary);
      color: white;
      border-radius: 10px;
      text-align: center;
      font-family: var(--body-text);
      width: 350px;
      margin: 50px auto;
      padding: 20px;
      line-height: 25px;
      position: relative;
     

      .delete-dream{
        background-color: transparent;
        font-size: 1.5rem;
        position: absolute;
        top: 0;
        right: 10px;
        margin: 10px;
        padding:0;
        &:hover{
          color: var(--delete-btn);
        }
      
      }

      @media (max-width: 1600px){
        margin: 20px auto;
      }

      

      @media (max-width: 400px){
       width: 300px;
      }
      `;